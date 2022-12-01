import * as Types from './generated/graphql';

export type InsertBookmarkLinkMutationVariables = Types.Exact<{
  object: Types.Bookmark_Link_Insert_Input;
}>;

export type InsertBookmarkLinkMutation = {
  __typename?: 'mutation_root';
  insert_bookmark_link_one?: { __typename?: 'bookmark_link'; id: any } | null;
};

export type UpdateBookmarkLinkMutationVariables = Types.Exact<{
  _set?: Types.InputMaybe<Types.Bookmark_Link_Set_Input>;
  pk_columns: Types.Bookmark_Link_Pk_Columns_Input;
}>;

export type UpdateBookmarkLinkMutation = {
  __typename?: 'mutation_root';
  update_bookmark_link_by_pk?: { __typename?: 'bookmark_link'; id: any } | null;
};

export type DeleteBookmarkLinkMutationVariables = Types.Exact<{
  where: Types.Bookmark_Link_Bool_Exp;
}>;

export type DeleteBookmarkLinkMutation = {
  __typename?: 'mutation_root';
  delete_bookmark_link?: { __typename?: 'bookmark_link_mutation_response'; affected_rows: number } | null;
};
