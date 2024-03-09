<template>
    <div className="scrollbar-w-2 scrollbar-thumb-blue flex w-full flex-col  space-y-5 overflow-y-auto px-2 
          py-2">
        <PermissionGroup v-for="(permissionGroup, index) in state.permissionGroups" :permissionGroup="permissionGroup"
            :key="index" />
    </div>
</template>

<script lang="ts" setup>
import useAccessControlState from '@/presentation/bloc/access-control/accessControlState';
import PermissionGroup from './Components/PermissionGroup.vue';
import { computed, onMounted, watch } from 'vue';
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';
import { useRoute } from 'vue-router';
const state = useAccessControlState();
const ploc = dependencyLocator.provideAccessControlPloc(state);
const route = useRoute();

const roleId = computed(() => {
    return route.params.roleId as string;
})
watch(() => roleId.value, (val) => {
    ploc.fetchRolePermissions(val);
})

onMounted(() => {
    ploc.fetchRolePermissions(roleId.value);
    ploc.fetchpermissionGroups();
});
</script>