import _ from "./scripts/lodash.min.js";
import moment from "./scripts/moment.min.js";

// Prod token
const hasura_api_token = process.env.HASURA_API_TOKEN;

const baseUrl = process.env.BASE_URL;

// Set badge status
const setBadgeStatus = (status: string = "failure") => {
  const statuses = {
    success: "#0F9D58",
    processing: "#F4B400",
    failure: "#DB4437",
  };

  chrome.action.setBadgeBackgroundColor({
    color: _.get(statuses, status),
  });
};

// Set default badge placeholder
chrome.action.setBadgeText({ text: " " });
setBadgeStatus("failure");

chrome.runtime.onInstalled.addListener(() => {
  asyncWrapper(async () => {
    const bookmarks = await listBookmarks();

    generateBookmarks(bookmarks);
  });
});

chrome.runtime.onStartup.addListener(() => {
  asyncWrapper(async () => {
    const bookmarks = await listBookmarks();
    generateBookmarks(bookmarks);
  });
});

chrome.action.onClicked.addListener(() => {
  asyncWrapper(async () => {
    const bookmarks = await listBookmarks();
    generateBookmarks(bookmarks);
  });
});

// 5 min interval for sync checking
setInterval(() => {
  localStorage.setItem("last_sync", `${Date.now()}`);
  asyncWrapper(async () => {
    const bookmarks = await listBookmarks();
    generateBookmarks(bookmarks);
  });
}, 300000);

const fetch_user_meta = async (email: string) => {
  try {
    const res = await fetch(`${baseUrl}/usermetauserroles?email=${email}`, {
      headers: {
        "X-Hasura-API-Token": hasura_api_token,
        "Content-Type": "application/json",
      },
    });

    const { user_role } = await res.json();

    const roles = (user_role || []).map((role) => ({
      name: _.toLower(_.get(role, "name")),
      id: _.get(role, "id"),
    }));

    return roles;
  } catch (e) {
    console.log("fetch_user_meta", e);
    return e;
  }
};

interface BookmarkFolderOrLinkTypes {
  id?: string;
  name?: string;
  title?: string;
  url?: string;
  folders?: number;
  links?: number;
  orderDisplay?: number;
}

const listBookmarks = (): Promise<BookmarkFolderOrLinkTypes[]> => {
  return new Promise(async (resolve) => {
    try {
      // Check role
      let userProfile = await getProfileUserInfo();
      const user_meta = await fetch_user_meta(_.get(userProfile, "email"));

      const user_roles =
        user_meta.map((role: { name: string; id: string }) => role.id) || [];

      const res = await fetch(
        `${baseUrl}/bookmarks?userRole=${user_roles[0]}`,
        {
          headers: {
            "X-Hasura-API-Token": hasura_api_token,
            "Content-Type": "application/json",
          },
        }
      );

      const { bookmark_folder, bookmark_link } = await res.json();

      return resolve([...bookmark_folder, ...bookmark_link]);
    } catch (err) {
      console.log(err);
      return resolve([]);
    }
  });
};

interface BookmarkChrome {
  id?: string;
  index?: number;
  parentId?: string;
  title: string;
  url?: string;
}

const createBookmark = (bookmark: BookmarkChrome): Promise<BookmarkChrome> => {
  return new Promise((resolve) => {
    try {
      chrome.bookmarks.create(bookmark, (newBookmark) => resolve(newBookmark));
    } catch (e) {
      console.log(e);
      return resolve(null);
    }
  });
};

const findBookmark = (query): Promise<any[]> => {
  return new Promise((resolve) => {
    try {
      chrome.bookmarks.search(query, (searchResult) => {
        resolve(searchResult);
      });
    } catch (e) {
      console.log(e);
      return resolve(null);
    }
  });
};

const getProfileUserInfo = () =>
  new Promise((resolve) =>
    chrome.identity.getProfileUserInfo((userProfile) => resolve(userProfile))
  );

