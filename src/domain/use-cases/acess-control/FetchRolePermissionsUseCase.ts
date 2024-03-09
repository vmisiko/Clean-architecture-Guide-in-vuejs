import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import type { Permission, Role } from "@/domain/entities/access-control";
import type { IAccessControlRepository } from "@/domain/repository/IAccessRepository";

export class FetchRolePermissionsUseCase {
    private accessControlRepository: IAccessControlRepository;
    constructor({ accessControlRepository }: { accessControlRepository: IAccessControlRepository; }) {
        this.accessControlRepository = accessControlRepository;
    }

    execute(roleId: string): Promise<Either<DataError, Permission[]>> {
        return this.accessControlRepository.fetchRolePermissions(roleId);
    }
}
