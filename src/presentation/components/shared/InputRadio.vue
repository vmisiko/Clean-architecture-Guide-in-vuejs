<template>
  <div class="flex items-center">
    <Switch v-model="enabled" :class='enabled ? "bg-primary-red" : "bg-gray-200"' class="relative inline-flex h-5 w-11 shrink-0 cursor-pointer rounded-full border-2
          border-transparent transition-colors duration-200 ease-in-out focus:outline-none
           focus-visible:ring-2 focus-visible:ring-primaryText focus-visible:ring-opacity-75">
      <span :class='enabled ? "translate-x-6" : "translate-x-1"'
        class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
    </Switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch, SwitchLabel } from '@headlessui/vue'

const props = defineProps(['label',])
const enabled = ref(false)
</script>