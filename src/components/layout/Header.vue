<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
const menus = [
    { name: "1.Login", path: "/login" },
    { name: "2.Register", path: "/register" },
    { name: "3.Forgot password", path: "/forgot-pass" },
    { name: "4.Reset password", path: "/reset-pass" },
    { name: "5.Success", path: "/success" },
];
</script>
<template>
    <header class="bg-[#ffffff] h-fit max-[760px]:absolute w-full">
        <button @click="toggleMenu" class="hidden max-[760px]:block p-4">
            <i class="fa-solid fa-bars text-[#5046E5]"></i>
        </button>

        <nav class="overflow-hidden transition-all duration-500
         min-[760px]:block max-[760px]:bg-[#5649ffe1]" :class="isOpen ? 'max-h-96' : 'max-[760px]:max-h-0'">
            <ul class="flex max-[760px]:flex-col">

                <li v-for="(menu) in menus" :key="menu.path" class="p-0 list-none flex items-center justify-center">
                    <RouterLink :to="menu.path"
                        class="p-2.5 no-underline text-[#6B7280] max-[760px]:text-[#ffffff] hover:bg-[#5046E5] hover:text-[#ffffff] hover: rounded-3xl">
                        {{ menu.name }}</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
