<template>
  <div class="flex h-full min-h-full flex-col bg-white shadow-md rounded-md p-4 text-gray-500 h-screen ">
    <div class="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter
         scrollbar-w-2 scrolling-touch flex overflow-y-auto ">
      <div class="flex w-full flex-col space-y-1 px-2 py-1 lg:w-1/3 lg:px-3">
        <button @click="showStaff = true"
          class="flex justify-center space-x-2 rounded-md bg-accent px-4 py-1 text-accentText shadow-lg shadow-accent/50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            class="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span>Staff</span>
        </button>
        <div class="scrollbar-w-2 scrollbar-thumb-blue flex w-full flex-col  space-y-5 overflow-y-auto px-2 
          py-2">
          <SingleStaff v-for="(staff, index) in state.staffs" :staff='staff' :key="index" />
        </div>
      </div>
      <div class="scrollbar-w-2 scrollbar-thumb-blue flex w-full flex-col  space-y-5 overflow-y-auto px-2 
          py-2 lg:w-1/3">
        <StaffInfo v-if="staffId" />
      </div>
      <div class="scrollbar-w-2 scrollbar-thumb-blue flex w-full flex-col  space-y-5  overflow-y-auto px-3 
          py-2 lg:w-1/3">
        <StaffRights v-if="$route.name === 'AccessControlStaffRights'" />
      </div>
    </div>
    <RegisterStaff :show="showStaff" @close="showStaff = false"></RegisterStaff>
  </div>
</template>

<script setup lang="ts">
import useAccessControlState from '@/presentation/bloc/access-control/accessControlState';
import SingleStaff from '../Components/SingleStaff.vue';
import StaffInfo from '../Components/StaffInfo.vue';
import StaffRights from '../Components/StaffRights.vue';
import RegisterStaff from '../Components/forms/RegisterStaff.vue';
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const state = useAccessControlState();
const showStaff = ref(false);
const ploc = dependencyLocator.provideAccessControlPloc(state);

const route = useRoute();
const staffId = computed(() => {
  return route.params.staffId;
});

onMounted(() => {
  ploc.fetchStaffs();
});
</script>
