import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import type { IAuthRepository } from "@/domain/repository/IAuthRepository";

export class ForgotPasswordUseCase {
    private authRepository: IAuthRepository;

    constructor({ authRepository }: { authRepository: IAuthRepository; }) {
        this.authRepository = authRepository;
    }

    execute(email: string): Promise<Either<DataError, boolean>> {
        return this.authRepository.forgotPassword(email);
    }
}
