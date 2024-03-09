<template>
    <div class="fixed top-0 left-1/2 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        v-if="show">
        <div class="relative w-full max-w-2xl max-h-full top-[60px] left-1/3 z-60   bg-white rounded-lg shadow-md ">

            <div class="flex justify-between mb-3 px-5 pt-5">
                <span>{{ title }}</span>

                <button @click="$emit('close')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_585_16718)">
                            <mask id="mask0_585_16718" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="24" height="24">
                                <path d="M24 0H0V24H24V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_585_16718)">
                                <path
                                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                                    fill="#8B8B8B" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_585_16718">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            <hr class="">

            <div v-if="error" class="p-4  mx-5 my-4 text-sm text-red-800 rounded-lg bg-red-50">
                {{ error }}
            </div>
            <hr>
            <div class="">
                <slot></slot>

            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
} from '@headlessui/vue'

const props = defineProps({
    show: {
        type: Boolean,
        required: false,
    },
    title: {
        type: String,
        required: false,
    },
    error: {
        type: String,
        required: false,
    }
});
const emits = defineEmits(['close']);
</script>
  