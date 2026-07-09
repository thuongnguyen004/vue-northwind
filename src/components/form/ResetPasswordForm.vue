<script setup>
import { ref, watch } from 'vue';
import BaseInput from '../input/BaseInput.vue';
import BaseButton from '../button/BaseButton.vue';
import { validateResetPass } from '@/assets/js/validateResetPass.js';

const password = ref("");
const confirmPassword = ref("");
const errors = ref({});

watch(password, () => {
    errors.value.password = "";
})
watch(confirmPassword, () => {
    errors.value.confirmPassword = "";
})

const handleSubmit = () => {

    const rs = validateResetPass({
        password: password.value,
        confirmPassword: confirmPassword.value,
    });

    errors.value.password = rs.password || "";
    errors.value.confirmPassword = rs.confirmPassword || "";

    if (Object.keys(rs).length === 0) {
        alert("Reset password successfully!");
    }

};
</script>
<template>
    <form class="max-w-75 flex flex-col gap-3.5" @submit.prevent="handleSubmit">
        <img class="w-12.5 h-12.5" src="../../assets/img/reset.png" alt="" />
        <h2 class="text-3xl leading-tight">Set a new password</h2>
        <p class=" text-[#6B7280]">
            Choose a strong password you haven't used before. It must be at
            least 8 characters.
        </p>
        <BaseInput v-model="password" label="Password:" type="password" placeholder="Enter your password"
            :error="errors.password" />

        <BaseInput v-model="confirmPassword" label="Confirm Password:" type="password" placeholder="Enter your password"
            :error="errors.confirmPassword" />

        <BaseButton type="submit" text="Update password" />

        <div class="text-center">
            <RouterLink to="/login" class="no-underline text-[#5046E5]">
                <i class="fa-solid fa-arrow-left" style="color: #5046e5"></i>Back to sign in
            </RouterLink>
        </div>
    </form>
</template>
