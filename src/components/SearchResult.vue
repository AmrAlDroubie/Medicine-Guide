<template>

    <section class="search-result my-5">
        <div class="container">
            <div class="row">

                <div v-for="med in medcines" class="col-12 col-md-4 col-sm-6">
                    <ResultBox :mapIframe="med.map_iframe" :quantity="med.quantity" :medcineName="med.med_name"
                        :pharmacyName="med.name" :mapUrl="med.map_url" :imgUrl="img" :price="med.price"
                        :address="med.address" />
                </div>


            </div>
        </div>
    </section>

</template>

<style>
.spinner-grow {
    width: 130px;
    height: 130px;
    display: block;
}
</style>


<script setup>
import ResultBox from './ResultBox.vue';
import img from "../assets/images/medcine.png"

</script>

<script>
export default {
    name: "SearchResult",
    components: ResultBox,
    props: {
        medcines: Array
    },

}
</script>