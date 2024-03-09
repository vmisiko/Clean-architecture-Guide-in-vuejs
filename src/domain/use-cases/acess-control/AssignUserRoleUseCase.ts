import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import type { AssignUserRoleRequest } from "@/domain/entities/access-control";
import type { User } from "@/domain/entities/auth";
import type { IAccessControlRepository } from "@/domain/repository/IAccessRepository";

export class AssignUserRoleUseCase {
    private accessControlRepository: IAccessControlRepository;
    constructor({ accessControlRepository }: { accessControlRepository: IAccessControlRepository; }) {
        this.accessControlRepository = accessControlRepository;
    }

    execute(payload: AssignUserRoleRequest): Promise<Either<DataError, User>> {
        return this.accessControlRepository.AssignUserRole(payload);
    }
}
