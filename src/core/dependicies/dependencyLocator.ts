import type { AuthenticationStore } from "@/presentation/bloc/auth/authState";
import CustomAxios from "../utility/customAxios";
import { AuthRepository } from "@/data/repository/AuthRepository";
import { LoginUseCase } from "@/domain/use-cases/auth/LoginUseCase";
import { RegisterUseCase } from "@/domain/use-cases/auth/RegisterUseCase";
import { AuthBloc } from "@/presentation/bloc/auth/authBloc";
import type { FfsStoreType } from "@/presentation/bloc/first-free-service/ffsState";
import { VehicleRepository } from "@/data/repository/VehicleRepository";
import { AddVehicleUseCase } from "@/domain/use-cases/vehicle/AddVehicleUseCase";
import { SearchFFSUseCase } from "@/domain/use-cases/vehicle/SearchFFSUseCase";
import { FfsPloc } from "@/presentation/bloc/first-free-service/ffsPloc";
import { UpdateVehicleUseCase } from "@/domain/use-cases/vehicle/UpdateVehicleUseCase";
import { CreateFFsRequestUseCase } from "@/domain/use-cases/first-free-service/CreateFfsRequestUseCase";
import { UpdateFfsRequestUseCase } from "@/domain/use-cases/first-free-service/UpdateFfsRequestUseCase";
import { FfsRepository } from "@/data/repository/FfsRepository";
import type { PricingStateStoreType } from "@/presentation/bloc/first-free-service/pricing/pricingState";
import { PricincPloc } from "@/presentation/bloc/first-free-service/pricing/pricingBloc";
import { GetFfsPricingUseCase } from "@/domain/use-cases/first-free-service/GetFfsPricingUseCase";
import { PricingRepository } from "@/data/repository/PricingRepository";
import { CreateFfsPricingUseCase } from "@/domain/use-cases/first-free-service/CreateFfsPricingRequestUseCase";
import { UpdateFfsPricingUseCase } from "@/domain/use-cases/first-free-service/UpdateFfsPricingUseCase";
import { DeleteFfsPricingUseCase } from "@/domain/use-cases/first-free-service/DeleteFfsPricingUseCase";
import { GetVehicleModelsUseCase } from "@/domain/use-cases/vehicle/GetVehicleModelsUseCase";
import { AddVehicleModelUseCase } from "@/domain/use-cases/vehicle/AddVehicleModelUseCase";
import { UploadFfsDocumentUseCase } from "@/domain/use-cases/first-free-service/UploadFfsDocumentUsecase";
import { GetFfsRequestUseCase } from "@/domain/use-cases/first-free-service/GetFfsRequestUseCase";
import { GetFfsRequestDetailUseCase } from "@/domain/use-cases/first-free-service/GetFfsRequestDetailUseCase";
import { ApproveDocumentUseCase } from "@/domain/use-cases/first-free-service/ApproveDocumentUseCase";
import { VehiclePloc } from "@/presentation/bloc/vehicles/VehiclePloc";
import { GetVehicleUseCase } from "@/domain/use-cases/vehicle/GetVehiclesUsaeCase";
import type { VehilceStoreType } from "@/presentation/bloc/vehicles/vehicleState";
import type { DealerStoreType } from "@/presentation/bloc/dealers/dealerState";
import { DealerPloc } from "@/presentation/bloc/dealers/dealerPloc";
import { GetDealersUseCase } from "@/domain/use-cases/dealers/GetDealersUseCase";
import { DealerRepository } from "@/data/repository/DealerRepository";
import type { SalesStoreType } from "@/presentation/bloc/sales/salesState";
import { SalesPloc } from "@/presentation/bloc/sales/SalesBloc";
import { SalesReposistory } from "@/data/repository/SalesRepository";
import { GetSalesUseCase } from "@/domain/use-cases/sales/GetSalesUseCase";
import { useRoute, useRouter } from "vue-router";
import useAUthState from "@/presentation/bloc/auth/authState";
import type { PmpiRequestStoreType } from "@/presentation/bloc/pmpi/requests/usePmpiRequestState";
import { PmpiRequestPloc } from "@/presentation/bloc/pmpi/requests/PmpiRequestPloc";
import { PmpiRepository } from "@/data/repository/PmpiRespository";
import { GetPmpiRequestsUseCase } from "@/domain/use-cases/pmpi/GetPmpiRequestsUseCase";
import { ReceivingMemoPloc } from "@/presentation/bloc/recieving-memo/receivingMemoPloc";
import type { ReceivingMemoStoreType } from "@/presentation/bloc/recieving-memo/useReceivingMemoState";
import { SearchVehicleUseCase } from "@/domain/use-cases/vehicle/SearchVehicleUseCase";
import { PostReceivingMemoUseCase } from "@/domain/use-cases/pmpi/PostReceivingMemoUSeCase";
import { GetTechniciansUseCase } from "@/domain/use-cases/pmpi/GetTechniciansUseCase";
import { AssigTechnicianUseCase } from "@/domain/use-cases/pmpi/AssigntechnicianUseCase";
import { GetPmpiRequestUseCase } from "@/domain/use-cases/pmpi/GetPmpiRequestUseCase";
import { UpdateReceivingMemoUseCase } from "@/domain/use-cases/pmpi/UpdateReceivingMemoUseCase";
import { GetInspectionCategoriesUseCase } from "@/domain/use-cases/pmpi/GetInspectionCategoriesUseCase";
import { GetInspectionCategoryUseCase } from "@/domain/use-cases/pmpi/GetInpectionCategoryUseCase";
import { GetLocationUSeCase } from "@/domain/use-cases/vehicle/GetLocationsUseCase";
import { GetIndustryUseCase } from "@/domain/use-cases/vehicle/GetIndustriesUseCase";
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
import { UpdateFfsPaymentUseCase } from "@/domain/use-cases/first-free-service/UpdateFfsPaymentUseCase";
import { OverrideFfsRequestStatusUseCase } from "@/domain/use-cases/first-free-service/OverrideFfsRequestStatusUseCase";
import { PostWCSubmissionUseCase } from "@/domain/use-cases/pmpi/PostTechnicianSubmissionUseCase";
import { FetchUserPermissionsUseCase } from "@/domain/use-cases/auth/FetchUserPermissionsUseCase";
import { EditUserUseCase } from "@/domain/use-cases/auth/EditUserUseCase";
import { ForgotPasswordUseCase } from "@/domain/use-cases/auth/ForgotPasswordUseCase";
import { ResetPasswordUseCase } from "@/domain/use-cases/auth/ResetPasswordUseCase";
import { PostServiceAdvisorFeedbackUseCase } from "@/domain/use-cases/pmpi/PostServiceAdversorFeedbackUseCase";
import { GetPmpiReportUseCase } from "@/domain/use-cases/pmpi/GetPmpiReportUseCase";
import { ClientReportConsentUseCase } from "@/domain/use-cases/pmpi/ClientReportConsentUseCase";
import { GetRecievingMemoListUseCase } from "@/domain/use-cases/receiving-memo/GetReceivingMemoListUseCase";
import { GetRecievingMemoUseCase } from "@/domain/use-cases/receiving-memo/GetReceivingMemoUseCase";
import { ReceivingMemo } from "@/domain/entities/recieving-memo";
import { ReceivingMemoRepository } from "@/data/repository/ReceivingMemoRepository";
import { GetVehicleWalkAroundItemUseCase } from "@/domain/use-cases/receiving-memo/GetVehicleWalkAroundItemUseCase";
import { InitiateReceivingMemoUseCase } from "@/domain/use-cases/receiving-memo/InitiateReceivingMemoUseCase";



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

