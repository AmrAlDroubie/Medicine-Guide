<script setup>
import { loginData } from '../SignUp.vue';
import { useToast } from 'vue-toast-notification';
import "vue-toast-notification/dist/theme-bootstrap.css";
import { Modal } from 'bootstrap';
</script>

<template>
    <div v-if="show" :class="hideClass ? 'hide' : ''" class="col-lg-6 col-12 mb-2 parent-box">
        <div class="medcine-box  d-flex align-items-center">
            <div class="medcine-name">
                {{ medName }}
            </div>
            <div class="medcine-info d-flex align-items-center">
                <span>{{ medPrice }} ل.س</span>
                <span>.</span>
                <span>{{ medQuantity }} قطعة</span>
            </div>
            <div class="edit-btns d-flex">
                <i @click="showModal" class="fas fa-pen"></i>
                <i @click="() => { hideClass = true; deleteMedcine() }" class="fas fa-trash"></i>
            </div>
        </div>
    </div>


    <div class="modal fade" tabindex="-1" :id="`edit-medcine-pop${id}`">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold clr-secondry fs-3">تعديل دواء</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="add-medcines-form">
                        <input :value="medName" @change="e => medName = e.target.value" type="text" required
                            placeholder="اسم الدواء">
                        <input :value="medPrice" type="text" @change="e => medPrice = e.target.value" required
                            placeholder="السعر">
                        <input :value="medQuantity" @change="e => medQuantity = e.target.value" type="number"
                            class="text-start" required placeholder="الكمية">
                        <button data-bs-dismiss="modal" data-bs-target="#add-medcine-pop" @click="updateMedicine"
                            class="border-0 back-secondry text-white rounded-2 py-2 px-4 fs-5">اضافة</button>
                    </div>
                </div>

            </div>
        </div>
    </div>




</template>


<style scoped lang="scss">
.medcine-box {
    border-radius: 10px;
    background: #fff;
    overflow: hidden;
    height: 50px;
    font-size: 20px;

    .medcine-name {
        width: 30%;
        background-color: var(--primary-clr);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border-radius: 10px 0 0 10px;
    }

    .medcine-info {
        justify-content: space-evenly;
        width: 60%;
    }

    .edit-btns {
        i {

            font-size: 18px;
            color: #fff;
            width: 30px;
            height: 30px;
            border-radius: 5px;
            text-align: center;
            line-height: 30px;
            cursor: pointer;
        }

        i:first-of-type {
            background-color: var(--primary-clr);
            margin-left: 5px;
        }

        i:last-of-type {
            background-color: rgb(202, 35, 35);
        }
    }
}

.parent-box {
    transition: 1s;
}

.parent-box.hide {
    opacity: 0;
}

.hide {
    opacity: 0;
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

<script>
export default {
    name: "MedcineBox",
    data() {
        return {
            show: true,
            hideClass: false,
            medID: this.id,
            medName: this.name,
            medPrice: this.price,
            medQuantity: this.num,
            popupId: `edit-medcine-pop${this.id}`
        }
    },
    methods: {
        async deleteMedcine() {

            const header = {
                method: "DELETE",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + loginData.token,
                },
            };
            const req = await fetch(`http://127.0.0.1:8000/api/${loginData.pharmacy.id}/medicine/${this.medID}/delete`, header)
            const res = req.json();

            setTimeout(() => {
                this.show = false
            }, 500)
            return res;
        },

        async updateMedicine() {
            try {
                const header = {
                    method: "PATCH",
                    mode: 'cors',
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + loginData.token,
                    },
                    body: JSON.stringify({ med_name: this.medName, price: this.medPrice, quantity: this.medQuantity })
                };
                const req = await fetch(`http://127.0.0.1:8000/api/${loginData.pharmacy.id}/medicine/${this.medID}/update`, header)
                const res = req.json();
                if (req.status == 200) {
                    const modal = Modal.getInstance(document.getElementById('edit-medcine-pop' + this.medID));
                    modal.hide();
                    this.showSuccessReg(true);
                } else {
                    this.showSuccessReg(false);

                }

            } catch (e) {
                console.log(e);
            }
        },
        showSuccessReg(status, message) {
            const $toast = useToast();
            if (status) {
                let success = $toast.success("تم تحديث البيانات بنجاح", {
                    position: 'top-right',
                    duration: 5000,
                    type: "success"
                });
            }
            else {
                let failed = $toast.success("فشل تحديث البيانات", {
                    position: 'top-right',
                    duration: 5000,
                    type: "error"
                })
            }
        },
        showModal() {
            const editModal = Modal.getOrCreateInstance(document.getElementById("edit-medcine-pop" + this.id));
            editModal.show();
        }


    },
    props: {
        name: String,
        price: Number,
        num: Number,
        id: Number
    }
}
</script>