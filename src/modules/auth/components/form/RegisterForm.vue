<template>
    <form class="max-w-75 flex flex-col gap-3.5" @submit.prevent="handleSubmit">
        <h2 class="text-3xl font-medium leading-tight">Create your account</h2>

        <p class=" text-[#6B7280]">Start your 14-day free trial. No card required.</p>

        <div class="flex justify-between gap-2">
            <ImageButton type="button" text="Google" :icon="ggIcon" class="w-1/2 gap-2 justify-center" />
            <ImageButton type="button" text="Github" :icon="gitIcon" class="w-1/2 gap-2 justify-center" />
        </div>

        <div class="flex items-center gap-4">
            <hr class="flex-1 border-t border-t-[#e5e7eb]" />
            <span class="text-[#6b7280] text-[14px]">or sign in with email</span>
            <hr class="flex-1 border-t border-t-[#e5e7eb]" />
        </div>

        <BaseInput v-model="form.fullName" label="FullName:" type="text" placeholder="Enter your fullname"
            :error="errors.fullName" />

        <BaseInput v-model="form.email" label="Email:" type="email" placeholder="Enter your email"
            :error="errors.email" />

        <BaseInput v-model="form.password" label="Password:" type="password" placeholder="Enter your password"
            :error="errors.password" />

        <BaseInput v-model="form.confirmPassword" label="Confirm Password:" type="password"
            placeholder="Enter your password" :error="errors.confirmPassword" />

        <p class="justify-center">
            I agree to the <a href="" class="no-underline text-[#5046E5]">Terms of Service</a> and
            <a href="" class="no-underline text-[#5046E5]">Privacy Policy</a>
        </p>

        <BaseButton type="submit" text="Sign up" />

        <div class="text-center ">
            <p>
                Already have an account?<RouterLink to="/login" class="no-underline text-[#5046E5]">
                    Sign in</RouterLink>
            </p>
        </div>
    </form>
</template>

<script setup>
import { ref, watch } from 'vue';

import BaseInput from '../input/BaseInput.vue';
import BaseButton from '../button/BaseButton.vue';
import ggIcon from '@/shared/assets/img/gg.png'
import gitIcon from '@/shared/assets/img/git.png'
import ImageButton from '../button/ImageButton.vue';
import { validateSignup } from '@/shared/utils/validate/validateSignup.js';
const form = ref({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
});

const errors = ref({});
const fields = ["fullName", "email", "password", "confirmPassword"];
fields.forEach((field) => {
    watch(() => form.value[field], () => {
        errors.value[field] = "";
    });
});

const handleSubmit = () => {

    const rs = validateSignup(form.value);
    errors.value = rs;

    if (Object.keys(rs).length === 0) {
        alert("Sign up successfully!");
    }

};
</script>
