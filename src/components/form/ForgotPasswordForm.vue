<script setup>
import { ref, watch } from 'vue';
import BaseInput from '../input/BaseInput.vue';
import BaseButton from '../button/BaseButton.vue';
import { validateForgotPass } from '@/assets/js/validateForgotPass.js';

const email = ref("");
const errors = ref({});

watch(email, () => {
    errors.value.email = "";
})

const handleSubmit = () => {

    const rs = validateForgotPass({
        email: email.value,
    });

    errors.value.email = rs.email || "";

    if (Object.keys(rs).length === 0) {
        alert("Send reset link successfully!");
    }

};
</script>
<template>
    <form class="max-w-75 flex flex-col gap-3.5" @submit.prevent="handleSubmit">
        <img class="w-12.5 h-12.5" src="../../assets/img/fg.png" alt="" />
        <h2 class="text-3xl leading-tight">Forgot password?</h2>

        <p class=" text-[#6B7280]">
            No problem. Enter the email tied to your account and we'll send
            you a reset link.
        </p>

        <BaseInput v-model="email" label="Email:" type="email" placeholder="Enter your email" :error="errors.email" />

        <BaseButton type="submit" text="Send reset link" />

        <div class="text-center">
            <RouterLink to="/login" class="no-underline text-[#5046E5]">
                <i class="fa-solid fa-arrow-left" style="color: #5046e5"></i>Back to sign in
            </RouterLink>
        </div>
    </form>
</template>
