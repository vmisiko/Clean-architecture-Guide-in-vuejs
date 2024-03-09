import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import type { IAuthRepository } from "@/domain/repository/IAuthRepository";
import type { loginRequest, registerData } from "@/domain/entities/auth";

export class RegisterUseCase {
    private authRepository: IAuthRepository;

    constructor ({ authRepository }: { authRepository: IAuthRepository; }) {
        this.authRepository = authRepository;
    }

    execute(payload: loginRequest): Promise<Either<DataError,registerData>> {
        const res = this.authRepository.register(payload);
        return res;
    }
}
