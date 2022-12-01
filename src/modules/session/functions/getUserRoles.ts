import uniq from "lodash/uniq";
import { GetCurrentUserMetaQuery } from "../../../appGraphql/user.generated";
import { apolloClient } from "../../shared/lib/apollo";
import { RouteGroupsQuery } from "../../../appGraphql/routeGroup.generated";
import { ROUTE_GROUPS } from "../../../appGraphql/routeGroup";

interface GetUserRolesArgs {
  userRoles: GetCurrentUserMetaQuery["current_user_meta"][0]["user_meta_user_roles"];
}

export const getUserRoles = async ({ userRoles }: GetUserRolesArgs) => {
  // Get route group data
  const routeGroupData = await apolloClient.query<RouteGroupsQuery>({
    query: ROUTE_GROUPS,
    fetchPolicy: "no-cache",
  });

  return userRoles.map((userRoleData) => {
    let routeGroupIds = [];

    const userRole = {
      id: userRoleData.userRoleID,
      name: userRoleData.user_role.name,
      routes: [],
      routeGroups: undefined,
      capabilities: [],
    };

    userRole.routes = userRoleData?.user_role?.user_role_routes.map(
      (userRoleRoute) => {
        const groupId = userRoleRoute.route.route_group.id;

        if (groupId) {
          routeGroupIds.push(groupId);
        }

        const { route } = userRoleRoute;

        return {
          name: route.name,
          iconName: route.iconName,
          path: route.path,
          showInMenu: Boolean(route.showInMenu),
          order: route.order,
          routeGroup: route.route_group.id,
        };
      }
    );

    routeGroupIds = uniq(routeGroupIds);

    userRole.routeGroups = routeGroupIds.map((routeGroupId) => {
      const routeGroup = routeGroupData.data.route_group.find(
        (item) => item.id === routeGroupId
      );

      return {
        id: routeGroup.id,
        name: routeGroup.name,
        path: routeGroup.path,
        iconName: routeGroup.iconName,
      };
    });

    userRole.capabilities =
      userRoleData?.user_role?.user_role_capabilities?.map((capabilityData) => {
        return {
          name: capabilityData.capability.name,
          id: capabilityData.capability.id,
        };
      });

    return userRole;
  });
};
