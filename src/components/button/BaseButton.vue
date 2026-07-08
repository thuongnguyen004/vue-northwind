<script setup>
defineProps({
    type: {
        type: String,
        default: "button",
    },
    text: String,
});

</script>

<template>
    <div>
        <button :type="type""
            class=" w-75 h-7.5 bg-[#5046E5] rounded-[10px] text-[#ffffff] hover:bg-[#5046E5]/90 cursor-pointer">
            {{ text }}
        </button>
    </div>
</template>
