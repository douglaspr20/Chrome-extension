import * as Types from "./generated/graphql";

export type BookmarkFoldersQueryVariables = Types.Exact<{
  bookmarkFolderWhere?: Types.InputMaybe<Types.Bookmark_Folder_Bool_Exp>;
  bookmarkLinkWhere?: Types.InputMaybe<Types.Bookmark_Link_Bool_Exp>;
}>;

export type BookmarkFoldersQuery = {
  __typename?: "query_root";
  bookmark_folder_aggregate: {
    __typename?: "bookmark_folder_aggregate";
    nodes: Array<{
      __typename?: "bookmark_folder";
      id: any;
      name: string;
      userType?: any | null;
      orderDisplay: number;
      folderParent?: string | null;
      bookmarks_subfolders_aggregate: {
        __typename?: "bookmark_folder_aggregate";
        aggregate?: {
          __typename?: "bookmark_folder_aggregate_fields";
          count: number;
        } | null;
      };
      bookmark_links_aggregate: {
        __typename?: "bookmark_link_aggregate";
        aggregate?: {
          __typename?: "bookmark_link_aggregate_fields";
          count: number;
        } | null;
      };
    }>;
    aggregate?: {
      __typename?: "bookmark_folder_aggregate_fields";
      count: number;
    } | null;
  };
  bookmark_link: Array<{
    __typename?: "bookmark_link";
    id: any;
    title: string;
    url: string;
    userType?: any | null;
    orderDisplay: number;
    bookmark_folder_id?: string | null;
  }>;
};

export type InsertBookmarkFolderMutationVariables = Types.Exact<{
  object: Types.Bookmark_Folder_Insert_Input;
}>;

export type InsertBookmarkFolderMutation = {
  __typename?: "mutation_root";
  insert_bookmark_folder_one?: {
    __typename?: "bookmark_folder";
    id: any;
  } | null;
};

export type UpdateBookmarkFolderMutationVariables = Types.Exact<{
  _set?: Types.InputMaybe<Types.Bookmark_Folder_Set_Input>;
  pk_columns: Types.Bookmark_Folder_Pk_Columns_Input;
}>;

export type UpdateBookmarkFolderMutation = {
  __typename?: "mutation_root";
  update_bookmark_folder_by_pk?: {
    __typename?: "bookmark_folder";
    id: any;
  } | null;
};

export type UpdatemanyBookmarkFolderMutationVariables = Types.Exact<{
  where: Types.Bookmark_Folder_Bool_Exp;
  _set?: Types.InputMaybe<Types.Bookmark_Folder_Set_Input>;
}>;

export type UpdatemanyBookmarkFolderMutation = {
  __typename?: "mutation_root";
  update_bookmark_folder_many?: Array<{
    __typename?: "bookmark_folder_mutation_response";
    affected_rows: number;
  } | null> | null;
};

export type DeleteBookmarkFolderMutationVariables = Types.Exact<{
  where: Types.Bookmark_Folder_Bool_Exp;
}>;

export type DeleteBookmarkFolderMutation = {
  __typename?: "mutation_root";
  delete_bookmark_folder?: {
    __typename?: "bookmark_folder_mutation_response";
    affected_rows: number;
  } | null;
};
