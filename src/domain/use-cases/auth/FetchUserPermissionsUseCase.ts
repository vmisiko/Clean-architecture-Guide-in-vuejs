import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import type { IAuthRepository } from "@/domain/repository/IAuthRepository";

export class FetchUserPermissionsUseCase {
    private authRepository: IAuthRepository;

    constructor({ authRepository }: { authRepository: IAuthRepository; }) {
        this.authRepository = authRepository;
    }

    execute(userId: Number): Promise<Either<DataError, Array<String>>> {
        return this.authRepository.fetchUserPermissions(userId);
    }
}
