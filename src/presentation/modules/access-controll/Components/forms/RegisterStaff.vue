<template>
    <Modal :show="show" :title="edit ? 'Edit Staff Details' : 'Register Staff'" @close="$emit('close')">
        <Suspense>
            <div class="bg-white rounded-md shadow-md px-4 py-2.5 space-y-4">
                <Form class="space-y-4" :validation-schema="schema" @submit="submitForm">
                    <div class="flex justify-between space-x-4">
                        <TextInput class="w-full" v-model="authState.firstname" name="firstName" label="First Name">
                        </TextInput>
                        <TextInput class="w-full" v-model="authState.lastname" name="lastName" label="Last Name">
                        </TextInput>
                    </div>

                    <TextInput :disabled="edit" name="email" label="Email" v-model="authState.email">
                        <template v-slot:trailing-icon>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1051_15182)">
                                    <mask id="mask0_1051_15182" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="26" height="26">
                                        <path d="M26 0H0V26H26V0Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_1051_15182)">
                                        <path
                                            d="M23.8334 6.5C23.8334 5.30834 22.8584 4.33334 21.6667 4.33334H4.33335C3.14169 4.33334 2.16669 5.30834 2.16669 6.5V19.5C2.16669 20.6917 3.14169 21.6667 4.33335 21.6667H21.6667C22.8584 21.6667 23.8334 20.6917 23.8334 19.5V6.5ZM21.6667 6.5L13 11.9058L4.33335 6.5H21.6667ZM21.6667 19.5H4.33335V8.66667L13 14.0833L21.6667 8.66667V19.5Z"
                                            fill="#757575" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1051_15182">
                                        <rect width="26" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </template>
                    </TextInput>

                    <PhoneNumberInput v-model="authState.phone" name="phone" label="Phone Number"></PhoneNumberInput>
                    <MultiSelect v-model="authState.dealer" :multiselect="false" name="dealerShip"
                        placeholder="Select Dealership" label="Dealership" drop-down-label="name" track-by="id"
                        :options="dealerState.dealers" @select="(val) => authState.dealer_id = val.id" />

                    <hr class="mt-5 ">

                    <div class="pb-7">
                        <Btn class="bg-sidebar-text" :loading="authState.loadingRequest" text="Register"></Btn>
                    </div>
                </Form>
            </div>
        </Suspense>
    </Modal>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';
import { Form } from 'vee-validate';
import { string, object } from 'yup';
import TextInput from '@/presentation/components/shared/TextInput.vue';
import Btn from '@/presentation/components/shared/Btn.vue';
import Modal from '@/presentation/components/shared/Modal.vue';
import useAccessControlState from '@/presentation/bloc/access-control/accessControlState';
import useAUthState from '@/presentation/bloc/auth/authState';
import MultiSelect from '@/presentation/components/shared/MultiSelect/index.vue'
import PhoneNumberInput from "@/presentation/components/shared/PhoneNumberInput/index.vue";
import useDealerState from '@/presentation/bloc/dealers/dealerState';
import type { User } from '@/domain/entities/auth';
const props = defineProps({
    show: {
        type: Boolean,
        required: true,
    },
    edit: {
        type: Boolean,
        required: false,
        default: false,
    },
    staff: {
        type: [Object as () => User | null],
        required: false,
    }
});


const emit = defineEmits(['close']);

const passwordType = ref(false);

const authState = useAUthState();
const authPloc = dependencyLocator.provideAuthPloc(authState);
const state = useAccessControlState();
const ploc = dependencyLocator.provideAccessControlPloc(state);

const dealerState = useDealerState();
const dealerPloc = dependencyLocator.provideDealerPloc(dealerState);

const schema = object().shape({
    email: string().required().email(),
    firstName: string().required(),
    lastName: string().required(),
    dealerShip: object().required(),
    phone: string().required(),
});

watch(() => authState.successStatus, (val) => {
    if (val) {
        ploc.fetchStaffs();
        emit('close');
        if (props.edit) {
            const userId = `${props.staff?.user_id}`;
            ploc.fetchStaffDetail(userId);
        }
    }
});

const submitForm = () => {
    props.edit ? authPloc.editUser({ email: authState.email, firstname: authState.firstname, lastname: authState.lastname, dealer_id: authState.dealer_id as Number, phone: authState.phone, password: 'password' }) : authPloc.register({ email: authState.email, password: 'password', firstname: authState.firstname, lastname: authState.lastname, dealer_id: authState.dealer_id as Number, phone: authState.phone });
}

watch(() => props.staff, (val) => {
    authPloc.prefill(props.staff as User);
});

onMounted(() => {
    dealerPloc.getDealers({ offset: 0, max: 100 });
})

</script>