const provideFFSPloc = (store: FfsStoreType) => {
    const router = useRouter();
    const axios = provAxiosInstance();
    const vehicleRepository = new VehicleRepository({ axios });
    const ffsRepository = new FfsRepository({ axios });
    const searchFFSUseCase = new SearchFFSUseCase({ vehicleRepository });
    const updateVehicleUseCase = new UpdateVehicleUseCase({ vehicleRepository });
    const createFfsRequestUseCase = new CreateFFsRequestUseCase({ ffsRepository });
    const updateFfsRequestUseCase = new UpdateFfsRequestUseCase({ ffsRepository });
    const uploadFfsDocumentUseCase = new UploadFfsDocumentUseCase({ ffsRepository });
    const getFfsRequestUseCase = new GetFfsRequestUseCase({ ffsRepository });
    const getFfsRequestDetailUseCase = new GetFfsRequestDetailUseCase({ ffsRepository });
    const approveDocumentUseCase = new ApproveDocumentUseCase({ ffsRepository });
    const updateFfsPaymentUseCase = new UpdateFfsPaymentUseCase({ ffsRepository });
    const overrideFfsRequestStatusUseCase = new OverrideFfsRequestStatusUseCase({ ffsRepository });
    return new FfsPloc({
        store: store,
        router,
        searchFFSUseCase,
        updateVehicleUseCase,
        createFfsRequestUseCase,
        updateFfsRequestUseCase,
        uploadFfsDocumentUseCase,
        getFfsRequestUseCase,
        getFfsRequestDetailUseCase,
        approveDocumentUseCase,
        updateFfsPaymentUseCase,
        overrideFfsRequestStatusUseCase,
    });
}

