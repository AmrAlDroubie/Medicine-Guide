<template>
    <nav class="navbar navbar-expand-lg my-3">
        <div class="container">
            <router-link class="navbar-brand d-flex align-items-center" to="/">
                <img :src="logo" class="d-block pe-2" />
                <h1 class="fw-bold primary-transition">
                    <span class="clr-primary">دليلك </span>
                    <span class="clr-secondry">الدوائي</span>
                </h1>
            </router-link>
            <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbar">
                <i class="fas fa-bars fs-2 clr-primary"></i>
            </button>
            <div class="collapse navbar-collapse text-lg-start text-center" id="navbar">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link class="nav-link  clr-primary me-1" to="/">الرئيسية</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link  clr-primary me-1" to="/search">ابحث عن دوائك</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link  clr-primary me-1" to="contact-us">تواصل معنا</router-link>
                    </li>
                </ul>
                <ul v-if="!loginData.loginStatus" class="navbar-nav ms-auto">
                    <button @click="reg.login = true" data-bs-toggle="modal" data-bs-target="#regModal"
                        class="d-inline-block btn login-btn me-lg-3 mb-2">تسجيل
                        دخول
                        كصيدلي
                    </button>
                    <button @click="reg.login = false" data-bs-toggle="modal" data-bs-target="#regModal"
                        class="d-inline-block btn signup-btn mb-2">إنشاء حساب
                        صيدلي</button>
                </ul>
                <ul v-else class="navbar-nav ms-auto">
                    <router-link to="/editinfo" class="d-inline-block btn login-btn me-lg-3 mb-2">
                        لوحة التحكم
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>

    <regestrationBox />
</template>



<style scoped>
.navbar-brand .logo {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: var(--primary-clr);
}

.nav-link {
    font-size: 18px;
}

.navbar-brand span {
    transition: var(--primary-transition);
}

.navbar-brand:hover span.clr-primary {
    color: var(--secondry-clr);
}

.navbar-brand:hover span.clr-secondry {
    color: var(--primary-clr);

}

.login-btn,
.signup-btn {
    border-radius: 7px;
    padding: 8px;
    font-size: 18px;
    border: 2px solid var(--primary-clr);
    transform: var(--primary-transition);
}

.login-btn {
    color: var(--primary-clr);

}

.signup-btn {
    background-color: var(--primary-clr);
    color: var(--while--clr);

}

.login-btn:hover {
    background-color: var(--primary-clr);
    color: var(--while--clr);
}

.signup-btn:hover {

    border: 2px solid var(--primary-clr);
    color: var(--primary-clr);
    background-color: transparent;
}
</style>



<script setup>
import router from "@/router";
import logo from "../assets/images/logo.svg";
import regestrationBox from "./regestrationBox.vue";
import { loginData } from "./SignUp.vue";
</script>

<script>
import { reactive } from "vue";
export const reg = reactive({
    login: true,

});
</script>