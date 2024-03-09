<template>
    <thead class="text-xs text-gray-400 capitalize bg-gray-50" :class="headerClasses">
        <tr>
            <th scope="col" class="p-4" v-if="checked">
                <div class="flex items-center">
                    <input @input="handleChecked" id="checkbox-all-search" type="checkbox" class="w-4 h-4 custom-checkbox">
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
            </th>
            <th v-for="(header, index) in headers" :key="index" scope="col" class="px-6 py-3" :class="rowHeader">
                {{ header.title }}
            </th>

        </tr>
        <tr v-if="loading">
            <td :colspan="headers.length" class="text-center">
                <div class="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-primary-red animate-progress"></div>
                </div>
            </td>
        </tr>
    </thead>
</template>

<script setup lang="ts">

const props = defineProps(['headers', 'checked', 'loading', 'headerClasses', 'rowHeader']);
const emit = defineEmits(['check-all'])
const handleChecked = (e: Event) => {
    const target = e.target as HTMLInputElement;
    emit('check-all', target.checked)
}

</script>