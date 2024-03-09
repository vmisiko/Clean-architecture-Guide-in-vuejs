import type { Permission, Role } from "../access-control";
import type { Dealer } from "../vehicles";

export interface loginRequest {
    email: string;
    password?: string;
    firstname?: string,
    lastname?: string,
    dealer_id?: Number,
    phone?: string,
}

export interface LoginResponse {
    message: string;
    data: tokenData;
    errors: ErrorData[];
}

export interface tokenData {
    accessToken: string;
}

export interface ErrorData {
    message: string;
    source: string;
    value: string;
}


export interface RegisterReponse {
    message: string;
    data: registerData;
    errors: any[];
}

export interface registerData {
    userID: number;
    email: string;
    roleID: number;
    role: string;
}

export interface User {
    user_id: Number;
    email: string;
    phone: string;
    permissions: Permission[] | null,
    firstname: string,
    lastname: string
    dealer: Dealer
    roles: Role[],
    signature: string,
}

export interface ResetPasswordRequest {
    token: string;
    password: string;
}
