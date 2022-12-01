import { gql } from "@apollo/client";

export const BOOKMARK_FOLDERS_AND_LINKS_WITHOUT_FOLDER = gql`
  query bookmarkFolders(
    $bookmarkFolderWhere: bookmark_folder_bool_exp
    $bookmarkLinkWhere: bookmark_link_bool_exp
  ) {
    bookmark_folder_aggregate(
      order_by: { orderDisplay: asc }
      where: $bookmarkFolderWhere
    ) {
      nodes {
        id
        name
        userType
        orderDisplay
        folderParent
        bookmarks_subfolders_aggregate {
          aggregate {
            count
          }
        }
        bookmark_links_aggregate {
          aggregate {
            count
          }
        }
      }
      aggregate {
        count
      }
    }
    bookmark_link(where: $bookmarkLinkWhere, order_by: { orderDisplay: asc }) {
      id
      title
      url
      userType
      orderDisplay
      bookmark_folder_id
    }
  }
`;

export const INSERT_BOOKMARK_FOLDER = gql`
  mutation insertBookmarkFolder($object: bookmark_folder_insert_input!) {
    insert_bookmark_folder_one(object: $object) {
      id
    }
  }
`;

export const UPDATE_BOOKMARK_FOLDER = gql`
  mutation updateBookmarkFolder(
    $_set: bookmark_folder_set_input
    $pk_columns: bookmark_folder_pk_columns_input!
  ) {
    update_bookmark_folder_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
    }
  }
`;

export const UPDATE_BOOKMARK_FOLDER_MANY = gql`
  mutation updatemanyBookmarkFolder(
    $where: bookmark_folder_bool_exp!
    $_set: bookmark_folder_set_input
  ) {
    update_bookmark_folder_many(updates: { where: $where, _set: $_set }) {
      affected_rows
    }
  }
`;

export const DELETE_BOOKMARK_FOLDER = gql`
  mutation deleteBookmarkFolder($where: bookmark_folder_bool_exp!) {
    delete_bookmark_folder(where: $where) {
      affected_rows
    }
  }
`;
