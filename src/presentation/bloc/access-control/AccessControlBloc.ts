import { ploc } from "@/core/ploc";
import type { AccessControlStoreType } from "./accessControlState";
import type { Router } from "vue-router";
import type { FetchRolePermissionsUseCase } from "@/domain/use-cases/acess-control/FetchRolePermissionsUseCase";
import type { FetchRolesUseCase } from "@/domain/use-cases/acess-control/FetchRolesUseCase";
import type { FetchPermissionGroupsUseCase } from "@/domain/use-cases/acess-control/FetchPermissionGroupsUseCase";
import type { CreateRolesUseCase } from "@/domain/use-cases/acess-control/CreateRoleUseCase";
import type { AssignRolePermissionUseCase } from "@/domain/use-cases/acess-control/AssignRolePermissionUseCase";
import type { AssignUserRoleUseCase } from "@/domain/use-cases/acess-control/AssignUserRoleUseCase";
import type { FetchStaffDetailssUseCase } from "@/domain/use-cases/acess-control/FetchStaffDetailsUSeCase";
import type { FetchStaffsUseCase } from "@/domain/use-cases/acess-control/FetchStaffsUseCase";
import type { AssignRolePermissionRequest, AssignUserRoleRequest, roleRequest } from "@/domain/entities/access-control";

export class AccessControlBloc extends ploc<AccessControlStoreType> {
    private fetchRolePermissionsUseCase: FetchRolePermissionsUseCase;
    private fetchRolesUseCase: FetchRolesUseCase;
    private fetchPermissionGroupsUseCase: FetchPermissionGroupsUseCase;
    private createRolesUseCase: CreateRolesUseCase;
    private assignRolePermissionUseCase: AssignRolePermissionUseCase;
    private assignUserRoleUseCase: AssignUserRoleUseCase;
    private fetchStaffDetailssUseCase: FetchStaffDetailssUseCase;
    private fetchStaffsUseCase: FetchStaffsUseCase;

    constructor({
        store,
        router,
        fetchRolePermissionsUseCase,
        fetchRolesUseCase,
        fetchPermissionGroupsUseCase,
        createRolesUseCase,
        assignRolePermissionUseCase,
        assignUserRoleUseCase,
        fetchStaffDetailssUseCase,
        fetchStaffsUseCase,
    }: {
        store: AccessControlStoreType,
        router: Router,
        fetchRolePermissionsUseCase: FetchRolePermissionsUseCase;
        fetchRolesUseCase: FetchRolesUseCase;
        fetchPermissionGroupsUseCase: FetchPermissionGroupsUseCase;
        createRolesUseCase: CreateRolesUseCase;
        assignRolePermissionUseCase: AssignRolePermissionUseCase;
        assignUserRoleUseCase: AssignUserRoleUseCase;
        fetchStaffDetailssUseCase: FetchStaffDetailssUseCase;
        fetchStaffsUseCase: FetchStaffsUseCase;
    }) {
        super({ store, router });

        this.fetchRolePermissionsUseCase = fetchRolePermissionsUseCase;
        this.fetchRolesUseCase = fetchRolesUseCase;
        this.fetchPermissionGroupsUseCase = fetchPermissionGroupsUseCase;
        this.createRolesUseCase = createRolesUseCase;
        this.assignRolePermissionUseCase = assignRolePermissionUseCase;
        this.assignUserRoleUseCase = assignUserRoleUseCase;
        this.fetchStaffDetailssUseCase = fetchStaffDetailssUseCase;
        this.fetchStaffsUseCase = fetchStaffsUseCase;
    }


    async createRole(payload: roleRequest) {
        this.store.loadingCreateRole = true;
        const successOrfailures = await this.createRolesUseCase.execute(payload);
        this.store.loadingCreateRole = false;

        successOrfailures.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            },
            (success) => {
                this.store.successStatus = true;
            });
    }

    async fetchRoles() {
        this.store.loadingRequest = true;
        const successOrfailures = await this.fetchRolesUseCase.execute();
        this.store.loadingRequest = false;

        successOrfailures.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            },
            (success) => {
                this.store.roles = success;
            });
    }

    async fetchpermissionGroups() {
        this.store.loadingPermissionGroupRequest = true;
        const successOrfailures = await this.fetchPermissionGroupsUseCase.execute();
        this.store.loadingPermissionGroupRequest = false;

        successOrfailures.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            },
            (success) => {
                this.store.permissionGroups = success;
            });
    }


    async fetchRolePermissions(roleId: string) {
        this.store.loadRolePermissions = true;
        const successOrfailures = await this.fetchRolePermissionsUseCase.execute(roleId);
        this.store.loadRolePermissions = false;

        successOrfailures.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            },
            (permissions) => {
                this.store.userRolePermissions = permissions;
            });
    }

    async AssignRolePermission(payload: AssignRolePermissionRequest) {
        this.store.loadingAssignPermissionRequest = true;
        const successOrfailures = await this.assignRolePermissionUseCase.execute(payload);
        this.store.loadingAssignPermissionRequest = false;

        successOrfailures.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            },
            (response) => {
                this.store.successStatus = true;
            });
    }

    async AssignUserRole(payload: AssignUserRoleRequest) {
        this.store.loadingAssignUserRoleRequest = true;
        const successOrfailures = await this.assignUserRoleUseCase.execute(payload);
        this.store.loadingAssignUserRoleRequest = false;

        successOrfailures.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            },
            (response) => {
                this.store.successStatus = true;
            });
    }

    async fetchStaffs() {
        this.store.loadingRequest = true;
        const successOrfailures = await this.fetchStaffsUseCase.execute();
        this.store.loadingRequest = false;

        successOrfailures.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            },
            (response) => {
                this.store.staffs = response;
            });
    }

    async fetchStaffDetail(userId: string) {
        this.store.loadingRequest = true;
        const successOrfailures = await this.fetchStaffDetailssUseCase.execute(userId);
        this.store.loadingRequest = false;

        successOrfailures.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            },
            (response) => {
                this.store.staffDetails = response;
            });
    }
}
