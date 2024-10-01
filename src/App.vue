<template>
    <router-view />
</template>

<script setup>
import { checkLogin } from './components/checkLogin';
import { loginData } from './components/SignUp.vue';
import router from './router';
</script>


<script>
router.beforeEach(async (to, from, next) => {
    // Token Session
    if (localStorage.getItem('token') && !loginData.loginStatus) {
        if (loginData.checkCount >= 3) {
            localStorage.removeItem('token');
        }
        await checkLogin();
    }

    // Routing
    if (((to.fullPath == '/editinfo' || to.fullPath == '/editmedcines') && !loginData.loginStatus)) {
        next({ fullPath: '/' });
    } else if (to.fullPath == '/admin' && !loginData.admin) {
        next({ fullPath: '/' })
    } else {
        next();
    }
})


</script>