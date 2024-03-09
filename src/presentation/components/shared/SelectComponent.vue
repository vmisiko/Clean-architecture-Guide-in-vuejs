<template>
  <div>
    <div class="relative w-full">
      <label :for="id" 
              class="text-normal-labels text-sm" 
            :class="{'text-red-500': !!errorMessage}"
            >{{label}}
            </label> 
      <input
        v-model="inputValue"
        :id="id"
        :required="required"
        @focusin="focus = true"
        class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-white rounded-lg border border-1 appearance-none focus:outline-none focus:ring-0 focus:border-green-700 peer"
        :class="{'border-red-500 focus:border-red-500 text-red-500': !!errorMessage, 'bg-disabled border-none shadow-sm' : disabled}"
        @input="handleChange"
        @blur="handleBlur"
        :placeholder="placeholder"
        :disabled="disabled"
      >
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.25 2.33344L16.1938 0.45343L9.5 6.56011L2.80625 0.45343L0.75 2.33344L9.5 10.3334L18.25 2.33344Z" fill="#B9B9B9"/>
        </svg>
      </div>
      <div v-if="focus && filteredOptions.length" class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md z-50">
        <ul class="py-1">
          <li v-for="(option, index) in filteredOptions" :key="index" @click="selectOption(option)" class="px-4 py-2 cursor-pointer hover:bg-gray-100">
            {{ option.label }}
          </li>
        </ul>
      </div>
    </div>
    <p class="mt-2 text-red-500 text-xs capitalize text-left" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>
    <p v-if="focus && !filteredOptions.length" class="mt-2 text-red-500 text-xs capitalize text-left" v-show="errorMessage || meta.valid">
      No select options for {{ label }} available.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useField } from 'vee-validate';

export interface DropdownOption {
  value: string;
  label: string;
}

const focus = ref(false);
const props = defineProps({
  modelValue: { type: String, required: false },
  label: { type: String, required: false },
  isBg: { type: Boolean, required: false },
  required: { type: Boolean, required: false },
  id: { type: String, required: false },
  options: {
    type: Array as () => DropdownOption[],
    required: false,
    default: () => [],
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  }

});

const inputValue = ref(props.modelValue || '');

const emits = defineEmits(['selectedOption', 'update:modelValue']);

const getInitialValueLabel = (val: any) => {
  const option = props.options.filter((op: DropdownOption) => op.value === val)[0];
  return option?.label;
}

const {
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(() => props.name, inputValue.value, {
  initialValue: getInitialValueLabel(props.modelValue),
  
});

const selectedOption = ref<DropdownOption | null>(null);

function selectOption(option: DropdownOption): void {
  emits('update:modelValue', option.value);
  emits('selectedOption', option);
  selectedOption.value = option;
  inputValue.value = option.label;
  focus.value = false;
}

const filteredOptions = computed(() => {
  const searchTerm = inputValue.value.toLowerCase();
  return props.options.filter((option: DropdownOption) =>
    option.label.toLowerCase().includes(searchTerm)
  );
});


</script>
