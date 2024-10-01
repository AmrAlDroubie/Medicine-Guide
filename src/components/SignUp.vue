<template>

    <section class="login">
        <div class="container">
            <div class="row">
                <div class="col-12 form">
                    <form action="#" class="login-form">
                        <input @blur="e => pharmacy_name = e.target.value" :value="this.pharmacy_name"
                            class="form-control mb-3" type="text" name="pharmacy_name" placeholder="اسم الصيدلية">

                        <input @blur="e => this.first_name = e.target.value" :value="first_name"
                            class="form-control mb-3" type="text" name="first_name" placeholder="الإسم الأول">

                        <input @blur="e => this.last_name = e.target.value" :value="this.last_name"
                            class="form-control mb-3" type="text" name="last_name" placeholder="الإسم الاخير">

                        <input @blur="e => this.phone_number = e.target.value" :value="this.phone_number"
                            class="form-control mb-3 phone-number" type="text" name="phone_number"
                            placeholder="رقم الموبايل للمالك">

                        <input @blur="e => this.email = e.target.value" :value="this.email"
                            class="form-control text-start mb-3" type="email" name="email" placeholder="الإيميل">

                        <input @blur="e => this.password = e.target.value" :value="this.password"
                            class="form-control mb-3" type="password" name="password" placeholder="كلمة المرور">
                        <input @blur="e => this.map_url = e.target.value" :value="this.map_url"
                            class="form-control mb-3" type="text" name="map_url"
                            placeholder="رابط موقع الصيدلية على خرائط جوجل">
                        <input @blur="e => this.city = e.target.value" :value="this.city" class="form-control mb-3"
                            type="text" name="city" placeholder="المدينة">
                        <input @blur="e => this.address = e.target.value" :value="this.address"
                            class="form-control mb-3" type="text" name="address" placeholder="العنوان">
                        <button @click="signup" class="btn back-secondry text-white fs-5">
                            إنشاء حساب
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

input.phone-number {
    direction: ltr;
    text-align: right;
}

.login-form .btn {
    &:hover {
        background-color: $primary-clr;
        color: #fff;
    }
}
</style>

<script>
import { reactive } from 'vue';
import { useToast } from 'vue-toast-notification';
import "vue-toast-notification/dist/theme-bootstrap.css";
import { Modal } from 'bootstrap';

export const loginData = reactive({
    checkCount: 0
});
export default {

    data() {
        return {
            pharmacy_name: null,
            first_name: null,
            last_name: null,
            password: null,
            phone_number: null,
            email: null,
            map_url: null,
            city: null,
            address: null,

        }
    },

    methods: {
        inputHandling() {
            let pharmacy = {
                name: this.pharmacy_name,
                first_name: this.first_name,
                last_name: this.last_name,
                password: this.password,
                email: this.email,
                map_url: this.map_url,
                phone_number: this.phone_number,
                city: this.city,
                address: this.address
            };

            return pharmacy;
        },
        async fetchApi() {
            const headers = {
                method: 'post',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(this.inputHandling())
            };
            try {
                const req = await fetch("http://127.0.0.1:8000/api/signup", headers);
                const res = await req.json();
                return res;
            } catch (error) {
                console.log(error);
                return {
                    status: false
                };
            }
        },

        async signup(e) {
            e.preventDefault();
            const response = await this.fetchApi();
            if (response.status == true) {
                localStorage.setItem('token', response.token);
                loginData.loginStatus = true;
                loginData.pharmacy = response.pharmacy;
                loginData.token = localStorage.getItem('token');
                this.showSuccessReg(true);
                this.hideModal();
            } else {
                this.showSuccessReg(false);
            }
        },
        showSuccessReg(status, message) {
            const $toast = useToast();
            if (status) {
                let success = $toast.success("تم تسجيل حسابك بنجاح", {
                    position: 'top-right',
                    duration: 5000,
                    type: "success"
                });
            }
            else {
                let failed = $toast.success("فشل تسجيل الحساب", {
                    position: 'top-right',
                    duration: 5000,
                    type: "error"
                })
            }
        },

        hideModal() {
            const modal = Modal.getInstance(document.getElementById('regModal')); // Bootstrap 5 method
            modal.hide();
        }
    },
    mounted() {
        let inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            input.setAttribute('required', "required")
        });

    },



}

</script>