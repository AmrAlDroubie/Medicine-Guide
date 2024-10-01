<script setup>
import { loginData } from './SignUp.vue';
import { useToast } from 'vue-toast-notification';
import "vue-toast-notification/dist/theme-bootstrap.css";
import { Modal } from 'bootstrap';
import router from '@/router';
import { reactive } from 'vue';
</script>

<template>

    <section class="login">
        <div class="container">
            <div class="row">
                <div class="col-12 form">
                    <form action="#" class="login-form" method="post">
                        <input @change="(e) => email = e.target.value" class="form-control mb-3" type="text" name="id"
                            placeholder="الإيميل" required>
                        <input @change="(e) => password = e.target.value" class="form-control mb-3" type="password"
                            name="password" required placeholder="كلمة المرور">
                        <div>
                            <input @change="adminLoginStatus = !adminLoginStatus" class="form-check-input mb-3"
                                id="admin-check" type="checkbox">
                            <label class="form-check-label ms-2" for="admin-check">
                                مسؤول المنصة
                            </label>
                        </div>
                        <button @click="auth" class="btn back-secondry text-white fs-5">
                            تسجيل دخول
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss">
@import "../assets/scss/variables.scss";

.login-form {
    input {
        font-size: 18px;
    }
}

.login-form .btn {
    &:hover {
        background-color: $primary-clr;
        color: #fff;
    }
}
</style>


<script>
export const adminData = reactive({});

export default {
    props: ['title'],
    data() {
        return {
            email: null,
            password: null,
            adminLoginStatus: false
        }
    },
    methods: {
        async login(e) {
            const headers = {
                method: 'post',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ email: this.email, password: this.password })
            };
            const req = await fetch("http://127.0.0.1:8000/api/login", headers);
            const res = req.json();
            return res;

        },
        async auth(e) {
            e.preventDefault();
            e.target.parentNode.checkValidity();
            if (this.adminLoginStatus) { this.adminLogin() }
            else
                if (this.email && this.password) {
                    try {
                        const data = await this.login();
                        if (data.status) {
                            loginData.loginStatus = data.status;
                            loginData.pharmacy = data.pharmacy;
                            loginData.token = data.token;
                            localStorage.setItem('token', data.token);
                            this.hideModal();
                            this.showSuccessReg(true);
                        } else {
                            this.showSuccessReg(false);
                        }
                    } catch (error) {
                        console.log(error);
                        this.showSuccessReg(false);
                    }

                }
        },
        hideModal() {
            const modal = Modal.getInstance(document.getElementById('regModal'));
            modal.hide();
        },
        showSuccessReg(status, message) {
            const $toast = useToast();
            if (status) {
                let success = $toast.success("تم تسجيل الدخول بنجاح", {
                    position: 'bottom-right',
                    duration: 5000,
                    type: "success"
                });
            }
            else {
                let failed = $toast.success("فشل تسجيل الدخول", {
                    position: 'bottom-right',
                    duration: 5000,
                    type: "error"
                })
            }
        },

        async adminLogin() {
            const header = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ email: this.email, password: this.password })
            };
            try {
                const req = await fetch("http://127.0.0.1:8000/api/login/admin", header);
                const res = await req.json();
                if (req.status == 200 && res.status) {
                    this.hideModal();
                    loginData.admin = true;
                    adminData.token = res.token;
                    adminData.pharmacies = res.pharmacies;
                    router.push({ path: '/admin' })
                } else {
                    this.showSuccessReg(false);
                }
            } catch (e) {
                console.log(e);
                this.showSuccessReg(false);
            }
        }

    },


}

</script>