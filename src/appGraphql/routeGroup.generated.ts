import * as Types from './generated/graphql';

export type RouteGroupsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type RouteGroupsQuery = {
  __typename?: 'query_root';
  route_group: Array<{
    __typename?: 'route_group';
    id: any;
    iconName: string;
    name: string;
    path: string;
    order: number;
  }>;
};

export type RouteGroupsWithRoutesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type RouteGroupsWithRoutesQuery = {
  __typename?: 'query_root';
  route_group: Array<{
    __typename?: 'route_group';
    id: any;
    iconName: string;
    name: string;
    routes: Array<{ __typename?: 'route'; id: any; name: string }>;
  }>;
};
