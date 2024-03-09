
import { Either } from "@/core/domain/Either";
import type { DataError } from "@/core/domain/DataError";
import type { IAuthRepository } from "@/domain/repository/IAuthRepository";
import type CustomAxios from "@/core/utility/customAxios";
import { LoginResponseModel, RegisterReponseModel, registerDataModel } from "../models/auth";
import type { AxiosError } from "axios";
import type {  ResetPasswordRequest, loginRequest, registerData, tokenData } from "@/domain/entities/auth";
import { BaseRepository } from "@/core/data/respository";

export class AuthRepository extends BaseRepository implements IAuthRepository  {
    constructor({ axios }: { axios: CustomAxios }) {
        super({axios});
    };

    async login(payload: loginRequest): Promise<Either<DataError, tokenData>> {

        try {
            const { data } = await this.axios.post('/api/v1/auth/sign-in', payload);
            const result = LoginResponseModel.fromJson(data);
            return Either.right(result.toDomain().data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    }

    async register(payload: loginRequest): Promise<Either<DataError, registerData>> {
        try {
            const { data } = await this.axios.post('/api/v1/auth/register', payload);
            const result = RegisterReponseModel.fromJson(data);
            return Either.right(result.toDomain().data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    };

    async fetchUserPermissions(userId: Number): Promise<Either<DataError, Array<string>>> {
        try {
            const { data } = await this.axios.get(`/api/v1/auth/user-permissions/${userId}`);
            return Either.right(data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    }

    async editUser(payload: loginRequest): Promise<Either<DataError, registerData>> {
        try {
            const { data } = await this.axios.put('/api/v1/auth/update-user', payload);
            const result = RegisterReponseModel.fromJson(data);
            return Either.right(result.toDomain().data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    };

    async forgotPassword(email: string): Promise<Either<DataError, boolean>> {
        try {
            const { data } = await this.axios.post(`/api/v1/auth/forgot-password`, { "email": email });
            return Either.right(data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    };
    async resetPassword(payload: ResetPasswordRequest): Promise<Either<DataError, boolean>> {
        try {
            const { data } = await this.axios.post(`/api/v1/auth/reset-password`, payload);
            return Either.right(data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    };

}
