<template>
    <Navbar />
    <div class="container">
        <div class="row">
            <h1 v-if="adminData.pharmacies.length == 0" class="text-center fw-bold my-5 text-primary">لا يوجد
                صيدليات
            </h1>
            <div v-else v-for="(pharmacy, index) in adminData.pharmacies" class="col-12 col-md-3 col-lg-4 my-3">
                <pharmacyBox :index="index" :id="pharmacy.id" :map_url="pharmacy.map_url" :name="pharmacy.name"
                    :fullName="pharmacy.full_name" :status="pharmacy.status" :city="pharmacy.city"
                    :email="pharmacy.email" :phone_number="pharmacy.phone_number" :address="pharmacy.address" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { adminData } from '../Login.vue';
import pharmacyBox from './pharmacyBox.vue';
import Navbar from '../Navbar.vue';
</script>

<script>

export default {
    data() {
        return {
            data: adminData
        }
    },


}
</script>