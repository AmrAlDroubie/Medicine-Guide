<template>
    <Navbar />
    <Landing />


    <!-- what IS -->
    <section class="what-is mb-3">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-lg-6">
                    <h1 class="clr-secondry mb-3 fs-1 fw-bold ">ما هو دليلك الدوائي؟</h1>
                    <p>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،
                        حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                        التطبيق.
                    </p>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="what-is-image">
                        <img :src="whatIsImage" alt="ما هو دليلك الدوائي">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="back-secondry py-3 text-white text-center fs-5 mt-5">
        <div class="container">
            جميع الحقوق محفوظة
            <i class="fas fa-copyright"></i>
            ل دليلك الدوائي
        </div>
    </footer>

</template>


<script setup>
import whatIsImage from "../assets/images/what-is-image.jpg"



</script>



<script>
import Navbar from "./Navbar.vue"
import Landing from "./Landing.vue"
export default {
    name: "Home",
    data() {
        return {
        }
    },
    components: {
        Navbar,
        Landing,
    },

    methods: {

    },

    mounted() {

    }
}
</script>


<style lang="scss">
.what-is {
    p {
        font-size: 20px;
        line-height: 40px;
        color: #8c8c8c;

        @media (min-width:700px) {
            max-width: 600px;
        }
    }
}

.what-is-image {

    img {
        max-width: 100%;
        border-radius: 10px;
    }
}
</style>