import type { LoginUseCase } from "@/domain/use-cases/auth/LoginUseCase";
import type { AuthenticationStore } from "./authState";
import type { ResetPasswordRequest, User, loginRequest } from "@/domain/entities/auth";
import type { RegisterUseCase } from "@/domain/use-cases/auth/RegisterUseCase";
import { Base64 } from 'js-base64';
import { ploc } from "@/core/ploc";
import type { Router } from "vue-router";
import type { FetchUserPermissionsUseCase, } from "@/domain/use-cases/auth/FetchUserPermissionsUseCase";
import { dependencyLocator } from "@/core/dependicies/dependencyLocator";
import type { EditUserUseCase } from "@/domain/use-cases/auth/EditUserUseCase";
import type { ForgotPasswordUseCase } from "@/domain/use-cases/auth/ForgotPasswordUseCase";
import type { ResetPasswordUseCase } from "@/domain/use-cases/auth/ResetPasswordUseCase";

export class AuthBloc extends ploc<AuthenticationStore> {
    private loginuseCase: LoginUseCase;
    private registerUseCase: RegisterUseCase;
    private fetchUserPermissionsUseCase: FetchUserPermissionsUseCase;
    private editUserUseCase: EditUserUseCase;
    private forgotPasswordUseCase: ForgotPasswordUseCase;
    private resetPasswordUseCase: ResetPasswordUseCase;

    constructor({
        store,
        router,
        loginuseCase,
        registerUseCase,
        fetchUserPermissionsUseCase,
        editUserUseCase,
        forgotPasswordUseCase,
        resetPasswordUseCase,
    }: {
        store: AuthenticationStore,
        router: Router,
        loginuseCase: LoginUseCase,
        registerUseCase: RegisterUseCase,
        fetchUserPermissionsUseCase: FetchUserPermissionsUseCase,
        editUserUseCase: EditUserUseCase;
        forgotPasswordUseCase: ForgotPasswordUseCase;
        resetPasswordUseCase: ResetPasswordUseCase;
    }) {
        super({ store, router });
        this.loginuseCase = loginuseCase;
        this.registerUseCase = registerUseCase;
        this.fetchUserPermissionsUseCase = fetchUserPermissionsUseCase;
        this.editUserUseCase = editUserUseCase;
        this.forgotPasswordUseCase = forgotPasswordUseCase;
        this.resetPasswordUseCase = resetPasswordUseCase;
    }

    login = async (payload: loginRequest): Promise<void> => {
        this.store.error = "";
        this.store.loadingRequest = true;
        this.store.token = null;
        const failureOrSuccess = await this.loginuseCase.exceute(payload);
        this.store.loadingRequest = false;

        failureOrSuccess.fold(
            error => {
                this.store.error = this.handleErrors(error);
            },
            (response) => {
                localStorage.setItem('token', response.accessToken);
                this.store.initAuth();
                this.store.token = response.accessToken;
                const userId = this.decodeToken(response.accessToken);
                const ploc = dependencyLocator.provideAuthPloc();
                ploc.fetchUserPermissions(userId);
            }
        )
    }

    register = async (payload: loginRequest): Promise<void> => {
        this.store.error = "";
        this.store.loadingRequest = true;
        this.store.regStatus = false;
        const failureOrSuccess = await this.registerUseCase.execute(payload);
        this.store.loadingRequest = false;

        failureOrSuccess.fold(
            error => {
                this.store.error = this.handleErrors(error);
            },
            response => {
                this.store.regStatus = true;
            }
        )
    }

    fetchUserPermissions = async (userId?: Number): Promise<void> => {
        const userDataString = localStorage.getItem('userData');
        const userData = userDataString ? JSON.parse(userDataString) : "";
        const user_id = userId ?? userData['user-id'];
        const failureOrSuccess = await this.fetchUserPermissionsUseCase.execute(user_id);
        failureOrSuccess.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            }, (data) => {
                localStorage.setItem('permissions', JSON.stringify(data));

            });
    }

    logout = () => {
        localStorage.clear();
        this.store.token = "";
        this.store.$reset();
    }

    decodeToken(tken?: string) {
        const token = tken ?? localStorage.getItem('token');
        if (!token) {
            return;
        }
        const partsOfToken = token.split('.');
        const middleString = Base64.decode(partsOfToken[1]);
        const payload = JSON.parse(middleString);
        const userData = payload;
        return tken ? userData['user-id'] : userData.permissions;
    }

    can(permission: string) {
        const permissions = localStorage.getItem('permissions') || this.decodeToken()
        if (permissions) {
            return permissions.includes(permission);
        }
        return false;
    }

    prefill(staff: User) {
        this.store.firstname = staff?.firstname;
        this.store.lastname = staff?.lastname;
        this.store.dealer_id = staff.dealer.dealer_id;
        this.store.email = staff?.email;
        this.store.phone = staff.phone;
    }

    async editUser(payload: loginRequest) {
        this.store.error = "";
        this.store.loadingRequest = true;
        this.store.successStatus = false;
        const failureOrSuccess = await this.editUserUseCase.execute(payload)
        this.store.loadingRequest = false;

        failureOrSuccess.fold(
            error => {
                this.store.error = this.handleErrors(error);
            },
            (response) => {
                this.store.successStatus = true;
            });

    }

    async forgotPassword(email: string) {
        this.store.error = "";
        this.store.loadingRequest = true;
        this.store.successStatus = false;
        const failureOrSuccess = await this.forgotPasswordUseCase.execute(email)
        this.store.loadingRequest = false;

        failureOrSuccess.fold(
            error => {
                this.store.error = this.handleErrors(error);
            },
            (response) => {
                this.store.successStatus = response;
            });

    }

    async resetPassword(payload: ResetPasswordRequest) {
        this.store.error = "";
        this.store.loadingRequest = true;
        this.store.successStatus = false;
        const failureOrSuccess = await this.resetPasswordUseCase.execute(payload);
        this.store.loadingRequest = false;
        failureOrSuccess.fold(
            error => {
                this.store.error = this.handleErrors(error);
            },
            (response) => {
                this.store.successStatus = response;
            });

    }
}