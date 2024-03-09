import type { AuthenticationStore } from "@/presentation/bloc/auth/authState";
import CustomAxios from "../utility/customAxios";
import { AuthRepository } from "@/data/repository/AuthRepository";
import { LoginUseCase } from "@/domain/use-cases/auth/LoginUseCase";
import { RegisterUseCase } from "@/domain/use-cases/auth/RegisterUseCase";
import { AuthBloc } from "@/presentation/bloc/auth/authBloc";
import { useRoute, useRouter } from "vue-router";
import useAUthState from "@/presentation/bloc/auth/authState";
import { AccessControlBloc } from "@/presentation/bloc/access-control/AccessControlBloc";
import type { AccessControlStoreType } from "@/presentation/bloc/access-control/accessControlState";
import { AccessControlRepository } from "@/data/repository/AccessControlRepository";
import { FetchPermissionGroupsUseCase } from "@/domain/use-cases/acess-control/FetchPermissionGroupsUseCase";
import { FetchRolePermissionsUseCase } from "@/domain/use-cases/acess-control/FetchRolePermissionsUseCase";
import { FetchRolesUseCase } from "@/domain/use-cases/acess-control/FetchRolesUseCase";
import { AssignRolePermissionUseCase } from "@/domain/use-cases/acess-control/AssignRolePermissionUseCase";
import { AssignUserRoleUseCase } from "@/domain/use-cases/acess-control/AssignUserRoleUseCase";
import { CreateRolesUseCase } from "@/domain/use-cases/acess-control/CreateRoleUseCase";
import { FetchStaffsUseCase } from "@/domain/use-cases/acess-control/FetchStaffsUseCase";
import { FetchStaffDetailssUseCase } from "@/domain/use-cases/acess-control/FetchStaffDetailsUSeCase";
import { FetchUserPermissionsUseCase } from "@/domain/use-cases/auth/FetchUserPermissionsUseCase";
import { EditUserUseCase } from "@/domain/use-cases/auth/EditUserUseCase";
import { ForgotPasswordUseCase } from "@/domain/use-cases/auth/ForgotPasswordUseCase";
import { ResetPasswordUseCase } from "@/domain/use-cases/auth/ResetPasswordUseCase";

const provAxiosInstance = () => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('userData');
    const user = userData ? JSON.parse(userData) : "";

    const axios = new CustomAxios({ token: token, ...(user && { userId: user['user-id'] }) });
    return axios;
}

const provideAuthPloc = (store?: AuthenticationStore) => {
    const router = useRouter();
    if (!store) {
        store = useAUthState();
    }
    const axios = provAxiosInstance();
    const authRepository = new AuthRepository({ axios });
    const loginuseCase = new LoginUseCase({ authRepository });
    const registerUseCase = new RegisterUseCase({ authRepository });
    const fetchUserPermissionsUseCase = new FetchUserPermissionsUseCase({ authRepository });
    const editUserUseCase = new EditUserUseCase({ authRepository });
    const forgotPasswordUseCase = new ForgotPasswordUseCase({ authRepository });
    const resetPasswordUseCase = new ResetPasswordUseCase({ authRepository });
    return new AuthBloc({
        store: store,
        router,
        loginuseCase,
        registerUseCase,
        fetchUserPermissionsUseCase,
        editUserUseCase,
        forgotPasswordUseCase,
        resetPasswordUseCase,
    });
}


const provideAccessControlPloc = (store: AccessControlStoreType) => {
    const router = useRouter();
    const axios = provAxiosInstance();

    const accessControlRepository = new AccessControlRepository({ axios });
    const fetchPermissionGroupsUseCase = new FetchPermissionGroupsUseCase({ accessControlRepository })
    const fetchRolePermissionsUseCase = new FetchRolePermissionsUseCase({ accessControlRepository })
    const fetchRolesUseCase = new FetchRolesUseCase({ accessControlRepository })
    const assignRolePermissionUseCase = new AssignRolePermissionUseCase({ accessControlRepository })
    const assignUserRoleUseCase = new AssignUserRoleUseCase({ accessControlRepository })
    const createRolesUseCase = new CreateRolesUseCase({ accessControlRepository })
    const fetchStaffDetailssUseCase = new FetchStaffDetailssUseCase({ accessControlRepository })
    const fetchStaffsUseCase = new FetchStaffsUseCase({ accessControlRepository })
    return new AccessControlBloc({
        store,
        router,
        fetchPermissionGroupsUseCase,
        fetchRolePermissionsUseCase,
        fetchRolesUseCase,
        assignRolePermissionUseCase,
        assignUserRoleUseCase,
        createRolesUseCase,
        fetchStaffDetailssUseCase,
        fetchStaffsUseCase,
    });
}

export const dependencyLocator = {
    provideAuthPloc,
    provideAccessControlPloc,
}
