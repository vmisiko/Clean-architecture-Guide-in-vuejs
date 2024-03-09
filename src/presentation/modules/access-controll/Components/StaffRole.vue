<template>
    <div>
        <div class="flex  space-x-2 rounded bg-secondaryBg px-4 py-5 shadow-md">
            <span class="py-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" class="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </span>
            <div class="flex w-full justify-between">
                <div class="flex flex-col">
                    <h4 class="text-lg font-semibold">Make {{ role.name }}</h4>
                    <div>{{ role.description }} </div>
                </div>
                <Switch @click="ploc.AssignUserRole({
                    userId: parseInt(staffId),
                    role,
                })" v-model="enabled" :class='enabled ? "bg-primary-red" : "bg-gray-200"' class="relative inline-flex h-5 w-11 shrink-0 cursor-pointer rounded-full border-2
          border-transparent transition-colors duration-200 ease-in-out focus:outline-none
           focus-visible:ring-2 focus-visible:ring-primaryText focus-visible:ring-opacity-75">
                    <span :class='enabled ? "translate-x-6" : "translate-x-1"'
                        class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
                </Switch>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Role } from '@/domain/entities/access-control';
import { computed, onMounted, ref, watch } from 'vue';
import { Switch } from '@headlessui/vue'
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';
import useAccessControlState from '@/presentation/bloc/access-control/accessControlState';
import { useRoute } from 'vue-router';

const enabled = ref(false);
const props = defineProps({
    role: {
        type: Object as () => Role,
        required: true,
    }
});

const state = useAccessControlState();
const ploc = dependencyLocator.provideAccessControlPloc(state);

const route = useRoute();
const staffId = computed(() => {
    return route.params.staffId as string;
});
onMounted(() => {
    autoFillPermission();
})

watch(() => state.staffDetails, (val) => {
    autoFillPermission();
});

const autoFillPermission = () => {
    const found = state.staffDetails?.permissions && state.staffDetails?.roles?.find((role) => role.id === props.role.id);
    enabled.value = found ? true : false;
}

</script>
