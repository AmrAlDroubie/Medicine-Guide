<script setup>
import landingImage from "../assets/images/landing.svg";

</script>


<template>
    <section class="landing py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12 mb-5">
                    <div class="landing-text text-lg-start text-center">
                        <h1 class="fw-bold  clr-secondry fs-1 mb-2  lh-med">
                            أوجد دوائك حينما تحتاجه
                            نحن هنا لمساعدتك
                        </h1>
                        <p class="light-text lh-lg fs-5">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                            التى يولدها التطبيق.
                        </p>
                        <router-link
                            class=" primary-transition d-inline-block mt-2 text-decoration-none py-3 px-5 rounded-2 text-white back-primary "
                            to="/search">ابحث عن
                            دواءك</router-link>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="landing-image text-center d-flex justify-content-lg-end mb-5">
                        <img :src="landingImage" class=" up-down-animation" alt="Medcine Guide" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<style>
.landing-text a {
    font-size: 20px;
}

.landing-text a:hover {
    background-color: var(--secondry-clr);
}

.landing-image img {
    max-width: 100%;
}
</style>