const providePricingPloc = (store: PricingStateStoreType) => {
    const router = useRouter();
    const axios = provAxiosInstance();

    const vehicleRepository = new VehicleRepository({ axios });
    const pricingRepository = new PricingRepository({ axios });
    const getFfsPricingUseCase = new GetFfsPricingUseCase({ pricingRepository });
    const createFfsPricingUseCase = new CreateFfsPricingUseCase({ pricingRepository });
    const updateFfsPricingUseCase = new UpdateFfsPricingUseCase({ pricingRepository });
    const deleteFfsPricingUseCase = new DeleteFfsPricingUseCase({ pricingRepository });
    const getVehicleModelsUseCase = new GetVehicleModelsUseCase({ vehicleRepository })
    const addVehicleModelUseCase = new AddVehicleModelUseCase({ vehicleRepository });

    return new PricincPloc({
        store: store,
        router,
        getFfsPricingUseCase,
        createFfsPricingUseCase,
        updateFfsPricingUseCase,
        deleteFfsPricingUseCase,
        getVehicleModelsUseCase,
        addVehicleModelUseCase,
    });
}


const provideVehiclePloc = (store: VehilceStoreType) => {
    const router = useRouter();
    const axios = provAxiosInstance();

    const vehicleRepository = new VehicleRepository({ axios });
    const getVehiclesUseCase = new GetVehicleUseCase({ vehicleRepository });
    const addVehicleUseCase = new AddVehicleUseCase({ vehicleRepository });
    const getLocationsUseCase = new GetLocationUSeCase({ vehicleRepository });
    const getIndustryUseCase = new GetIndustryUseCase({ vehicleRepository });


    return new VehiclePloc({
        store,
        router,
        getVehiclesUseCase: getVehiclesUseCase,
        addVehicleUseCase,
        getLocationsUseCase,
        getIndustryUseCase,
    });
}


const provideDealerPloc = (store: DealerStoreType) => {
    const router = useRouter();
    const axios = provAxiosInstance();

    const dealerRepository = new DealerRepository({ axios });
    const getDealersUseCase = new GetDealersUseCase({ dealerRepository });
    return new DealerPloc({
        store,
        router,
        getDealersUseCase,
    });
}

const provideSalesPloc = (store: SalesStoreType) => {
    const router = useRouter();
    const axios = provAxiosInstance();

    const salesRepository = new SalesReposistory({ axios });
    const getSalesUseCase = new GetSalesUseCase({ salesRepository });
    return new SalesPloc({
        store,
        router,
        getSalesUseCase
    });
}

