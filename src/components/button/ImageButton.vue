<script setup>
defineProps({
    type: {
        type: String,
        default: "button",
    },
    text: String,
    icon: String,
});
</script>

<template>
    <button :type=type class="p-2.5 flex items-center border border-[#E5E7EB] rounded-[10px] border-double">
        <img :src="icon" class="w-7.5 h-7.5" alt="" />{{ text }}
    </button>
</template>
