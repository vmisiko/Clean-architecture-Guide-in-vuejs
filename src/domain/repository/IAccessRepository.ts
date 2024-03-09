import type { Either } from "@/core/domain/Either";
import type { DataError } from "@/core/domain/DataError";
import type { AssignRolePermissionRequest, AssignUserRoleRequest, Permission, PermissionGroup, Role, roleRequest } from "../entities/access-control";
import type { User } from "../entities/auth";

export interface IAccessControlRepository {
    createRole(payload: roleRequest): Promise<Either<DataError, Number>>;
    fetchRoles(): Promise<Either<DataError, Role[]>>;
    fetchpermissionGroups(): Promise<Either<DataError, PermissionGroup[]>>;
    fetchRolePermissions(id: string): Promise<Either<DataError, Permission[]>>;
    AssignRolePermission(payload: AssignRolePermissionRequest): Promise<Either<DataError, Role>>;
    AssignUserRole(payload: AssignUserRoleRequest): Promise<Either<DataError, User>>;
    fetchStaffs(): Promise<Either<DataError, User[]>>;
    fetchStaffsDetails(userId: string): Promise<Either<DataError, User>>;
}