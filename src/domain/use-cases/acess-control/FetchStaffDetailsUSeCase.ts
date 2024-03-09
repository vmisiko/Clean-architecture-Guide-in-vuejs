import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import type { User } from "@/domain/entities/auth";
import type { IAccessControlRepository } from "@/domain/repository/IAccessRepository";

export class FetchStaffDetailssUseCase {
    private accessControlRepository: IAccessControlRepository;
    constructor({ accessControlRepository }: { accessControlRepository: IAccessControlRepository; }) {
        this.accessControlRepository = accessControlRepository;
    }
    execute(userId: string): Promise<Either<DataError, User>> {
        return this.accessControlRepository.fetchStaffsDetails(userId);
    }
}

