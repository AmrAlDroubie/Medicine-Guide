<template>
    <nav class="navbar navbar-expand-lg mb-3 py-2">
        <div class="container">
            <router-link class="navbar-brand d-flex align-items-center" to="/">
                <h1 class="fw-bold primary-transition text-white">
                    دليلك
                    الدوائي
                </h1>
            </router-link>
            <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbar">
                <i class="fas fa-bars fs-2 text-white"></i>
            </button>
            <div class="collapse navbar-collapse text-lg-start text-center" id="navbar">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link class="nav-link text-white me-1" to="/">الرئيسية</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link  text-white me-1" to="/search">ابحث عن دوائك</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link  text-white me-1" to="contact-us">تواصل معنا</router-link>
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



<style style="scoped">
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
    border: 2px solid #fff;
    transform: var(--primary-transition);
}

.login-btn {
    color: #fff;
    background-color: transparent;
}

.login-btn:hover {
    background-color: var(--primary-clr);
    color: #fff;
    border: 2px solid var(--primary-clr);

}

.signup-btn {
    background-color: #fff;
    color: var(--secondry-clr);
}

.signup-btn:hover {
    background-color: var(--primary-clr);
    color: #fff;
    border: 2px solid var(--primary-clr);
}
</style>



<script setup>
import router from "@/router";
import logo from "../assets/images/logo.svg";
import regestrationBox from "./regestrationBox.vue";
import { loginData } from "./SignUp.vue"
import { reg } from "./Navbar.vue";
</script>

<script>
// import { reactive } from "vue";
// export const reg = reactive({
//     login: true
// });
</script>