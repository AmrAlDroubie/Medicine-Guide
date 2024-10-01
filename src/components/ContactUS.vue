<template>

    <section class="contact-us">

        <div class="d-flex flex-wrap">
            <div
                class="contact-form back-secondry px-sm-5 col-lg-6 col-12 d-flex flex-column  align-items-center justify-content-center">
                <h4 class="fw-bold text-white mb-3 fs-1">
                    تواصل معنا
                </h4>
                <input type="text" placeholder="الإسم">
                <input type="text" placeholder="الإيميل">
                <textarea placeholder="الرسالة"></textarea>
                <button>ارسال</button>

                <router-link id="back-home" to="/" class="text-decoration-none text-white mt-5">
                    عودة إلى الرئيسية
                </router-link>
            </div>

            <div class="contact-image  col-lg-6 col-12 d-lg-flex d-none justify-content-center align-items-center">
                <img :src="contactImage" alt="تواصل معنا">
            </div>
        </div>


    </section>

</template>

<script setup>
import contactImage from "../assets/images/contact.svg"
</script>


<style lang="scss">
.contact-us {
    #back-home {
        position: relative;
        min-width: 117px;

        &::after {
            content: " ";
            height: 2px;
            width: 0px;
            background-color: #fff;
            border-radius: 1px;
            right: 0;
            bottom: -5px;
            position: absolute;
            transition: 0.5s;

        }

        &:hover::after {
            width: 100%;
        }
    }
}

.contact-form {
    >* {
        display: block;
    }

    input,
    textarea {
        display: block;
        height: 45px;
        padding-right: 10px;
        color: #181818;
        border: 1px solid transparent;
        border-radius: 7px;
        width: 70%;
        margin-bottom: 10px;
        box-shadow: 5px 5px 5px rgb(92 92 92 / 43%);
        transition: 0.5s;

        &:focus {
            outline: none;
            box-shadow: 16px 22px 7px var(--primary-clr);
        }
    }

    textarea {
        height: 200px;
        resize: none;
        overflow-y: auto;
        padding-top: 10px;

    }

    button {
        background-color: #fff;
        color: var(--secondry-clr);
        border: 0;
        padding: 12px 35px;
        border-radius: 5px;
        font-size: 20px;
        display: block;
        width: 70%;
        transition: 0.5s;
        box-shadow: 5px 5px 5px rgb(92 92 92 / 43%);

        &:hover {
            background-color: var(--primary-clr);
            color: #fff;
        }
    }

}

.contact-image,
.contact-form {
    min-height: 100vh;
}

.contact-image {
    img {
        width: 100%;
        max-width: 100%;
    }
}
</style>