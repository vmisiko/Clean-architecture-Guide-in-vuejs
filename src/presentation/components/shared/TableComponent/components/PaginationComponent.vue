<template>
    <div class="flex justify-between mt-5">
    <div>
        <span> Rows per page: {{ pagination?.max }}</span>
    </div>
    <button v-if="pagination?.hasNext && !loading" class="bg-gray-btn rounded-md py-2 px-4 hover:bg-gray-500 hover:text-white" @click="$emit('loadMore')">
       Load More
    </button>
    <div v-if="loading" class="flex justify-center items-center">
            <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="">Loading More...</span>
        </div>
    <div class="flex items-center">
        <span> 1 - {{ (pagination?.currentRows )}} of {{ pagination?.total }} Items</span>
        <button class="hover:bg-gray-btn rounded-full" v-if="false" >
            <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_585_12901" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="31">
                <path d="M0.878057 30.9375L32.4902 30.9375L32.4902 0.9375L0.87806 0.937497L0.878057 30.9375Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_585_12901)">
                <mask id="mask1_585_12901" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="31">
                <path d="M0.878057 30.9375L32.4902 30.9375L32.4902 0.9375L0.87806 0.937497L0.878057 30.9375Z" fill="white"/>
                </mask>
                <g mask="url(#mask1_585_12901)">
                <path d="M19.3186 23.4375L21.1758 21.675L15.1432 15.9375L21.1758 10.2L19.3186 8.4375L11.4155 15.9375L19.3186 23.4375Z" fill="#9F9F9F"/>
                </g>
                </g>
            </svg>
        </button>
        <button class="hover:bg-gray-btn rounded-full" v-if="false">
            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_585_12895" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="31">
                <path d="M31.9999 0.9375L0.387695 0.9375L0.387695 30.9375L31.9999 30.9375L31.9999 0.9375Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_585_12895)">
                <path d="M13.5594 8.4375L11.7021 10.2L17.7348 15.9375L11.7021 21.675L13.5594 23.4375L21.4624 15.9375L13.5594 8.4375Z" fill="#9F9F9F"/>
                </g>
            </svg>
        </button>
    </div>
</div>
</template>

<script setup lang="ts">
import type { Pagination } from '@/domain/entities/pricing';


const props = defineProps({
    pagination:{
        type: [Object as () => Pagination | null],
        required: false,
    },
    loading:  {
        type: Boolean,
        required: false,
    }
});
const emit = defineEmits(['loadMore']);
</script>