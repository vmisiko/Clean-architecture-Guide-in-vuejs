<template>
    <div class="h-screen bg-sidebar-bg fixed top-0 left-0 z-7 w-64 transition-transform -translate-x-full translate-x-0">
        <div class="mt-24">
        </div>
        <div v-for="(item, index) in links">
            <NavigationLink v-if="auth.can(item.permission)" @select="handleSelect(index)" @close="handleClose(index)"
                :item="item" :key="index" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue';
import NavigationLink from './NavigationLink.vue';
import { useRoute, useRouter } from 'vue-router';
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';

const links = reactive([
{
        title: "Receiving Memo",
        icon: 'receiving-memo',
        link: "/receiving-memo",
        permission: "view_access_control",
        isOpen: false,
        subMenus: [
            { title: 'Requests', link: '/receiving-memo', parent: 'access-control', permission: 'view_access-control', activeRouteNames: ['ReceivingMemoReport', "ReceivingMemo",] },
        ]
    },
    {
        title: "PDI",
        icon: 'pdi',
        link: "/",
        permission: "view_pdi",
        isOpen: false,
        subMenus: []
    },
    {
        title: "First Free Service",
        icon: 'ffs',
        link: "/ffs",
        permission: "view_ffs",
        isOpen: false,
        subMenus: [
            { title: 'New', link: '/ffs/new', parent: 'ffs', permission: 'view_ffs_new', activeRouteNames: ["FirstFreeService", "FirstFreeServiceReceipt", "FirstFreeServiceEdit", "FirstFreeServiceDocuments",] },
            { title: 'Requests', link: '/ffs/request', parent: 'ffs', permission: 'view_ffs_requests', activeRouteNames: ["FirstFreeServiceRequests", "FirstFreeServiceRequestDetail", "FirstFreeServiceDocumentApproval"] },
            { title: 'Pricing', link: '/ffs/pricing', parent: 'ffs', permission: 'view_ffs_pricing', activeRouteNames: ["FirstFreeServicePricing",] },
        ]
    },
    {
        title: "PMPI",
        icon: 'pmpi',
        link: "/pmpi",
        isOpen: false,
        permission: "view_pmpi",
        subMenus: [
            // { title: 'Recieving Memo', link: '/pmpi/receiving-memo', parent: 'pmpi', permission: 'view_pmpi', activeRouteNames: ["PmpiRecievingMemo",] },
            { title: 'Request', link: '/pmpi/requests', parent: 'pmpi', permission: 'view_pmpi_requests', activeRouteNames: ["PmpiRequests", "PmpiInspectionDetails", "PmpiReport", "PmpiReportDetailSummary"] },
        ],
    },
    {
        title: "Vehicles",
        icon: 'vehicles',
        link: "/vehicles",
        isOpen: false,
        permission: "view_vehicles",
        subMenus: [],
    },
    {
        title: "Sales",
        icon: 'sales',
        link: "/sales",
        isOpen: false,
        permission: "view_sales",
        subMenus: [],
    },
    {
        title: "Dealers",
        icon: 'dealers',
        link: "/dealers",
        permission: "view_dealers",
        subMenus: [],
    },
    {
        title: "Customers",
        icon: 'customers',
        link: "/customers",
        permission: "view_customers",
        isOpen: false,
        subMenus: [],
    },
    {
        title: "Access Control",
        icon: 'access-control',
        link: "/access-controll",
        permission: "view_access_control",
        isOpen: false,
        subMenus: [
            { title: 'Staff', link: '/access-control/staff', parent: 'access-control', permission: 'view_access-control-staff', activeRouteNames: ["AccessControlStaff", "AccessControlStaffDetails", "AccessControlStaffRights"] },
            { title: 'Roles & Permissions', link: '/access-control', parent: 'access-control', permission: 'view_access-control', activeRouteNames: ['AccessControl', "AccessControlPermissions",] },
        ]
    },
]);

const route = useRoute();
const router = useRouter();

watch(() => route.path, (val) => {
    autoDetectRoute();
});

watch(() => route.name, (val) => {
    autoDetectRoute();
});

const auth = dependencyLocator.provideAuthPloc();

onMounted(() => {
    autoDetectRoute();
});

const autoDetectRoute = () => {
    links.forEach(link => {
        if (link.link === route.path || link?.subMenus?.filter((sub) => sub.link === route.path).length || (link?.subMenus.length && link?.subMenus?.filter((sub) => sub?.activeRouteNames?.includes(route.name as string)).length)) {
            link.isOpen = true;
        }
    });
}
const handleSelect = (index: number) => {
    links.forEach((link: any, i: number) => {
        link.isOpen = i === index;
    });
    if (!links[index].subMenus.length) {
        router.push(`${links[index].link}`);
    }
}

const handleClose = (index: number) => {
    links[index].isOpen = false;
};
</script>

