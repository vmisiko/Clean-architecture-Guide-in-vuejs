<template>
    <div>
        <label :for="id" 
        class="text-normal-labels text-sm" 
        :class="{'text-red-500': !!errorMessage}"
        >
            {{label}}
        </label> 
        <vue-tel-input 
        class="rounded-lg " 
        v-model="inputValue" 
        mode="international"
        :dark="dark"
        :disabled="disabled"
        :preferred-countries="countriesList"
        :defaultCountry="defaultCountry"
        :loader="hasLoaderActive"
        clearable
        :error="hasErrorActive"
        @validate="Validate"
        @input="handleChange"
        @blur="handleBlur"
        >
    </vue-tel-input>
        <p class="mt-2 text-red-500 text-xs capitalize text-left" v-show="errorMessage || meta.valid">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {VueTelInput} from 'vue-tel-input';

import 'vue-tel-input/vue-tel-input.css';

    const defaultCountry =  "KE";
    const countriesList =  ["KE", "UG", "TZ"];
    const dark = ref(false);
    const disabled= ref(false);
    const hasLoaderActive = ref(false);
    const hasErrorActive = ref(false);

    import { useField } from 'vee-validate';
  
  const props = defineProps({
    modelValue: { type: [String, Number], required: false},
    label: { type: String, required: false},
    required: { type: Boolean, required: false},
    type: { type: String, required: false},
    id: { type: String, required: false},
    bg: {type: Boolean, required: false},
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
    setErrors: SetNameError,
  } = useField(()=> props.name, undefined, {
    initialValue: props.modelValue,
  });

  const Validate = (phoneObject: any) => {
    phoneObject.valid ? SetNameError('') :  SetNameError('Phone number is invalid');
  };
</script>
<style>

.vti__input {
    border: none;
    border-radius: 0 2px 2px 0;
    width: 100%;
    outline: none;
    padding-left: 7px;
    padding-right: 9px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 8px;
}

.vue-tel-input {
    border-radius: 8px !important;
}

</style>