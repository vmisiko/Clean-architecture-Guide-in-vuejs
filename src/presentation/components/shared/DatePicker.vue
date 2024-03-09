<template>
    <div>
        <div>
            <label :for="id" class="text-normal-labels text-sm" :class="{ 'text-red-500': !!errorMessage }">{{ label }}
            </label>
            <div class="relative flex">
                <VueDatePicker v-model="inputValue" :id="id" aria-describedby="outlined_success_help"
                    :placeholder="placeholder" @input="handleChange" @blur="handleBlur" :required="required"
                    :disabled="disabled" format="dd-mm-yyyy" />
                <div class="absolute right-2 py-2">
                    <slot name="trailing-icon"></slot>
                </div>
            </div>
        </div>
        <p class="mt-2 text-red-500 text-xs capitalize text-left" v-show="errorMessage || meta.valid">
            {{ errorMessage }}
        </p>
    </div>
</template>
    
<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { useField } from 'vee-validate';

const props = defineProps({
    modelValue: { type: [Date, Number, String], required: false },
    label: { type: String, required: false },
    required: { type: Boolean, required: false },
    type: { type: String, required: false },
    id: { type: String, required: false },
    bg: { type: Boolean, required: false },
    placeholder: { type: String, required: false },

    name: {
        type: String,
        required: true,
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false,
    }
})

const {
    value: inputValue,
    errorMessage,
    handleBlur,
    handleChange,
    meta,
} = useField(() => props.name, undefined, {
    initialValue: props.modelValue,
});

</script>

<style>
.dp__theme_light {
    --dp-background-color: white;
}

:root {
    --dp-input-padding: 10px 30px 16px 12px;
    --dp-border-radius: 8px;
}
</style>