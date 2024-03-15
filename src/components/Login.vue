<template>

    <section class="login">
        <div class="container">
            <div class="row">
                <div class="col-12 form">
                    <form action="#" class="login-form" method="post">
                        <input class="form-control mb-3" type="text" name="id" id=""
                            placeholder="الإيميل او رقم الموبايل">
                        <input class="form-control mb-3" type="password" name="password" id=""
                            placeholder="كلمة المرور">
                        <button class="btn back-secondry text-white fs-5">
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
export default {
    props: ['title'],
    mounted() {
        let inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            input.setAttribute('required', 'required')
        });
    },
}

</script>