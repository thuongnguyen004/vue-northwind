<script setup>
import { ref, watch } from 'vue';
import BaseInput from '../input/BaseInput.vue';
import BaseButton from '../button/BaseButton.vue';
import { validateResetPass } from '@/assets/js/validateResetPass.js';

const form = ref({
    password: "",
    confirmPassword: "",
});
const errors = ref({});

watch(() => form.value.password, () => {
    errors.value.password = "";
})
watch(() => form.value.confirmPassword, () => {
    errors.value.confirmPassword = "";
})

const handleSubmit = () => {

    const rs = validateResetPass(form.value);
    errors.value = rs;

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
        <BaseInput v-model="form.password" label="Password:" type="password" placeholder="Enter your password"
            :error="errors.password" />

        <BaseInput v-model="form.confirmPassword" label="Confirm Password:" type="password"
            placeholder="Enter your password" :error="errors.confirmPassword" />

        <BaseButton type="submit" text="Update password" />

        <div class="text-center">
            <RouterLink to="/login" class="no-underline text-[#5046E5]">
                <i class="fa-solid fa-arrow-left" style="color: #5046e5"></i>Back to sign in
            </RouterLink>
        </div>
    </form>
</template>
