<template>
  <div @click="$router.push(`/access-control/staff/${staff.user_id}`)"
    class="mb-5 flex flex-col space-y-2 rounded border-l-[12px] px-2 py-5 shadow-md rounded cursor-pointer"
    :class="{ 'border-primary-red': `${staff.user_id}` === staffId }">
    <div class="flex items-center space-x-2 pb-2">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          class="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      </span>
      <h2 class="col-span-2 text-lg font-bold capitalize text-primaryText">
        {{ staff.firstname || '--' }} {{ staff.lastname || '--' }}
      </h2>
    </div>

    <div class="flex w-full items-center space-x-2">
      <div class="grid w-full
                     grid-cols-3 items-center space-x-2">
        <div class="flex  items-center space-x-1 font-medium text-secondaryText md:space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            class="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <span>Phone:</span>
        </div>
        <span class="col-span-2">{{ staff.phone }}</span>
      </div>
    </div>

    <div class="flex w-full items-center space-x-2">
      <div class="grid w-full
                     grid-cols-3 items-center space-x-2">
        <div class="flex  items-center space-x-1 font-medium text-secondaryText md:space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            class="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>

          <span>Email:</span>
        </div>
        <span class="col-span-2">{{ staff.email }}</span>
      </div>
    </div>
    <div class="flex w-full items-center space-x-2">
      <div class="grid w-full
                     grid-cols-3 items-center space-x-2">
        <div class="flex  items-center space-x-1 font-medium text-secondaryText md:space-x-2">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
          </span>
          <span>Dealer:</span>
        </div>
        <span class="col-span-2 capitalize">{{ staff.dealer.dealer_name ?? '--' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/domain/entities/auth';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  staff: {
    type: Object as () => User,
    required: true,
  }
});

const route = useRoute();
const staffId = computed(() => {
  return route.params.staffId;
});
</script>
