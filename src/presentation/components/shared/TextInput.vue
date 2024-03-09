<template>
  <div>
    <div>
      <label :for="id" class="text-normal-labels text-sm" :class="{ 'text-red-500': !!errorMessage }">{{ label }}
      </label>
      <div class="relative flex">
        <input :type="type || 'text'" :value="inputValue" :id="id" aria-describedby="outlined_success_help"
          class="block px-2.5 py-3.5 w-full text-sm rounded-lg border border-1 border-line-102 appearance-none focus:outline-none focus:ring-0 focus:border-black peer placeholder:italic"
          :class="{ 'border-red-500 focus:border-red-500 text-red-500': !!errorMessage, 'bg-disabled border-none shadow-sm': disabled, 'bg-transparent': bg }"
          :placeholder="placeholder" @input="handleChange" @blur="handleBlur" :required="required" :disabled="disabled" />
        <div class="absolute right-2 py-2">
          <slot name="trailing-icon"></slot>
        </div>
        <div>
          <slot name="search-button"></slot>
        </div>
      </div>
    </div>
    <p class="mt-2 text-red-500 text-xs capitalize text-left" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>
  </div>
</template>
  
<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  modelValue: { type: [String, Number], required: false },
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