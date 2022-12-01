import { Auth } from "aws-amplify";
import { apolloClient } from "../../shared/lib/apollo";
import { GET_CURRENT_USER_META } from "../../../appGraphql/user";
import { GetCurrentUserMetaQuery } from "../../../appGraphql/user.generated";
import { useUserStore } from "../../shared";
import { getUserRoles } from "./getUserRoles";

export const fetchUserInformation = async (
  { selectedUserRoleID } = { selectedUserRoleID: null }
) => {
  try {
    const user = await Auth.currentAuthenticatedUser();

    if (user) {
      // Get user data

      const data = await apolloClient.query<GetCurrentUserMetaQuery>({
        query: GET_CURRENT_USER_META,
        fetchPolicy: "no-cache",
      });

      const userData = data.data.current_user_meta[0];

      // Update user data in the global store
      const userRoles = await getUserRoles({
        userRoles: userData.user_meta_user_roles,
      });

      const selectedUserRole = userRoles[0];

      if (selectedUserRoleID) {
        userRoles.find((userRole) => userRole.id === selectedUserRoleID);
      }

      useUserStore.setState({
        firstName: userData.firstName,
        lastName: userData.lastName,
        joinedDate: userData.created_at,
        userMetaID: userData.id,
        email: userData.email,
        username: userData.username,
        avatarKey: userData.avatarKey,
        isSuperAdmin: !!userData.user_meta_user_roles.find(
          (userRole) => userRole.user_role.name === "superAdmin"
        ),
        defaultUserProfileJobRole: undefined,
        userAvailability: undefined,
        userRoles,
        selectedUserRole,
      });

      return { isAccountInitiated: userData.isAccountInitiated };
    }

    return { isAccountInitiated: false };
  } catch (error) {
    return { isAccountInitiated: false };
  }
};
