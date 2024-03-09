import type { Either } from "@/core/domain/Either";
import type { DataError } from "@/core/domain/DataError";
import type { ResetPasswordRequest, loginRequest, registerData, tokenData } from "../entities/auth";

export interface IAuthRepository {
    login(payload: loginRequest): Promise<Either<DataError, tokenData>>;
    register(paylod: loginRequest): Promise<Either<DataError, registerData>>;
    fetchUserPermissions(userId: Number): Promise<Either<DataError, Array<string>>>;
    editUser(payload: loginRequest): Promise<Either<DataError, registerData>>;
    forgotPassword(email: string): Promise<Either<DataError, boolean>>;
    resetPassword(payload: ResetPasswordRequest): Promise<Either<DataError, boolean>>;

}
