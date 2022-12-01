import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { BOOKMARK_FOLDERS_AND_LINKS_WITHOUT_FOLDER } from "../../appGraphql/bookmarkFolder";
import {
  BookmarkFoldersQuery,
  BookmarkFoldersQueryVariables,
} from "../../appGraphql/bookmarkFolder.generated";
import ManageBookmarks from "../../modules/bookmarks/components/manageBookmarks";
import {
  LoadingScreen,
  SectionContainer,
  useUserStore,
} from "../../modules/shared";
import { BookmarkFolderOrLinkTypes } from "../../modules/bookmarks/types";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState<BookmarkFolderOrLinkTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const userRoles = useUserStore((state) => state.userRoles);

  const { data, loading } = useQuery<
    BookmarkFoldersQuery,
    BookmarkFoldersQueryVariables
  >(BOOKMARK_FOLDERS_AND_LINKS_WITHOUT_FOLDER, {
    fetchPolicy: "no-cache",
    variables: {
      bookmarkFolderWhere: {
        _or: [
          { userType: { _is_null: true } },
          { userType: { _eq: userRoles[0]?.id } },
        ],
      },
      bookmarkLinkWhere: {
        _or: [
          { userType: { _is_null: true } },
          { userType: { _eq: userRoles[0]?.id } },
        ],
      },
    },
  });

  useEffect(() => {
    const bookmarksData = data
      ? [
          ...data?.bookmark_folder_aggregate?.nodes.map((bookmarkFolder) => {
            return {
              id: bookmarkFolder.id,
              name: bookmarkFolder.name,
              folders:
                bookmarkFolder.bookmarks_subfolders_aggregate.aggregate.count,
              links: bookmarkFolder.bookmark_links_aggregate.aggregate.count,
              orderDisplay: bookmarkFolder.orderDisplay,
              folderParent: bookmarkFolder.folderParent,
            };
          }),
          ...data?.bookmark_link?.map((bookmarkLink) => {
            return {
              id: bookmarkLink.id,
              title: bookmarkLink.title,
              url: bookmarkLink.url,
              orderDisplay: bookmarkLink.orderDisplay,
              bookmarkFolderId: bookmarkLink.bookmark_folder_id,
            };
          }),
        ].sort((a, b) => {
          if (a.orderDisplay > b.orderDisplay) {
            return 1;
          }

          if (a.orderDisplay < b.orderDisplay) {
            return -1;
          }

          return 0;
        })
      : [];

    setBookmarks(bookmarksData);
  }, [data, loading]);

  useEffect(() => {
    if (bookmarks.length > 0) {
      const bookmarksWithoutFolderParent = bookmarks.filter(
        (bookmark) =>
          bookmark.folderParent === null || bookmark.bookmarkFolderId === null
      );

      const bookmarksWithFolderParent = bookmarks.filter(
        (bookmark) => bookmark.folderParent || bookmark.bookmarkFolderId
      );

      let bookmarksCreated = [];

      chrome.bookmarks.getTree(async function (three) {
        const rootThree = three[0].children[0].id;

        for (const bookmark of bookmarksWithoutFolderParent) {
          let [bookmarkExistOrSaved] = await chrome.bookmarks.search({
            title: bookmark.title || bookmark.name,
          });

          if (!bookmarkExistOrSaved) {
            bookmarkExistOrSaved = await chrome.bookmarks.create({
              title: bookmark.title || bookmark.name,
              parentId: rootThree,
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
          let [bookmarkExistOrSaved] = await chrome.bookmarks.search({
            title:
              bookmarkWithFolderparent.title || bookmarkWithFolderparent.name,
          });

          if (!bookmarkExistOrSaved) {
            const bookmarkId = bookmarksCreated.find(
              (bookmarkCreated) =>
                bookmarkCreated.id === bookmarkWithFolderparent.folderParent ||
                bookmarkCreated.id === bookmarkWithFolderparent.bookmarkFolderId
            );

            bookmarkExistOrSaved = await chrome.bookmarks.create({
              title:
                bookmarkWithFolderparent.title || bookmarkWithFolderparent.name,
              parentId: bookmarkId?.chromeBookmarkId,
              url: bookmarkWithFolderparent.url,
            });
          }

          bookmarksCreated = [
            ...bookmarksCreated,
            {
              ...bookmarkWithFolderparent,
              chromeBookmarkId: bookmarkExistOrSaved.id,
            },
          ];
        }

        chrome.storage.local.set({
          bookmarks: bookmarksCreated.map(
            (bookmarkCreated) => bookmarkCreated.chromeBookmarkId
          ),
        });
      });
    }

    setIsLoading(false);
  }, [bookmarks]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <SectionContainer>
      <ManageBookmarks />
    </SectionContainer>
  );
};

export default Bookmarks;
