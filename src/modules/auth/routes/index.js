import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ForgotPasswordView from "../views/ForgotPasswordView.vue";
import ResetPasswordView from "../views/ResetPasswordView.vue";
import SuccessView from "../views/SuccessView.vue";
const routes = [
  {
    path: "/",
    component: LoginView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/forgot-pass",
    name: "forgot-pass",
    component: ForgotPasswordView,
  },
  {
    path: "/reset-pass",
    name: "reset-pass",
    component: ResetPasswordView,
  },
  {
    path: "/success",
    name: "success",
    component: SuccessView,
  },
];
export default routes;
