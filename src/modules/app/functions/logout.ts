import { notification } from "antd";
import { Auth } from "aws-amplify";
import { useUserStore } from "../../shared";

export const logout = async () => {
  try {
    await Auth.signOut();
    useUserStore.getState().reset();

    const { bookmarks } = await chrome.storage.local.get("bookmarks");

    if (bookmarks) {
      await Promise.all(
        bookmarks.reverse().map(async (bookmark) => {
          const bookmarkExist = await chrome.bookmarks.get(bookmark);

          if (bookmarkExist.length > 0) {
            return chrome.bookmarks.removeTree(bookmark);
          }
        })
      );
    }

    await chrome.storage.local.clear();
  } catch (error) {
    if (
      !error.message.includes("gtag") &&
      !error.message.includes("Can't find bookmark for id.")
    ) {
      notification.error({
        message: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
  }
};
