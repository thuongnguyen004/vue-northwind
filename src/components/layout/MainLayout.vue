<template>
    <div class="bg-[#F5F5F5]">
        <Header />
        <main class="p-10 justify-items-center">
            <div class="flex justify-center w-fit min-h-150">
                <div
                    class="w-2/5 relative rounded-l-[10px] bg-linear-to-r from-[#6C63FF] via-[#4F46E5] to-[#7C6AF7] text-white p-12.5 flex flex-col justify-between">
                    <ContentLeft />
                </div>

                <div class="bg-white w-[50%] p-7.5 content-center justify-items-center rounded-r-[10px]">
                    <slot />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import Header from '../Header.vue';
import ContentLeft from '../ContentLeft.vue';
</script>
