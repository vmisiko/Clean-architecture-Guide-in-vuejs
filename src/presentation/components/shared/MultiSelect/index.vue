<template>
  <div>
    <div>
      <label :for="id" class="text-normal-labels text-sm" :class="{ 'text-red-500': !!errorMessage }">
        {{ label }}
      </label>
      <VueMultiselect
        class="block  w-full text-sm rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-green-700 peer "
        :trackBy="trackBy" :label="dropDownLabel" v-model="inputValue" :options="options" :multiple="multiselect"
        :taggable="true" :placeholder="placeholder" @select="$emit('select', inputValue)" :disabled="disabled" />
      <p class="mt-2 text-red-500 text-xs capitalize text-left" v-show="errorMessage || meta.valid">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueMultiselect from 'vue-multiselect';
import { useField } from 'vee-validate';

const props = defineProps({
  modelValue: { type: [String, Array as () => String[], Object], required: false },
  label: { type: String, required: false },
  required: { type: Boolean, required: false },
  id: { type: String, required: false },
  name: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  options: {
    type: [Object, Array as () => string[]],
    required: false,
  },
  multiselect: {
    type: Boolean,
    required: false,
    default: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
  trackBy: {
    type: String,
    required: false,
  },
  dropDownLabel: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: false,
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

const emit = defineEmits(['select', 'update:modelValue']);

</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style>
.multiselect__tags {
  min-height: 40px;
  display: block;
  padding: 12px 40px 6px 8px;
  border-radius: 8px;
  border: 1px solid #B9B9B9;
  font-size: 14px;
}

.multiselect__option--highlight .multiselect_option {
  background: var(--primary-red);
}


.multiselect__tag {
  background: var(--primary-red);
}

.multiselect__tag:hover {
  background: var(--primary-red);
}

.multiselect__option--highlight {
  background: var(--primary-red);
  outline: none;
  color: white;
}
</style>
