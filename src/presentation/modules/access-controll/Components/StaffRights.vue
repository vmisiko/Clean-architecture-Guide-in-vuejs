<template>
  <div class="flex w-full  flex-col space-y-3">
    <div class="flex items-center justify-between">
      <span class="hidden lg:flex"></span>
      <h4 class="text-lg font-semibold">Staff Rights</h4>
      <span></span>
    </div>
    <div class="flex flex-col space-y-4">
      <StaffRole v-for="(role, index) in state.roles" :role="role" :key="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';
import useAccessControlState from '@/presentation/bloc/access-control/accessControlState';
import StaffRole from './StaffRole.vue';
import { onMounted } from 'vue';

const state = useAccessControlState();
const ploc = dependencyLocator.provideAccessControlPloc(state);

onMounted(() => {
  ploc.fetchRoles();
})
</script>