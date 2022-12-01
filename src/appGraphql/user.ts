import { gql } from '@apollo/client';

export const GET_CURRENT_USER_META = gql`
  query getCurrentUserMeta {
    current_user_meta {
      id
      avatarKey
      email
      firstName
      id
      isAccountInitiated
      lastName
      username
      created_at
      user_meta_user_roles {
        userMetaID
        userRoleID
        id
        user_role {
          name
          user_role_capabilities {
            capability {
              id
              name
            }
          }
          user_role_routes {
            route {
              iconName
              id
              name
              order
              path
              showInMenu
              route_group {
                iconName
                id
                name
                order
                path
              }
            }
          }
        }
      }
    }
  }
`;

export const UPDATE_USER_META = gql`
  mutation updateUserMeta($where: user_meta_bool_exp!, $_set: user_meta_set_input) {
    update_user_meta(where: $where, _set: $_set) {
      affected_rows
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($email: String, $firstName: String, $skipWelcomeEmail: Boolean, $username: String) {
    createUser(email: $email, firstName: $firstName, skipWelcomeEmail: $skipWelcomeEmail, username: $username)
  }
`;

export const GET_USER_COGNITO_ATTRIBUTES = gql`
  query getUserCognitoAttributes($username: String) {
    getUserCognitoAttributes(username: $username) {
      isEnabled
    }
  }
`;

export const UPDATE_COGNITO_USER = gql`
  mutation updateCognitoUser($accountStatus: String, $email: String, $password: String, $username: String!) {
    updateUser(username: $username, email: $email, password: $password, accountStatus: $accountStatus)
  }
`;

export const UPDATE_OWN_COGNITO_INFORMATION = gql`
  mutation updateOwnCognitoInformation($email: String!) {
    updateOwnCognitoInformation(email: $email)
  }
`;

export const UPDATE_USER_COGNITO_INFORMATION = gql`
  mutation updateUserCognitoInformation($email: String!, $username: String!) {
    updateUserCognitoInformation(email: $email, username: $username)
  }
`;

export const CREATE_USER_PROFILE_MATERIAL = gql`
  mutation createUserProfileMaterial($userProfileID: String!) {
    createUserProfileMaterial(userProfileID: $userProfileID)
  }
`;

export const NOTIFY_USER_PROFILE_DELETION_TO_GOOGLE_SLIDES = gql`
  mutation notifyUserProfileDeletionToGoogleSlides($profileId: String!) {
    notifyUserProfileDeletionToGoogleSlides(profileId: $profileId)
  }
`;

export const RESEND_USER_WELCOME_EMAIL = gql`
  mutation resendUserWelcomeEmail($email: String!, $firstName: String!, $username: String!) {
    resendUserWelcomeEmail(email: $email, firstName: $firstName, username: $username)
  }
`;
