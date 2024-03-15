<template>

    <section class="login">
        <div class="container">
            <div class="row">
                <div class="col-12 form">
                    <form action="#" class="login-form" method="post">
                        <input class="form-control mb-3" type="text" name="pharmacy_name" placeholder="اسم الصيدلية">
                        <input class="form-control mb-3" type="text" name="first_name" placeholder="الإسم الأول">
                        <input class="form-control mb-3" type="text" name="last_name" placeholder="الإسم الاخير">
                        <input class="form-control mb-3" type="text" name="phone_number"
                            placeholder="رقم الموبايل للمالك">
                        <input class="form-control text-start mb-3" type="email" name="email" placeholder="الإيميل">
                        <input class="form-control mb-3" type="password" name="password" placeholder="كلمة المرور">
                        <input class="form-control mb-3" type="text" name="password"
                            placeholder="رابط موقع الصيدلية على خرائط جوجل">
                        <button class="btn back-secondry text-white fs-5">
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

.login-form .btn {
    &:hover {
        background-color: $primary-clr;
        color: #fff;
    }
}
</style>

<script>
export default {
    data() {
        return {
            name: "amraldroubie"
        }
    },
    methods: {

    },
    mounted() {
        let inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            input.setAttribute('required', "required")
        });
    },
}

</script>