import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import type { PermissionGroup } from "@/domain/entities/access-control";
import type { IAccessControlRepository } from "@/domain/repository/IAccessRepository";

export class FetchPermissionGroupsUseCase {
    private accessControlRepository: IAccessControlRepository;
    constructor({ accessControlRepository }: { accessControlRepository: IAccessControlRepository; }) {
        this.accessControlRepository = accessControlRepository;
    }

    execute(): Promise<Either<DataError, PermissionGroup[]>> {
        return this.accessControlRepository.fetchpermissionGroups();
    }
}
