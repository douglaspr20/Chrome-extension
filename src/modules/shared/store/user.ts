import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Storage } from "aws-amplify";

export interface Capability {
  name: string;
  id: string;
}

export interface RouteGroup {
  id: string;
  name: string;
  path: string;
  iconName: string;
}

export interface Route {
  name: string;
  iconName: string;
  path: null | string;
  showInMenu: boolean;
  order: number;
  routeGroup: string;
}

export interface UserRole {
  id: string;
  name: string;
  routes: Route[];
  routeGroups: RouteGroup[];
  capabilities: Capability[];
}

interface UserState {
  email: string | null;
  username: string | null;
  joinedDate: string | null;
  firstName: string | null;
  lastName: string | null;
  userMetaID: string | null;
  avatarKey: string | null;
  isSuperAdmin: boolean | null;
  defaultUserProfileJobRole: string | null;
  userAvailability: string | null;
  userRoles: UserRole[] | null;
  selectedUserRole: UserRole | null;
  setSelectedUserRole?: ({ userRoleID }) => void;
  setUserData?: (args: UserState) => void;
  getAvatarURL?: () => Promise<string | null>;
  reset?: () => void;
}

const initialState: UserState = {
  email: null,
  avatarKey: null,
  defaultUserProfileJobRole: null,
  selectedUserRole: null,
  isSuperAdmin: false,
  joinedDate: null,
  userAvailability: null,
  userRoles: [],
  firstName: null,
  lastName: null,
  userMetaID: null,
  username: null,
};

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setUserData: ({
          email,
          username,
          joinedDate,
          firstName,
          lastName,
          userMetaID,
          avatarKey,
          isSuperAdmin,
          defaultUserProfileJobRole,
          userAvailability,
          userRoles,
          selectedUserRole,
        }) =>
          set((state) => {
            return {
              ...state,
              email,
              username,
              joinedDate,
              firstName,
              lastName,
              userMetaID,
              avatarKey,
              isSuperAdmin,
              defaultUserProfileJobRole,
              userAvailability,
              userRoles,
              selectedUserRole,
            };
          }),
        setSelectedUserRole: ({ userRoleID }) => {
          const { userRoles } = get();
          const selectedUserRole = userRoles.find(
            (userRole) => userRole.id === userRoleID
          );

          set({
            selectedUserRole,
            isSuperAdmin: selectedUserRole.name === "superAdmin",
          });
        },
        getAvatarURL: async () => {
          const { avatarKey } = get();

          if (avatarKey) {
            return Storage.get(avatarKey, { expires: 86400 });
          }

          return null;
        },
        reset: () => set(initialState),
      }),
      {
        name: "userStore",
      }
    )
  )
);
