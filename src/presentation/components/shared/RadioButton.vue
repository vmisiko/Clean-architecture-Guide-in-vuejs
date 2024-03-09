<template>
    <div>
        <div class="flex text-gray-500 items-center">
            <input name="radio" type="radio" :id="id" aria-describedby="outlined_success_help"
                class="h-5 w-5 text-primary-red checked:bg-transparent checked:border-primary-red" placeholder=""
                :checked="checked" @input="updateInputValue" @blur="emitInputValue" :required="required" />
            <label v-if="label" :for="id" class="ml-2 text-gray-500 text-sm">{{ label }}</label>
        </div>
        <p class="mt-2 text-red-500 text-xs capitalize text-left" v-show="errorMessage || meta.valid">
            {{ errorMessage }}
        </p>
    </div>
</template>
  
<script setup lang="ts">
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
:root {
    --form-control-color: #FF0000;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}


.form-control {
    font-family: system-ui, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
}

.form-control+.form-control {
    margin-top: 1em;
}

.form-control:focus-within {
    color: var(--form-control-color);
}

input[type="radio"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: white;
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 50%;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
}

input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    /* Windows High Contrast Mode */
    background-color: CanvasText;
}

input[type="radio"]:checked::before {
    transform: scale(1);
}

input[type="radio"]:focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
}
</style>