import { gql } from '@apollo/client';

export const INSERT_BOOKMARK_LINK = gql`
  mutation insertBookmarkLink($object: bookmark_link_insert_input!) {
    insert_bookmark_link_one(object: $object) {
      id
    }
  }
`;

export const UPDATE_BOOKMARK_LINK = gql`
  mutation updateBookmarkLink($_set: bookmark_link_set_input, $pk_columns: bookmark_link_pk_columns_input!) {
    update_bookmark_link_by_pk(_set: $_set, pk_columns: $pk_columns) {
      id
    }
  }
`;

export const DELETE_BOOKMARK_LINK = gql`
  mutation deleteBookmarkLink($where: bookmark_link_bool_exp!) {
    delete_bookmark_link(where: $where) {
      affected_rows
    }
  }
`;
