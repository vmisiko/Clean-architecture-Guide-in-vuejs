<template>
  <div class="flex flex-col space-y-8 py-6">

    <div class="flex flex-col space-y-3 rounded bg-secondaryBg shadow-md px-2 py-5 2xl:px-5">
      <div class="flex items-center space-x-2 pb-2">
        <h2 class="text-lg font-bold capitalize text-primaryText">
          Staff Info
        </h2>
      </div>
      <div class="flex w-full items-center space-x-2">
        <div class="grid w-full
                     grid-cols-3 items-center space-x-2">
          <div class="flex  items-center space-x-1 font-medium text-secondaryText md:space-x-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" class="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </span>
            <span>Name:</span>
          </div>
          <span class="col-span-2"> {{ state.staffDetails?.firstname || '--' }} {{ state.staffDetails?.lastname || '--' }}
          </span>
        </div>
      </div>
      <div class="flex w-full items-center space-x-2">
        <div class="grid w-full
                     grid-cols-3 items-center space-x-2">
          <div class="flex  items-center space-x-1 font-medium text-secondaryText md:space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" class="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span>Phone:</span>
          </div>
          <span class="col-span-2">{{ state.staffDetails?.phone ?? '--' }} </span>
        </div>
      </div>

      <div class="flex w-full items-center space-x-2">
        <div class="grid w-full
                     grid-cols-3 items-center space-x-2">
          <div class="flex  items-center space-x-1 font-medium text-secondaryText md:space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" class="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>

            <span>Email:</span>
          </div>
          <span class="col-span-2 overflow-ellipsis">
            {{ state.staffDetails?.email }}
          </span>
        </div>
      </div>
      <div class="flex w-full items-center space-x-2">
        <div class="grid w-full
                     grid-cols-3 items-center space-x-2">
          <div class="flex  items-center space-x-1 font-medium text-secondaryText md:space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" class="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>

            <span>Dealer:</span>
          </div>
          <span class="col-span-2 overflow-ellipsis">
            {{ state.staffDetails?.dealer.dealer_name }}

          </span>
        </div>
      </div>

      <div class="flex justify-end">
        <button @click="showStaff = true"
          class="bg-primary-red text-white px-4 py-1 rounded-md flex space-x-2 items-center">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125">
            </path>
          </svg>
          <span> Edit</span>
        </button>
      </div>

    </div>

    <button @click="$router.push(`/access-control/staff/${staffId}/rights`)"
      class="flex items-center shadow-md text-center p-2.5 rounded bg-gray-btn">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
      <span class="ml-4"> Manage Staff Roles</span>
    </button>

    <RegisterStaff :staff="state.staffDetails" :edit="true" :show="showStaff" @close="showStaff = false"></RegisterStaff>

  </div>
</template>

<script setup lang="ts">
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';
import useAccessControlState from '@/presentation/bloc/access-control/accessControlState';
import { computed, onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import RegisterStaff from './forms/RegisterStaff.vue';

const route = useRoute();
const staffId = computed(() => {
  return route.params.staffId as string;
});

const showStaff = ref(false);
const state = useAccessControlState();
const ploc = dependencyLocator.provideAccessControlPloc(state);

watch(() => staffId.value, (val) => {
  ploc.fetchStaffDetail(val);
});
onMounted(() => {
  ploc.fetchStaffDetail(staffId.value);
});
</script>