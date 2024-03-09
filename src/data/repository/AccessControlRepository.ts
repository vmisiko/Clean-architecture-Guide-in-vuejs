
import { Either } from "@/core/domain/Either";
import type { DataError } from "@/core/domain/DataError";
import type CustomAxios from "@/core/utility/customAxios";
import { BaseRepository } from "@/core/data/respository";
import type { IAccessControlRepository } from "@/domain/repository/IAccessRepository";
import type { AssignRolePermissionRequest, AssignUserRoleRequest, Permission, PermissionGroup, Role, roleRequest } from "@/domain/entities/access-control";
import type { User } from "@/domain/entities/auth";

export class AccessControlRepository extends BaseRepository implements IAccessControlRepository {
    constructor({ axios }: { axios: CustomAxios }) {
        super({ axios });
    }
    async createRole(payload: roleRequest): Promise<Either<DataError, Number>> {
        try {
            const { data } = await this.axios.post('/api/v1/access-control/roles', payload);
            return Either.right(data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    };
    async fetchRoles(): Promise<Either<DataError, Role[]>> {
        try {
            const { data } = await this.axios.get('/api/v1/access-control/roles');
            return Either.right(data.data.roles);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    };
    async fetchpermissionGroups(): Promise<Either<DataError, PermissionGroup[]>> {
        try {
            const { data } = await this.axios.get('/api/v1/access-control/permission-groups');
            return Either.right(data.data.permission_groups);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    };

    async fetchRolePermissions(userRoleId: string): Promise<Either<DataError, Permission[]>> {
        try {
            const { data } = await this.axios.get(`/api/v1/access-control/roles/${userRoleId}/permissions`);

            return Either.right(data.data.permissions);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    };
    async AssignRolePermission(payload: AssignRolePermissionRequest): Promise<Either<DataError, Role>> {
        try {
            const { data } = await this.axios.put(`/api/v1/access-control/roles/${payload.roleId}/update-permission`, payload.permission);
            return Either.right(data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    };
    async AssignUserRole(payload: AssignUserRoleRequest): Promise<Either<DataError, User>> {
        try {
            const { data } = await this.axios.put(`/api/v1/access-control/users/${payload.userId}/update-role`, payload.role);
            return Either.right(data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    };
    async fetchStaffs(): Promise<Either<DataError, User[]>> {
        try {
            const { data } = await this.axios.get('/api/v1/access-control/users');
            return Either.right(data.data.users);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    };
    async fetchStaffsDetails(userId: string): Promise<Either<DataError, User>> {
        try {
            const { data } = await this.axios.get(`/api/v1/access-control/users/${userId}`);
            return Either.right(data.data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    };
}
