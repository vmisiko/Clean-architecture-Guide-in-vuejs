import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import type { loginRequest, registerData } from "@/domain/entities/auth";
import type { IAuthRepository } from "@/domain/repository/IAuthRepository";

export class EditUserUseCase {
    private authRepository: IAuthRepository;

    constructor({ authRepository }: { authRepository: IAuthRepository; }) {
        this.authRepository = authRepository;
    }

    execute(payload: loginRequest): Promise<Either<DataError, registerData>> {
        return this.authRepository.editUser(payload);
    }
}
