<template>

    <section class="search-result my-5">
        <div class="container">
            <div class="row">
                <div v-for="med in medcines" class="col-12 col-md-4 col-sm-6">
                    <ResultBox :imgUrl="med.imgUrl" :medcineName="med.medcine" :pharmacyName="med.pharmacy"
                        :mapUrl="med.mapUrl" />
                </div>
            </div>
        </div>
    </section>

</template>

<style></style>


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
    }
}
</script>