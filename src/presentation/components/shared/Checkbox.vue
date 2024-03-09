<template>
  <div>
    <div class="flex text-gray-500 items-center">
      <input type="checkbox" :id="id" aria-describedby="outlined_success_help" class="custom-checkbox" placeholder=""
        :checked="checked" @input="updateInputValue" @blur="emitInputValue" :required="required" />
      <label v-if="label" :for="id" class="ml-2 text-gray-500 text-sm">{{ label }}</label>
    </div>
    <p class="mt-2 text-red-500 text-xs capitalize text-left" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate';

const props = defineProps({
  modelValue: { type: Boolean, required: false },
  label: { type: String, required: false },
  required: { type: Boolean, required: false },
  id: { type: String, required: false },
  bg: { type: Boolean, required: false },
  name: { type: String, required: false },
  checked: { type: Boolean, required: false },
});

const emits = defineEmits(['update:modelValue', 'checked']);

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(props.name ?? '', {
  initialValue: props.modelValue,
});

// Update the inputValue on change
const updateInputValue = (newValue: Event) => {
  handleChange(newValue);
  emits('checked', (newValue.target as HTMLInputElement).checked);
};

// Emit the updated inputValue on blur
const emitInputValue = () => {
  emits('update:modelValue', inputValue.value);
};
</script>

<style>
/* Define custom color variables */
:root {
  --checkbox-color: red;
  --checkbox-tick-color: white;
}

/* Hide the default checkbox appearance */
.custom-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid;
  border-radius: 3px;
  position: relative;
  outline: none;
  cursor: pointer;
}

/* Style the custom checkbox when it's checked */
.custom-checkbox:checked {
  border-color: var(--checkbox-color);
  background-color: var(--checkbox-color);
}

/* Create the tick mark using ::before pseudo-element */
.custom-checkbox:checked::before {
  content: '\2713';
  /* Unicode code for a tick mark */
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: var(--checkbox-tick-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
