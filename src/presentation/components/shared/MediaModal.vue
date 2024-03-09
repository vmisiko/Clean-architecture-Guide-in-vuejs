

<template>
    <Modal :show="show" title="Vehicle Images" @close="$emit('close')">
        <SliderCarousel :type="type" :slides="slides">
        </SliderCarousel>
    </Modal>    

</template>

<script lang="ts" setup>
import Modal from '@/presentation/components/shared/Modal.vue';
import SliderCarousel from '@/presentation/components/shared/SliderCarousel.vue';

const props = defineProps({
    show: {
        type: Boolean,
        required: true,
    },
    type: {
        type: String,
        required: false,
        default: 'Images'
    },
    slides: {
        type: Array<String>,
        required: true,
    }
});

</script>