import type { Permission, PermissionGroup, Role } from "@/domain/entities/access-control";
import type { User } from "@/domain/entities/auth";
import { defineStore } from "pinia";

interface State {
    roles: Role[] | [],
    permissionGroups: PermissionGroup[] | [],
    userRolePermissions: Permission[] | [],
    loadingRoleRequest: boolean
    loadingPermissionGroupRequest: boolean
    loadingAssignPermissionRequest: boolean
    loadingRequest: boolean,
    loadingCreateRole: boolean,
    loadRolePermissions: boolean,
    loadingAssignUserRoleRequest: boolean,
    error: string,
    staffs: User[],
    staffDetails: User | null,
    loadingStaffDetails: boolean,
    successStatus: boolean,
}

const useAccessControlState = defineStore('AccessControlState', {
    state: (): State => {
        return {
            roles: [],
            permissionGroups: [],
            userRolePermissions: [],
            loadingRoleRequest: false,
            loadingPermissionGroupRequest: false,
            loadingAssignPermissionRequest: false,
            loadingRequest: false,
            loadingCreateRole: false,
            loadRolePermissions: false,
            loadingAssignUserRoleRequest: false,
            error: '',
            staffs: [],
            staffDetails: null,
            loadingStaffDetails: false,
            successStatus: false,
        }
    },
});

export default useAccessControlState;

export type AccessControlStoreType = Omit<
    ReturnType<typeof useAccessControlState>,
    keyof ReturnType<typeof defineStore>
>;

