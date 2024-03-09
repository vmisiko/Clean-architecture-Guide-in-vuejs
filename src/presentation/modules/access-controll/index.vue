<template>
  <div class="flex h-full min-h-full flex-col p-4">
    <div class="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter
         scrollbar-w-2 scrolling-touch flex overflow-y-auto">
      <div class="flex h-full w-full flex-col space-y-1 px-1 py-1 lg:w-1/3 lg:px-3">
        <div class="flex items-end justify-end bg-none px-1">
          <button @click="showCreateRole = true" class="flex justify-cen
          ter space-x-2 rounded-md bg-white px-4 py-1 text-accentText shadow-lg shadow-accent/50 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" class="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span>Add Role</span>
          </button>
        </div>

        <div class="scrollbar-w-2 scrollbar-thumb-blue flex flex-col overflow-y-auto py-2">
          <SingleRole v-for="(role, index) in state.roles" :key="index" :role="role" />
        </div>
      </div>
      <div class="">
        <Permissions v-if="roleId" />
      </div>
      <CreateRole :show="showCreateRole" @close="showCreateRole = false" />
    </div>
  </div>
</template>

<script setup lang="ts">

import SingleRole from './Components/singleRole.vue';
import Permissions from './permissions.vue';
import CreateRole from './Components/forms/CreateRole.vue';
import { computed, onMounted, ref } from 'vue';
import useAccessControlState from '@/presentation/bloc/access-control/accessControlState';
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';
import { useRoute } from 'vue-router';

const showCreateRole = ref(false);
const state = useAccessControlState();
const ploc = dependencyLocator.provideAccessControlPloc(state);
onMounted(() => {
  ploc.fetchRoles();
});

const route = useRoute();
const roleId = computed(() => {
  return route.params.roleId as string;
});

</script>