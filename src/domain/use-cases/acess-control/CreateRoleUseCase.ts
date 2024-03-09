import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import type { roleRequest } from "@/domain/entities/access-control";
import type { IAccessControlRepository } from "@/domain/repository/IAccessRepository";

export class CreateRolesUseCase {
    private accessControlRepository: IAccessControlRepository;
    constructor({ accessControlRepository }: { accessControlRepository: IAccessControlRepository; }) {
        this.accessControlRepository = accessControlRepository;
    }

    execute(payload: roleRequest): Promise<Either<DataError, Number>> {
        return this.accessControlRepository.createRole(payload);
    }
}
