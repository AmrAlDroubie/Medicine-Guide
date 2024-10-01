<template class="back-primary">
    <div class="page">
        <Menu medcines="true" />
        <div class="page-content">
            <div class="d-flex justify-content-between align-items-center pharmacy-header">
                <h3 class="clr-secondry fw-bold fs-5 ps-3">
                    الصيدلي
                    {{ pharmacyInfo.first_name }}
                    {{ pharmacyInfo.last_name }}

                </h3>
                <i class="fas fa-plus fs-5 add-medcine" data-bs-toggle="modal" data-bs-target="#add-medcine-pop"></i>
            </div>

            <div class="medcines-list ps-4 mt-4">
                <div class="row p-0 m-0">
                    <MedcineBox v-for="med in medcines" :id="med.id" :price=Number(med.price) :num="med.quantity"
                        :name="med.med_name" />
                </div>
            </div>
        </div>
    </div>

    <div class="add-medcine-popup">
        <div class="modal fade" tabindex="-1" id="add-medcine-pop">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fw-bold clr-secondry fs-3">اضافة دواء</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="add-medcines-form">
                            <input :value="addMedcineFormData.name"
                                @input="e => addMedcineFormData.name = e.target.value" type="text" required
                                placeholder="اسم الدواء">
                            <input :value="addMedcineFormData.price" type="text"
                                @input="e => addMedcineFormData.price = e.target.value" required placeholder="السعر">
                            <input :value="addMedcineFormData.num" @input="e => addMedcineFormData.num = e.target.value"
                                type="number" min=1 class="text-start" required placeholder="الكمية">
                            <button data-bs-dismiss="modal" data-bs-target="#add-medcine-pop" @click="addMedcine"
                                class="border-0 back-secondry text-white rounded-2 py-2 px-4 fs-5">اضافة</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page {
    width: 100%;
    min-height: 100vh;
    background-color: #f5f8ff;

}

.page-content {
    width: calc(100% - 80px);
    margin-right: 80px;
    height: 100%;

    .pharmacy-header {
        background-color: #fff;
        padding: 18px;
    }

    .add-medcine {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: var(--secondry-clr);
        cursor: pointer;
        border-radius: 5px;
    }
}


.add-medcines-form input {
    width: 100%;
    display: block;
    border: 2px solid #ddd;
    height: 45px;
    border-radius: 10px;
    padding-right: 15px;
    font-size: 19px;
    margin-bottom: 20px;
    transition: 0.5s;

    &:focus {
        outline: none;
        border-color: var(--secondry-clr);
    }
}
</style>


<script setup>
import Menu from "./Menu.vue";
import MedcineBox from "./MedcineBox.vue";
import { loginData } from "../SignUp.vue";


</script>

<script>
export default {
    data() {
        return {
            pharmacyInfo: loginData.pharmacy,
            medcines: [],
            currentMedicines: [],
            addMedcineFormData: {
                name: null,
                price: null,
                num: null,
            }
        }
    },
    methods: {
        async addMedcine() {
            const header = {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + loginData.token,
                },
                body: JSON.stringify({ med_name: this.addMedcineFormData.name, quantity: this.addMedcineFormData.num, price: this.addMedcineFormData.price })
            };
            try {
                const req = await fetch(`http://127.0.0.1:8000/api/${loginData.pharmacy.id}/medicine/add`, header)
                const res = req.json();
                this.medcines.push({ med_name: this.addMedcineFormData.name, quantity: this.addMedcineFormData.num, price: this.addMedcineFormData.price })
                this.addMedcineFormData = {};
                return res;
            } catch (error) {
                console.log(error);
            }
        },


        async fetchMedicines() {
            const header = {
                method: "GET",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + loginData.token,
                },
            };
            try {
                const req = await fetch(`http://127.0.0.1:8000/api/${loginData.pharmacy.id}/medicine`, header)
                const res = req.json();
                return res;
            } catch (e) {
                console.log(e);
                return {
                    status: false
                }
            }

        },
        async handleMedicine() {
            const data = await this.fetchMedicines();
            this.medcines = data;

        }
    },
    async created() {
        await this.handleMedicine();
    }
}
</script>