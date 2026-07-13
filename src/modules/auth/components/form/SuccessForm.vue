<template>
    <form class="max-w-75 flex flex-col gap-3.5 items-center" @submit.prevent="handleSubmit">
        <img class="w-12.5 h-12.5 " src="@/shared/assets/img/ss.png" alt="" />
        <h2 class="text-3xl font-medium leading-tight">You're all set!</h2>
        <p class=" text-[#6B7280] text-center">
            Your email has been verified and your account is ready. Welcome to
            Northwind — let's get you to your workspace.
        </p>

        <RouterLink to="/login">
            <BaseButton type="submit" text="Send reset link" />
        </RouterLink>

        <div class="text-center">
            <p class="text-[#6B7280]">Redirecting you automatically in 2 seconds…</p>
        </div>
    </form>
</template>

<script setup>

import BaseButton from '../button/BaseButton.vue';

</script>