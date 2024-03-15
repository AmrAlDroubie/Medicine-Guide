<script setup>
import { reg } from "./Navbar.vue"

</script>
<template>

    <div class="modal fade" tabindex="-1" id="regModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header d-block p-0 overflow-hidden">
                    <div class="d-flex align-items-center text-center overflow-hidden ">
                        <span :class="reg.login ? 'active' : ''" @click="reg.login = true">تسجيل دخول </span>
                        <span :class="!reg.login ? 'active' : ''" @click="reg.login = false">إنشاء حساب</span>
                    </div>
                </div>
                <div class="modal-body">
                    <Login v-if="reg.login" />
                    <SignUp v-else />

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.d-flex span {
    background-color: $secondry-clr;
    font-size: 20px;
    color: #fff;
    padding: 14px;
    display: block;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: $primary-clr;
    }
}

.d-flex span.active {
    background-color: $primary-clr;
}
</style>

<script>
import Login from './Login.vue';
import SignUp from './SignUp.vue';
import { Modal } from 'bootstrap';
export default {
    data() {
        return {

        }
    },
    // props: {
    //     login: Boolean,

    // },
    components: {
        Login,
        SignUp
    },
    methods: {

    }
}

</script>