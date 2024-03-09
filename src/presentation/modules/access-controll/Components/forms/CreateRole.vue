<template>
    <Modal :show="show" title="Create Role" @close="$emit('close')">
        <Form :validation-schema="schema" @submit="ploc.createRole({
            name: roleName,
            description: description,
            display_name: roleName,
        })">
            <div class="px-4 mt-5">
                <TextInput v-model="roleName" name="name" label="Name"></TextInput>

                <TextArea v-model="description" name="description" :rows="4" label="Description"></TextArea>
            </div>

            <div class="mt-10 bg-red-50 h-34">
                <Btn class="bg-sidebar-text" text="submit" :loading="state.loadingCreateRole"></Btn>
            </div>
        </Form>
    </Modal>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import TextArea from '@/presentation/components/shared/TextArea.vue';
import TextInput from '@/presentation/components/shared/TextInput.vue';
import Modal from '@/presentation/components/shared/Modal.vue';
import Btn from '@/presentation/components/shared/Btn.vue';
import { Form } from 'vee-validate';
import useAccessControlState from '@/presentation/bloc/access-control/accessControlState';
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';
import { object, string } from 'yup';

const props = defineProps({
    show: {
        type: Boolean,
        required: true,
    }
});

const emits = defineEmits(['close']);

const roleName = ref('');
const description = ref('');

const state = useAccessControlState();
const ploc = dependencyLocator.provideAccessControlPloc(state);

const schema = object().shape({
    name: string().required(),
    description: string().required(),
});

watch(() => state.loadingCreateRole, (val) => {
    if (!val) {
        ploc.fetchRoles();
        emits('close');
    }
});


</script>