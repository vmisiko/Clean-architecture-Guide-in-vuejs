<template>
  <div class="rounded bg-secondaryBg px-4 py-2">
    <SwitchGroup>
      <div class="flex items-center">
        <Switch @click="handleUserClick" v-model="enabled" :class='enabled ? "bg-primary-red" : "bg-gray-200"' class="relative inline-flex h-5 w-11 shrink-0 cursor-pointer rounded-full border-2
          border-transparent transition-colors duration-200 ease-in-out focus:outline-none
           focus-visible:ring-2 focus-visible:ring-primaryText focus-visible:ring-opacity-75">
          <span :class='enabled ? "translate-x-6" : "translate-x-1"'
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
        </Switch>
        <SwitchLabel class="ml-4 capitalize">{{ permission.display_name }}</SwitchLabel>

      </div>
    </SwitchGroup>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import type { Permission } from '@/domain/entities/access-control';
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';
import useAccessControlState from '@/presentation/bloc/access-control/accessControlState';
import { useRoute } from 'vue-router';

const props = defineProps({
  permission: {
    type: Object as () => Permission,
    required: true,
  }
});
const enabled = ref(false);

const state = useAccessControlState();
const ploc = dependencyLocator.provideAccessControlPloc(state);




const route = useRoute();
const roleId = computed(() => {
  return route.params.roleId as string;
});

watch(() => state.userRolePermissions, (val) => {
  autoFillPermission();
})



const handleUserClick = () => {
  if (roleId.value) {
    ploc.AssignRolePermission({ roleId: parseInt(roleId.value), permission: props.permission });
  }
}

onMounted(() => {
  autoFillPermission();
});
const autoFillPermission = () => {
  const found = state.userRolePermissions?.length && state.userRolePermissions.find((perm) => perm.id === props.permission.id);
  enabled.value = found ? true : false;
}
</script>