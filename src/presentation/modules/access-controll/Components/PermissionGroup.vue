<template>
  <div class="shadow-md border rounded bg-white">
    <h2 id="accordion-color-heading-1" class="border-b border-primaryBg">
      <button type="button" @click="hide = !hide"
        class="flex w-full items-center justify-between rounded-t-xl  bg-secondaryBg p-5 text-left font-medium text-gray-500 dark:text-gray-400 "
        data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
        <span>{{ permissionGroup.name }} </span>
        <svg data-accordion-icon class="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"></path>
        </svg>
      </button>
    </h2>
    <div v-if="hide" id="accordion-color-body-1" class="bg-secondaryBg" aria-labelledby="accordion-color-heading-1">
      <div class="space-y-5   p-2 font-light">
        <SinglePermission v-for="(permission, index) in permissionGroup.permissions" :key="index"
          :permission="permission" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SinglePermission from './SinglePermission.vue';
import type { PermissionGroup } from '@/domain/entities/access-control';
const hide = ref(true);

const props = defineProps({
  permissionGroup: {
    type: Object as () => PermissionGroup,
    required: true,
  }
})
</script>