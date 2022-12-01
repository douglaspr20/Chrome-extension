export interface BookmarkFolderOrLinkTypes {
  id?: string;
  name?: string;
  title?: string;
  url?: string;
  folders?: number;
  links?: number;
  orderDisplay?: number;
  folderParent?: string | null;
  bookmarkFolderId?: string | null;
}
