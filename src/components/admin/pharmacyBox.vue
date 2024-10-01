<script setup>
import { Modal } from 'bootstrap';
import { adminData } from '../Login.vue';
</script>

<template>
    <div v-if="show" class="pharmacy-box shadow">
        <!-- box -->
        <div class="mb-2">
            <span>
                اسم الصيدلية:
            </span>
            <span>
                {{ name }}
            </span>
        </div>
        <!-- box -->

        <!-- box -->
        <div class="mb-2">
            <span>
                اسم الصيدلي:
            </span>
            <span>
                {{ fullName }}
            </span>
        </div>
        <!-- box -->

        <!-- box -->
        <div class="mb-2">
            <span>
                المدينة:
            </span>
            <span>
                {{ city }}
            </span>
        </div>
        <!-- box -->

        <!-- box -->
        <div class="mb-2">
            <span>
                الايميل:
            </span>
            <span>
                {{ email }}
            </span>
        </div>
        <!-- box -->

        <!-- box -->
        <div class="mb-2">
            <span>
                رقم الموبايل:
            </span>
            <span>
                {{ phone_number }}
            </span>
        </div>
        <!-- box -->

        <!-- box -->
        <div class="mb-2">
            <span>
                العنوان:
            </span>
            <span>
                {{ address }}
            </span>
        </div>
        <!-- box -->

        <!-- box -->
        <div class="mb-2">
            <a :href=map_url target="_blank"> رابط غوغل مابس</a>
        </div>
        <!-- box -->

        <!-- box -->
        <div class="mb-2 d-flex px-3 justify-content-around status-btns">
            <button class=" btn btn-warning text-white" v-if="pharmacyStatus" @click="changeStatus">تعطيل
                الحساب</button>
            <button class="btn btn-success text-white" v-else="pharmacyStatus" @click="changeStatus">تنشيط
                الحساب</button>
            <button @click="showModal" class="btn btn-danger">
                حذف الحساب
            </button>
        </div>
        <!-- box -->
    </div>

    <!-- delete popup -->
    <div class="modal fade" :id="`confirm-modal${this.pharmacyId}`">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <h4 class="text-center fw-bold my-3">
                        هل انت متاكد من حذف الصيدلية?
                    </h4>
                    <div class="d-flex justify-content-around">
                        <button @click="deletePharmacy" class="btn btn-danger">
                            تاكيد الحذف
                        </button>
                        <button @click="closeModal" class="btn btn-success">
                            الغاء
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.pharmacy-box {
    padding: 15px 10px;
    font-size: 18px;
    border-radius: 10px;

    span:first-child {
        color: $secondry-clr
    }

    .status-btns .btn {
        font-weight: 500;
    }
}
</style>

<script>
export default {

    data() {
        return {
            pharmacyStatus: this.status,
            pharmacyId: this.id,
            show: true
        }
    },

    methods: {
        async changeStatus() {
            const headers = {
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + adminData.token,
                },
                body: JSON.stringify({ status: !this.pharmacyStatus })
            };
            try {
                const req = await fetch(`http://127.0.0.1:8000/api/${this.pharmacyId}/editinfo/update`, headers);
                const res = req.json();
                const status = res.then(data => data);
                if (req.status == 200 && status) {
                    this.pharmacyStatus = !this.pharmacyStatus;
                }

                return res;
            } catch (e) {
                console.log(e);
            }
        },

        async deletePharmacy() {
            // http://127.0.0.1:8000/api/id/delete
            const headers = {
                method: 'delete',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + adminData.token,
                },
            };
            try {
                const req = await fetch(`http://127.0.0.1:8000/api/${this.pharmacyId}/delete`, headers);
                const res = req.json();
                if (req.status == 200) {
                    this.show = false;
                    this.closeModal();
                    let newPharmacies = [];
                    adminData.pharmacies.forEach((pharmacy, index) => {
                        if (index != this.index) {
                            newPharmacies.push(adminData.pharmacies[index])
                        }
                    });
                    adminData.pharmacies = newPharmacies;
                }
                return res;
            } catch (e) {
                console.log(e);
            }
        },

        showModal() {
            const modal = Modal.getOrCreateInstance(document.getElementById("confirm-modal" + this.pharmacyId));
            modal.show();
        },

        closeModal() {
            const modal = Modal.getInstance(document.getElementById("confirm-modal" + this.pharmacyId));
            modal.hide();
        },
    },

    props: {
        id: Number,
        name: String,
        fullName: String,
        status: Boolean,
        city: String,
        email: String,
        phone_number: String,
        address: String,
        map_url: String,
        index: Number
    },

}
</script>