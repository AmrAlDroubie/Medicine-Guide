<template>
    <div class="admin-menu  pt-4">
        <router-link to="/" class="logo">
            <img :src="logo" class="d-block mb-5 d-block mx-auto">
        </router-link>
        <div class="menu-link">
            <router-link :class="medcines ? 'active' : ''" class="menu-item text-decoration-none " to="/editmedcines">
                <i class="fas fa-pills "></i>
            </router-link>
        </div>
        <div class="menu-link">
            <router-link :class="info ? 'active' : ''" class="menu-item text-decoration-none " to="/editinfo">
                <i class="fa-solid fa-gear"></i>
            </router-link>
        </div>
        <div class="menu-link">
            <a @click="endSession" class="menu-item text-decoration-none cursor-pointer">
                <i class="fa-solid fa-right-from-bracket"></i>
            </a>
        </div>

    </div>

</template>


<style lang="scss" scoped>
.cursor-pointer {
    cursor: pointer;
}

.admin-menu {
    min-height: 100vh;
    width: 80px;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #fff;
}

.menu-item {
    padding: 20px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;

    i {
        font-size: 23px;
    }

    &:not(.active):hover {
        background-color: var(--secondry-clr);
        color: #fff;
    }
}

.menu-item.active {
    background-color: var(--secondry-clr);
    color: #fff;
}
</style>


<script setup>

import logo from "../../assets/images/logo.svg";
import { loginData } from "../SignUp.vue";
import router from "@/router";
</script>

<script>
export default {
    props: {
        medcines: Boolean,
        info: Boolean
    },
    methods: {
        async logout() {
            const header = {
                method: 'post',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + loginData.token,
                },
            };
            const req = await fetch("http://127.0.0.1:8000/api/logout", header);
            const res = req.json();
            return res;
        },
        async endSession() {
            const data = await this.logout();
            if (data.status) {
                localStorage.removeItem("token");
                loginData.token = "";
                loginData.loginStatus = false;
                router.push({ path: '/' })
            }
        }
    },

}

</script>