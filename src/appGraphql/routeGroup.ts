import { gql } from '@apollo/client';

export const ROUTE_GROUPS = gql`
  query routeGroups {
    route_group {
      id
      iconName
      name
      path
      order
    }
  }
`;

export const ROUTE_GROUPS_WITH_ROUTES = gql`
  query routeGroupsWithRoutes {
    route_group {
      id
      iconName
      name
      routes(where: { isAssignable: { _eq: true } }) {
        id
        name
      }
    }
  }
`;
