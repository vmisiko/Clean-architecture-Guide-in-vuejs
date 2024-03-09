import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import type { loginRequest, tokenData } from "@/domain/entities/auth";
import type { IAuthRepository } from "@/domain/repository/IAuthRepository";

export class LoginUseCase {
    private authRepository: IAuthRepository;

    constructor ({ authRepository }: { authRepository: IAuthRepository; }) {
        this.authRepository = authRepository;
    }

    exceute(payload: loginRequest): Promise<Either<DataError,tokenData>> {
        return this.authRepository.login(payload);
    }
}
