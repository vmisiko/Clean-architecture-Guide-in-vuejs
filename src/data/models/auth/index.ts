import type { LoginResponse, RegisterReponse, registerData, tokenData, ErrorData } from "@/domain/entities/auth";

export class RegisterReponseModel {
    public message: string;
    public data:    registerDataModel;
    public errors:  ErrorData[];

    constructor({message, data, errors}: {
        message: string,
        data:    registerDataModel,
        errors:  any[],
    }) {
        this.message = message;
        this.data = data;
        this.errors = errors;
    }


    static fromJson = (json: any): RegisterReponseModel => new RegisterReponseModel({
        message: json.message,
        data: json.data,
        errors: json.errors,
    });

    public toDomain = (): RegisterReponse => ({
        message: this.message,
        data: registerDataModel.fromJson(this.data).toDomain(),
        errors: this.errors,
    });
    
}

export class registerDataModel {
    public user_id: number;
    public email:   string;
    public role_id: number;
    public role:    string;

    constructor({
        user_id,
        email,
        role_id,
        role,
    }: {
        user_id: number,
        email:   string,
        role_id: number,
        role:    string,
    }) {
        this.user_id = user_id;
        this.email = email;
        this.role_id = role_id;
        this.role = role;
    }

    static fromJson = (json: any): registerDataModel => new registerDataModel({
        user_id: json.user_id,
        email: json.email,
        role_id: json.role_id,
        role: json.role,
    });

    public toDomain = (): registerData => ({
        userID: this.user_id,
        email: this.email,
        roleID:this.role_id,
        role: this.role,
    });
}


export class LoginResponseModel {
    public message: string;
    public data:    TokenDataModel;
    public errors:  ErrorData[];

    constructor({message, data, errors}: {
        message: string,
        data:    TokenDataModel,
        errors:  ErrorData[],
    }) {
        this.message = message;
        this.data = data;
        this.errors = errors;
    }


    static fromJson = (json: any): LoginResponseModel  => new LoginResponseModel({
        message: json.message,
        data: json.data,
        errors: json.errors,
    });

    public toDomain = (): LoginResponse => ({
        message: this.message,
        data: TokenDataModel.fromJson(this.data).toDomain(),
        errors: this.errors,
    });
    
}


export class TokenDataModel {
    access_token: string;

    constructor({
        access_token
    }: {access_token: string}) {
        this.access_token = access_token;
    }

    static fromJson  = (json: any): TokenDataModel => new TokenDataModel({
        access_token: json.access_token,
    });

    public toDomain = (): tokenData => ({
        accessToken: this.access_token,
    })
}