const generateBookmarks = async (bookmarks = []) => {
  setBadgeStatus("processing");

  const findAndDeleteDuplicateFolders = (globalFolderName, globalId) =>
    new Promise((resolve) => {
      try {
        // Search for Duplicates
        chrome.bookmarks.search({ title: globalFolderName }, (searchRes) => {
          if (!searchRes.length)
            return resolve(start(globalFolderName, globalId));

          const duplicate = _.find(
            searchRes,
            (o) =>
              _.get(o, "parentId") === globalId &&
              !_.get(o, "url") &&
              _.get(o, "id")
          );
          if (!duplicate) return resolve(start(globalFolderName, globalId));

          chrome.bookmarks.removeTree(duplicate.id, async () => {
            return resolve(
              await findAndDeleteDuplicateFolders(globalFolderName, globalId)
            );
          });
        });
      } catch (e) {
        console.log(e);
        return resolve(null);
      }
    });

  const globalFolderName = "Chameleon";
  const globalId = "1";

  // Find and delete duplicate folders
  await findAndDeleteDuplicateFolders(globalFolderName, globalId);

  // Function for creating elements
  async function start(globalFolderName, globalId) {
    // Creating "Chameleon" folder
    const mainFolder = await createBookmark({
      parentId: globalId,
      index: 0,
      title: globalFolderName,
    });

    const bookmarksWithoutFolderParent = bookmarks.filter(
      (bookmark) =>
        bookmark.folderParent === null || bookmark.bookmark_folder_id === null
    );

    const bookmarksWithFolderParent = bookmarks.filter(
      (bookmark) => bookmark.folderParent || bookmark.bookmark_folder_id
    );

    let bookmarksCreated = [];

    for (const bookmark of bookmarksWithoutFolderParent) {
      let [bookmarkExistOrSaved] = await findBookmark({
        title: bookmark.title || bookmark.name,
      });

      if (!bookmarkExistOrSaved) {
        bookmarkExistOrSaved = await createBookmark({
          title: bookmark.title || bookmark.name,
          parentId: mainFolder.id,
          url: bookmark.url,
        });
      }

      bookmarksCreated = [
        ...bookmarksCreated,
        {
          ...bookmark,
          chromeBookmarkId: bookmarkExistOrSaved.id,
        },
      ];
    }

    for (const bookmarkWithFolderparent of bookmarksWithFolderParent) {
      const bookmarkId = bookmarksCreated.find(
        (bookmarkCreated) =>
          bookmarkCreated.id === bookmarkWithFolderparent.folderParent ||
          bookmarkCreated.id === bookmarkWithFolderparent.bookmark_folder_id
      );

      const bookmarkExistOrSaved = await createBookmark({
        title: bookmarkWithFolderparent.title || bookmarkWithFolderparent.name,
        parentId: bookmarkId?.chromeBookmarkId,
        url: bookmarkWithFolderparent.url,
      });

      bookmarksCreated = [
        ...bookmarksCreated,
        {
          ...bookmarkWithFolderparent,
          chromeBookmarkId: bookmarkExistOrSaved.id,
        },
      ];
    }

    console.log("completed", bookmarks.length);
    setBadgeStatus("success");
    const syncedMessage = `Last synced at: ${moment().format("lll")}`;
    console.log(syncedMessage);
    chrome.action.setTitle({ title: syncedMessage });
  }
};

const getAuthToken = (cb, closeCounter = 0) => {
  return new Promise(async (resolve) => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      // If popup is closed no more than 3 times - reopen it
      if (chrome.runtime.lastError && closeCounter < 3)
        return getAuthToken(resolve, closeCounter + 1);

      // If popup is closed more than 3 times return auth error
      if (chrome.runtime.lastError && closeCounter >= 3) return resolve(null);

      // If there are no errors return token
      return resolve(token);
    });
  });
};

// Async wrapper
const asyncWrapper = (cb) => {
  cb();
};
