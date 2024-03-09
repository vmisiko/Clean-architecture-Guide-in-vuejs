<template>
  <div @click="$router.push(`/access-control/${role.id}`)" class="border-l-[12px] px-2 
          py-5  mb-4 overflow-hidden cursor-pointer hover:bg-red-50  shadow-md bg-white"
    :class="{ 'border-primary-red bg-accent/5': `${role.id}` == roleId }">
    <div class="flex space-x-2 rounded">
      <span class="py-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          class="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </span>
      <div class="flex w-full grow h-full flex-col">
        <h4 class="text-lg font-semibold capitalize">
          {{ role?.display_name }}
        </h4>
        <div class="">
          <p class="font-small text-sm text-secondaryText ">
            {{ role?.description }}
          </p>
        </div>
      </div>
      <div class="flex-none ">
        <button> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';
import type { Role } from '@/domain/entities/access-control';
import useAccessControlState from '@/presentation/bloc/access-control/accessControlState';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  role: {
    type: Object as () => Role,
    required: true,
  },
})

const route = useRoute();
const roleId = computed(() => {
  return (route.params.roleId as String);
})
const state = useAccessControlState();
const ploc = dependencyLocator.provideAccessControlPloc(state);


</script>