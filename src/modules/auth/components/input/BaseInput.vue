<script setup>
defineProps({
    label: {
        type: String,
        default: "",
    },
    modelValue: {
        type: String,
        default: "",
    },
    error: {
        type: String,
        default: "",
    }
});
</script>
<template>
    <div>
        <label>{{ label }}</label><br />
        <input type="text" for="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs"
            class="w-75 h-7.5 mt-2.5 p-2.25 border border-[#E5E7EB] rounded-[10px] border-double " />
        <span v-if="error" class="text-[#ff0000]">{{ error }}</span>
    </div>
</template>
