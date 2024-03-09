<template>
    <div class="flex justify-between mt-4 bg-gray-300 h-1 relative">
        <div class="z-10" v-for="(step, index) in steps" :key="index">
          <div v-if="step.iscomplete" class="border border-2 border-primary-red h-6 w-6 rounded-full bg-white -mt-3 flex items-center justify-center">
            <svg class="w-3 h-3" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.44253 10.1278L1.6488 6.33407L0.356934 7.61684L5.44253 12.7024L16.3598 1.78521L15.077 0.502441L5.44253 10.1278Z" fill="#EB2029"/>
            </svg>
          </div>
          <div v-else class="border border-2 h-6 w-6 rounded-full bg-white -mt-3 flex items-center justify-center">
            <div class="w-3 h-3 rounded-full bg-ellipse-gray border"></div>
          </div>
        </div>
  
        <div :style="{ width: `${progressWidth}%` }" class="absolute top-0 left-0 bg-primary-red h-full border-t border-primary-red"></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue';

  const props = defineProps(['section']);
  
  const steps = ref([
    {
      section: 'fill',
      iscomplete: false,
    },
    {
      section: 'certification',
      iscomplete: false,
    },
    {
      section: 'document',
      iscomplete: false,
    },
  ]);
  
  const progressWidth = computed(() => {
    let width = 0;
    switch (props.section) {
      case 'fill':
        steps.value = [
          {
            section: 'fill',
            iscomplete: true,
          },
          {
            section: 'certification',
            iscomplete: false,
          },
          {
            section: 'document',
            iscomplete: false,
          },
        ];
        width = 1;
        break;
      case 'certification':
        steps.value = [
          {
            section: 'fill',
            iscomplete: true,
          },
          {
            section: 'certification',
            iscomplete: true,
          },
          {
            section: 'document',
            iscomplete: false,
          },
        ]
        width = 50;
        break;
      case 'documents':
        steps.value = [
          {
            section: 'fill',
            iscomplete: true,
          },
          {
            section: 'certification',
            iscomplete: true,
          },
          {
            section: 'document',
            iscomplete: true,
          },
        ]
        width = 100;
        break;
      default: 
        width = 0;
        break;
    }
    return width;
  });
  </script>
  