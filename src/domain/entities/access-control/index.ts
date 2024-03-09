
export interface roleRequest {
    name: string,
    display_name: string,
    description: string
}

export interface Role {
    id: Number,
    name: string,
    display_name: string,
    description: string
    permissions?: Permission[],
}

export interface Permission {
    id: Number,
    name: string,
    display_name: string,
}

export interface PermissionGroup {
    id: Number;
    name: string;
    permissions: Permission[];
}

export interface AssignRolePermissionRequest {
    roleId: Number,
    permission: Permission,
}

export interface AssignUserRoleRequest {
    userId: Number,
    role: Role
}



