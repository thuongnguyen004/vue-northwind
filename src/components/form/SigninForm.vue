<script setup>
import { ref, watch } from 'vue';
import { validateLogin } from '@/assets/js/validateLogin';
const email = ref("");
const password = ref("");
const remember = ref(false);
const errors = ref({});

watch(email, () => {
    errors.value.email = "";
})
watch(password, () => {
    errors.value.password = "";
})
const handleSubmit = () => {

    const rs = validateLogin({
        email: email.value,
        password: password.value
    });


    errors.value.email = rs.email || "";
    errors.value.password = rs.password || "";

    if (Object.keys(rs).length === 0) {
        alert("Sign in successfully!");
    }

};
</script>
<template>
    <form class="max-w-75 flex flex-col gap-3.5" @submit.prevent="handleSubmit">
        <h2 class="text-3xl leading-tight">Welcome back</h2>
        <p class=" text-[#6B7280]">Sign in to continue to your workspace.</p>

        <div class="flex gap-2">
            <button class="p-2.5 flex items-center border border-[#E5E7EB] rounded-[10px] border-double" type="button">
                <img class="w-7.5 h-7.5" src="../../assets/img/gg.png" alt="" />Continue with Google
            </button>
            <button class="p-2.5 flex items-center border border-[#E5E7EB] rounded-[10px] border-double" type="button">
                <img class="w-7.5 h-7.5" src="../../assets/img/git.png" alt="" />Continue with Github
            </button>
        </div>

        <div class="flex items-center gap-4">
            <hr class="flex-1 border-t border-t-[#e5e7eb]" />
            <span class="text-[#6b7280] text-[14px]">or sign in with email</span>
            <hr class="flex-1 border-t border-t-[#e5e7eb]" />
        </div>

        <div>
            <label for="email">Email:</label><br />
            <input v-model="email" type="text" placeholder="Enter your email"
                class="w-75 h-7.5 mt-2.5 p-2.25 border border-[#E5E7EB] rounded-[10px] border-double " />
            <span class="text-[#ff0000]">{{ errors.email }}</span>
        </div>

        <div class="form_item input_box">
            <label for="password">Password:</label><br />
            <input v-model="password" type="password" placeholder="Enter your password"
                class="w-75 h-7.5 mt-2.5 p-2.25 border border-[#E5E7EB] rounded-[10px] border-double " />
            <span class="text-[#ff0000]">{{ errors.password }}</span>
        </div>

        <div class="flex justify-between">
            <div>
                <input v-model="remember" type="checkbox" />
                <label for="">Remember me</label>
            </div>
            <a href="" class="no-underline text-[#5046E5]">Forgot password?</a>
        </div>

        <div>
            <button type="submit"
                class="w-75 h-7.5 bg-[#5046E5] rounded-[10px] text-[#ffffff] hover:bg-[#5046E5]/90 cursor-pointer">Sign
                in</button>
        </div>

        <div class="text-center ">
            <p>
                Don't have an account?<a href="../RegisterPage/register.html" class="no-underline text-[#5046E5]">
                    Sign up</a>
            </p>
        </div>
    </form>
</template>