const providePmpiRequestsPloc = (store: PmpiRequestStoreType) => {
    const router = useRouter();
    const axios = provAxiosInstance();

    const pmpiRepository = new PmpiRepository({ axios });
    const getPmpirequestsUseCase = new GetPmpiRequestsUseCase({ pmpiRepository });
    const getPmpiRequestUseCase = new GetPmpiRequestUseCase({ pmpiRepository });
    const getInpectionCategoriesUseCase = new GetInspectionCategoriesUseCase({ pmpiRepository });
    const getInpectionCategoryUseCase = new GetInspectionCategoryUseCase({ pmpiRepository });
    const postWCSubmissionUseCase = new PostWCSubmissionUseCase({ pmpiRepository });
    const postServiceAdvisorFeedbackUseCase = new PostServiceAdvisorFeedbackUseCase({ pmpiRepository });
    const getPmpiReportUseCase = new GetPmpiReportUseCase({ pmpiRepository });
    const clientReportConsentUseCase = new ClientReportConsentUseCase({pmpiRepository});

    return new PmpiRequestPloc({
        store,
        router,
        getPmpirequestsUseCase,
        getPmpiRequestUseCase,
        getInpectionCategoriesUseCase,
        getInpectionCategoryUseCase,
        postWCSubmissionUseCase,
        postServiceAdvisorFeedbackUseCase,
        getPmpiReportUseCase,
        clientReportConsentUseCase,
    });
}

// const provideReceivingMemoPloc = (store: ReceivingMemoStoreType) => {
//     const router = useRouter();
//     const axios = provAxiosInstance();

//     const pmpiRepository = new PmpiRepository({ axios });
//     const vehicleRepository = new VehicleRepository({ axios });
//     const searchVehicleUseCase = new SearchVehicleUseCase({ vehicleRepository });
//     const postReceivingMemoUseCase = new PostReceivingMemoUseCase({ pmpiRepository })
//     const getTechniciansUseCase = new GetTechniciansUseCase({ pmpiRepository });
//     const assigTechnicianUseCase = new AssigTechnicianUseCase({ pmpiRepository })
//     const getPmpiRequestUseCase = new GetPmpiRequestUseCase({ pmpiRepository });
//     const updateReceivingMemoUseCase = new UpdateReceivingMemoUseCase({ pmpiRepository });

//     return new ReceivingMemoPloc({
//         store,
//         router,
//         searchVehicleUseCase,
//         postReceivingMemoUseCase,
//         getTechniciansUseCase,
//         assigTechnicianUseCase,
//         getPmpiRequestUseCase,
//         updateReceivingMemoUseCase
//     });
// }

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
 
const provideReceivingMemoPloc = (store: ReceivingMemoStoreType) => {
    const pmpiRepository = new PmpiRepository({ axios: provAxiosInstance() });
    const receivingMemoRepository = new ReceivingMemoRepository({ axios: provAxiosInstance() });
    const getReceivingMemoListUseCase = new GetRecievingMemoListUseCase({ receivingMemoRepository });
    const getReceivingMemoUseCase = new GetRecievingMemoUseCase({ receivingMemoRepository });
    const getVehicleWalkAroundItemUseCase = new GetVehicleWalkAroundItemUseCase({ receivingMemoRepository });
    const getTechniciansUseCase = new GetTechniciansUseCase({ pmpiRepository });
    const assigTechnicianUseCase = new AssigTechnicianUseCase({pmpiRepository})
    const initiateReceivingMemoUseCase = new InitiateReceivingMemoUseCase({receivingMemoRepository})
    return new ReceivingMemoPloc({
        store,
        router: useRouter(),
        getReceivingMemoListUseCase,
        getReceivingMemoUseCase,
        getVehicleWalkAroundItemUseCase,
        getTechniciansUseCase,
        assigTechnicianUseCase,
        initiateReceivingMemoUseCase,
    })

}

export const dependencyLocator = {
    provideAuthPloc,
    provideFFSPloc,
    providePricingPloc,
    provideVehiclePloc,
    provideDealerPloc,
    provideSalesPloc,
    providePmpiRequestsPloc,
    provideReceivingMemoPloc,
    provideAccessControlPloc,
}
