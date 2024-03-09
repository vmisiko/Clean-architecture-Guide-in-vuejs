<template>
    <div ref="el" class="h-full">
        <table class="w-full text-sm text-left text-gray-500">

            <TableHeader :row-header="rowHeader" :header-classes="headerClasses" :loading="loading" :headers="headers"
                :checked="checked" @check-all="handleCheck">
            </TableHeader>
            <tbody v-if="items" :class="bodyClasses">
                <tr v-for="(item, index) in items" @click="$emit('selected-row', item)"
                    class="bg-white border-b hover:bg-gray-50 cursor-pointer" :key="index">
                    <td class="w-4 p-4" v-if="checked">
                        <div class="flex items-center">
                            <input @input="(e) => handleInput(e, item)" :id="`checkbox-item-${index}`" type="checkbox"
                                class="w-4 h-4 custom-checkbox">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <td v-for="header in headers" scope="row" class="px-6 py-4 font-medium whitespace-nowrap"
                        :class="rowClasses" :key="header.key">
                        <slot :name="`item.${header.key}`" v-bind="{ item }">
                            {{ item[header.key as keyof typeof item] || '--' }}
                        </slot>
                    </td>

                </tr>

            </tbody>
            <tbody v-if="items?.length === 0 && !loading" class="mt-5">
                <tr class="">
                    <td colspan="12" class="text-center pt-10 pb-5"> No data available</td>
                </tr>
            </tbody>

        </table>
        <PaginationComponent :loading="loading" v-if="items && items?.length > 0 && pagination" :pagination="pagination"
            @load-more="emit('loadMore')" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import TableHeader from './components/TableHeader.vue';
import PaginationComponent from './components/PaginationComponent.vue';
import type { Pagination } from '@/domain/entities/pricing';

const props = defineProps({
    headers: {
        type: Object,
        required: true,
    },
    items: {
        type: [Array as () => any[] | [] | undefined],
        required: true,
        default: () => [],
    },
    loading: {
        type: Boolean,
        required: false,
    },
    checked: {
        type: Boolean,
        required: false,
    },
    pagination: {
        type: [Object as () => Pagination | null],
        required: false,
    },
    headerClasses: {
        type: String,
        required: false,
    },
    bodyClasses: {
        type: String,
        required: false,
    },
    rowClasses: {
        type: String,
        required: false,
    },
    rowHeader: {
        type: String,
        required: false,
    },
});

const emit = defineEmits(['selected-row', 'selected-rows', 'loadMore',]);

const selectedRows = ref<any>([]);

const el = ref<HTMLElement | null>(null)

const loadMore = () => {
    if (props.pagination?.hasNext) {
        emit('loadMore');
    }
};

onMounted(() => {
    el.value?.addEventListener('scroll', loadMore);
});

onUnmounted(() => {
    el.value?.removeEventListener('scroll', loadMore);
});


const handleInput = (e: Event, val: any) => {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
        selectedRows.value.push(val);
        emit('selected-rows', selectedRows.value);
    }
    else {
        selectedRows.value.forEach((item: any, index: number) => {
            if (JSON.stringify(item) === JSON.stringify(val)) {
                selectedRows.value.splice(index, 1);
            }
        });
        emit('selected-rows', selectedRows.value);
    }
}

const handleCheck = (val: boolean) => {
    emit('selected-rows', val ? props.items : []);
    if (props.items) {
        for (let item of props.items) {
            item.checked = props.checked;
        }
    }

}



</script>

<style>
@keyframes progress {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

.animate-progress {
    animation: progress 1.5s infinite;
}
</style>

