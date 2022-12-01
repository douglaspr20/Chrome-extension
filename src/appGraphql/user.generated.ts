import * as Types from './generated/graphql';

export type GetCurrentUserMetaQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetCurrentUserMetaQuery = {
  __typename?: 'query_root';
  current_user_meta: Array<{
    __typename?: 'current_user_meta';
    id?: any | null;
    avatarKey?: string | null;
    email?: string | null;
    firstName?: string | null;
    isAccountInitiated?: boolean | null;
    lastName?: string | null;
    username?: string | null;
    created_at?: any | null;
    user_meta_user_roles: Array<{
      __typename?: 'user_meta_user_role';
      userMetaID: any;
      userRoleID: any;
      id: any;
      user_role: {
        __typename?: 'user_role';
        name: string;
        user_role_capabilities: Array<{
          __typename?: 'user_role_capability';
          capability: { __typename?: 'capability'; id: any; name: string };
        }>;
        user_role_routes: Array<{
          __typename?: 'user_role_route';
          route: {
            __typename?: 'route';
            iconName?: string | null;
            id: any;
            name: string;
            order: number;
            path?: string | null;
            showInMenu: boolean;
            route_group?: {
              __typename?: 'route_group';
              iconName: string;
              id: any;
              name: string;
              order: number;
              path: string;
            } | null;
          };
        }>;
      };
    }>;
  }>;
};

export type UpdateUserMetaMutationVariables = Types.Exact<{
  where: Types.User_Meta_Bool_Exp;
  _set?: Types.InputMaybe<Types.User_Meta_Set_Input>;
}>;

export type UpdateUserMetaMutation = {
  __typename?: 'mutation_root';
  update_user_meta?: { __typename?: 'user_meta_mutation_response'; affected_rows: number } | null;
};

export type CreateUserMutationVariables = Types.Exact<{
  email?: Types.InputMaybe<Types.Scalars['String']>;
  firstName?: Types.InputMaybe<Types.Scalars['String']>;
  skipWelcomeEmail?: Types.InputMaybe<Types.Scalars['Boolean']>;
  username?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type CreateUserMutation = { __typename?: 'mutation_root'; createUser: string };

export type GetUserCognitoAttributesQueryVariables = Types.Exact<{
  username?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type GetUserCognitoAttributesQuery = {
  __typename?: 'query_root';
  getUserCognitoAttributes: { __typename?: 'CognitoUserAttributes'; isEnabled?: boolean | null };
};

export type UpdateCognitoUserMutationVariables = Types.Exact<{
  accountStatus?: Types.InputMaybe<Types.Scalars['String']>;
  email?: Types.InputMaybe<Types.Scalars['String']>;
  password?: Types.InputMaybe<Types.Scalars['String']>;
  username: Types.Scalars['String'];
}>;

export type UpdateCognitoUserMutation = { __typename?: 'mutation_root'; updateUser: string };

export type UpdateOwnCognitoInformationMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
}>;

export type UpdateOwnCognitoInformationMutation = { __typename?: 'mutation_root'; updateOwnCognitoInformation: string };

export type UpdateUserCognitoInformationMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
  username: Types.Scalars['String'];
}>;

export type UpdateUserCognitoInformationMutation = {
  __typename?: 'mutation_root';
  updateUserCognitoInformation: string;
};

export type CreateUserProfileMaterialMutationVariables = Types.Exact<{
  userProfileID: Types.Scalars['String'];
}>;

export type CreateUserProfileMaterialMutation = { __typename?: 'mutation_root'; createUserProfileMaterial: string };

export type NotifyUserProfileDeletionToGoogleSlidesMutationVariables = Types.Exact<{
  profileId: Types.Scalars['String'];
}>;

export type NotifyUserProfileDeletionToGoogleSlidesMutation = {
  __typename?: 'mutation_root';
  notifyUserProfileDeletionToGoogleSlides: string;
};

export type ResendUserWelcomeEmailMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
  firstName: Types.Scalars['String'];
  username: Types.Scalars['String'];
}>;

export type ResendUserWelcomeEmailMutation = { __typename?: 'mutation_root'; resendUserWelcomeEmail: string };
