<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>
<template>
    <header class="bg-[#ffffff] h-fit">
        <button @click="toggleMenu" class="hidden max-[760px]:block p-4">
            <i class="fa-solid fa-bars text-[#5046E5]"></i>
        </button>

        <nav :class="isOpen ? 'block' : 'max-[760px]:hidden'">
            <ul class="flex max-[760px]:flex-col">
                <li class="p-0 list-none flex items-center justify-center">
                    <RouterLink to="/"
                        class="p-2.5 no-underline text-[#6B7280] hover:bg-[#5046E5] hover:text-[#ffffff] hover: rounded-3xl"
                        href="">1.
                        Login</RouterLink>
                </li>
                <li class="p-0 list-none flex items-center justify-center">
                    <RouterLink to="/register"
                        class="p-2.5 no-underline text-[#6B7280]  hover:bg-[#5046E5] hover:text-[#ffffff] hover: rounded-3xl"
                        href="">2. Register</RouterLink>
                </li>
                <li class="p-0 list-none flex items-center justify-center">
                    <RouterLink to="/"
                        class="p-2.5 no-underline text-[#6B7280] hover:bg-[#5046E5] hover:text-[#ffffff] hover: rounded-3xl"
                        href="">3. Forgot password</RouterLink>
                </li>
                <li class="p-0 list-none flex items-center justify-center">
                    <RouterLink to="/"
                        class="p-2.5 no-underline text-[#6B7280] hover:bg-[#5046E5] hover:text-[#ffffff] hover: rounded-3xl"
                        href="">4. Reset password</RouterLink>
                </li>
                <li class="p-0 list-none flex items-center justify-center">
                    <RouterLink to="/"
                        class="p-2.5 no-underline text-[#6B7280] hover:bg-[#5046E5] hover:text-[#ffffff] hover: rounded-3xl"
                        href="">5. Success</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
