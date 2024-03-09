<template>
    <div class="text-primary-red p-2.5 mt-5">
        <p>{{ text }}</p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: false,
    }
});
</script>
