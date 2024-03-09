<template>
    <div class="grid grid-cols-3 mt-10">
        <div></div>
        <div>
            <div class="bg-white rounded-md shadow-md px-4 py-2.5 space-y-4">
                <div class="flex justify-center">
                    <span class="-mt-12">
                        <svg class="h-20 w-20" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="52" cy="52" r="52" fill="#D9D9D9" />
                            <path
                                d="M13.5 52C13.5 30.737 30.737 13.5 52 13.5C73.2631 13.5 90.5 30.737 90.5 52C90.5 73.2631 73.2631 90.5 52 90.5C30.737 90.5 13.5 73.2631 13.5 52Z"
                                fill="white" stroke="white" />
                            <path
                                d="M52 56.9189C59.3737 56.9189 65.3513 50.9413 65.3513 43.5676C65.3513 36.1938 59.3737 30.2162 52 30.2162C44.6262 30.2162 38.6486 36.1938 38.6486 43.5676C38.6486 50.9413 44.6262 56.9189 52 56.9189Z"
                                fill="#515151" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M78.9572 79.0669C79.2094 79.4846 79.1323 80.0193 78.7778 80.3539C71.7921 86.9535 62.3688 91 52 91C41.6316 91 32.2081 86.954 25.2225 80.3543C24.868 80.0193 24.7911 79.485 25.0431 79.0673C30.088 70.7113 40.266 65 52.0005 65C63.7342 65 73.9124 70.7109 78.9572 79.0669Z"
                                fill="#515151" />
                        </svg>
                    </span>
                </div>
                <Form class="space-y-4" :validation-schema="schema"
                    @submit="authPloc.login({ email: state.email, password: state.password });">
                    <div class="flex justify-center mt-5">
                        <span class="uppercase">user login</span>
                    </div>

                    <div v-if="state.error" class="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50">
                        {{ state.error }}
                    </div>

                    <TextInput v-model="state.email" name="email" label="Email">
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
                    <TextInput v-model="state.password" name="password" label="password"
                        :type="passwordType ? 'text' : 'password'">
                        <template v-slot:trailing-icon>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1051_15188)">
                                    <mask id="mask0_1051_15188" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="26" height="26">
                                        <path d="M26 0H0V26H26V0Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_1051_15188)">
                                        <path
                                            d="M19.5 8.66667H18.4166V6.5C18.4166 3.51 15.99 1.08333 13 1.08333C10.01 1.08333 7.58331 3.51 7.58331 6.5V8.66667H6.49998C5.30831 8.66667 4.33331 9.64167 4.33331 10.8333V21.6667C4.33331 22.8583 5.30831 23.8333 6.49998 23.8333H19.5C20.6916 23.8333 21.6666 22.8583 21.6666 21.6667V10.8333C21.6666 9.64167 20.6916 8.66667 19.5 8.66667ZM9.74998 6.5C9.74998 4.70167 11.2016 3.25 13 3.25C14.7983 3.25 16.25 4.70167 16.25 6.5V8.66667H9.74998V6.5ZM19.5 21.6667H6.49998V10.8333H19.5V21.6667ZM13 18.4167C14.1916 18.4167 15.1666 17.4417 15.1666 16.25C15.1666 15.0583 14.1916 14.0833 13 14.0833C11.8083 14.0833 10.8333 15.0583 10.8333 16.25C10.8333 17.4417 11.8083 18.4167 13 18.4167Z"
                                            fill="#757575" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1051_15188">
                                        <rect width="26" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </template>
                    </TextInput>

                    <div class="flex justify-between">
                        <Checkbox @checked="(val) => passwordType = val" name="show_password" label="Show Password" />
                        <span class="cursor-pointer underlint text-blue-500 text-sm"
                            @click="$router.push('/auth/forgot-password')"> Forgot password?</span>
                    </div>

                    <div class="pb-7 pt-5">
                        <Btn  :loading="state.loadingRequest" class="bg-sidebar-text" text="login"></Btn>
                    </div>
                </Form>

            </div>

            <div class="flex justify-center mt-10 text-sidebar-text">
                <span>New User? </span>
                <span @click="$router.push('/auth/register')" class="underline cursor-pointer ml-2"> REGISTER HERE</span>
            </div>
        </div>
        <div class="mt-3">
        </div>
    </div>
</template>

<script setup lang="ts">
import TextInput from '@/presentation/components/shared/TextInput.vue';
import Checkbox from '@/presentation/components/shared/Checkbox.vue';
import Btn from '@/presentation/components/shared/Btn.vue';
import { ref, watch } from 'vue';
import useAUthState from '@/presentation/bloc/auth/authState';
import { dependencyLocator } from '@/core/dependicies/dependencyLocator';
import { Form } from 'vee-validate';
import { string, object } from 'yup';
import { useRouter } from 'vue-router';
const passwordType = ref(false);

const state = useAUthState();
const authPloc = dependencyLocator.provideAuthPloc(state);
const router = useRouter();

const schema = object().shape({
    email: string().required().email(),
    password: string().required(),
});

watch(() => state.isAuthenticated, (val) => {
    if (val) {
        router.push('/ffs/new');
    }
});
</script>

