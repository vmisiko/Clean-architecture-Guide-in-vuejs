<template>
    <div class="relative">
        <button
            @click="show =true"
           >
            <svg  width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1781_12352)">
                        <mask id="mask0_1781_12352" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                        <path d="M24.8945 0.0396729H0.894531V24.0397H24.8945V0.0396729Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_1781_12352)">
                        <path d="M10.8945 18.0397H14.8945V16.0397H10.8945V18.0397ZM3.89453 6.03967V8.03967H21.8945V6.03967H3.89453ZM6.89453 13.0397H18.8945V11.0397H6.89453V13.0397Z" fill="#000000"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_1781_12352">
                        <rect width="24" height="24" fill="white" transform="translate(0.894531 0.0396729)"/>
                        </clipPath>
                        </defs>
                    </svg>
        </button>
        <button v-if="show" @click="show = false"
            class="fixed h-full right-0 left-0 bottom-0 top-0 bg-black opacity-0"></button>
        <div v-if="show"
            class="absolute w-[400px]  h-[445px] z-10  bg-white divide-y divide-gray-100 rounded-lg shadow">
            <div>    
                <div class="my-4 ml-2">
                    <span> Advanced Filter</span>
                </div>
                <hr class="border border-b-primary-red">
           </div>
           <div class="mx-4">

           </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TextInputVue from '../../TextInput.vue';


const show = ref(false);

</script>
