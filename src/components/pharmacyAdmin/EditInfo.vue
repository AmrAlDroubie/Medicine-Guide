<template>
    <div class="page">
        <Menu info="true" />
        <div class="page-content">
            <h2 class="ms-3 pt-4 clr-primary fw-bold ">
                تعديل بياناتك
            </h2>
            <!-- <h5 class="ms-3 pt-4">
                ملاحظة: لن يتم نشر المعلومات الجديدة قبل قبولها من قبل المسؤول عن المنصة
            </h5> -->
            <div class="row m-0 p-0 pt-5 ">
                <!-- box -->
                <div class="col-12 col-lg-4 col-md-6 edit-info-box mb-3">
                    <div>
                        <input @change="(e) => updatedData.name = e.target.value" name="name" type="text"
                            :value="data.pharmacy.name" placeholder="اسم الصيدلية">
                    </div>
                </div>
                <!-- box -->
                <div class="col-12 col-lg-4 col-md-6 edit-info-box mb-3">
                    <div>
                        <input @change="(e) => updatedData.first_name = e.target.value" name="first_name" type="text"
                            :value="data.pharmacy.first_name" placeholder="الإسم الأول للمالك">
                    </div>
                </div>
                <!-- box -->
                <div class="col-12 col-lg-4 col-md-6 edit-info-box mb-3">
                    <div>
                        <input @change="(e) => updatedData.last_name = e.target.value" name="last_name" type="text"
                            :value="data.pharmacy.last_name" placeholder="الإسم الأخير للمالك">
                    </div>
                </div>
                <!-- box -->
                <div class="col-12 col-lg-4 col-md-6 edit-info-box mb-3">
                    <div>
                        <input @change="(e) => updatedData.phone_number = e.target.value" name="phone_number"
                            type="text" :value="data.pharmacy.phone_number" placeholder="رقم الموبايل">
                    </div>
                </div>


                <!-- box -->
                <div class="col-12 col-lg-4 col-md-6  edit-info-box mb-3">
                    <div>
                        <input @change="(e) => updatedData.email = e.target.value" name="email" type="email"
                            :value="data.pharmacy.email" class="text-start" placeholder="الإيميل">
                    </div>
                </div>

                <!-- box -->
                <div class="col-12 col-lg-4 col-md-6  edit-info-box mb-3">
                    <div>
                        <input @change="(e) => updatedData.map_url = e.target.value" name="map_url" type="text"
                            :value="data.pharmacy.map_url" placeholder="رابط الموقع على خرائط غوغل">
                    </div>
                </div>

                <!-- box -->
                <div class="col-12 col-lg-4 col-md-6  edit-info-box mb-3">
                    <div>
                        <input @change="(e) => updatedData.city = e.target.value" name="city" type="text"
                            :value="data.pharmacy.city" placeholder="المدينة">
                    </div>
                </div>

                <!-- box -->
                <div class="col-12 col-lg-4 col-md-6  edit-info-box mb-3">
                    <div>
                        <input @change="(e) => updatedData.address = e.target.value" name="address" type="text"
                            :value="data.pharmacy.address" placeholder="العنوان">
                    </div>
                </div>


                <!-- box -->
                <div class="col-12 col-lg-4 col-md-6  edit-info-box mb-3">
                    <div>
                        <input @change="(e) => updatedData.map_iframe = e.target.value" name="map_iframe" type="text"
                            :value="data.pharmacy.map_iframe" placeholder="تضمين الخريطة (iframe)">
                    </div>
                </div>

                <!-- box -->
                <div class="col-12 col-lg-4 col-md-6  edit-info-box mb-3">
                    <div>
                        <input disabled type="text" :value="data.pharmacy.status == 1 ? 'موثق' : 'غير موثق'"
                            placeholder="حالة الحساب">
                    </div>
                </div>

                <div class="col-12 my-3">
                    <button @click="updateData"
                        class="save-info text-white back-secondry fs-4 rounded-3 d-block w-100 border-0 py-1">
                        حفظ التغييرات
                    </button>
                </div>

                <div class="col-12 my-3">
                    <button @click="deleteAccount"
                        class="save-info text-white btn btn-danger  fs-4 rounded-3 d-block w-100 border-0 py-1">
                        حذف الحساب
                    </button>
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

    h3 {
        background-color: #fff;
        padding: 18px;
    }
}

.row {
    @media (min-width:992px) {}
}

.edit-info-box {
    input {
        display: block;
        width: 100%;
        height: 35px;
        border: 2px solid transparent;
        padding-right: 15px;
        border-radius: 8px;
        font-size: 19px;

        &:focus {
            outline: none;
            border-color: var(--secondry-clr);
        }
    }
}

.save-info {
    transition: 0.5s;

    &:hover {
        background-color: var(--primary-clr);
    }
}
</style>

<script setup>
import Menu from './Menu.vue';
import { loginData } from '../SignUp.vue';
import { useToast } from 'vue-toast-notification';
import "vue-toast-notification/dist/theme-bootstrap.css";
</script>


<script>
// console.log(loginData);
export default {
    data() {
        return {
            data: loginData,
            updatedData: {},
        }
    },

    methods: {
        async updateData() {
            const header = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + this.data.token,
                },
                body: JSON.stringify(this.updatedData)
            };
            try {
                const req = await fetch(`http://127.0.0.1:8000/api/${this.data.pharmacy.id}/editinfo/update`, header);
                const res = req.json();
                this.showSuccessReg(true);
                console.log(res);
            } catch (e) {
                console.log(e);
                this.showSuccessReg(false);
            }
        },
        showSuccessReg(status, message) {
            const $toast = useToast();
            if (status) {
                let success = $toast.success("تم حفظ البيانات بنجاح", {
                    position: 'top-right',
                    duration: 5000,
                    type: "success"
                });
            }
            else {
                let failed = $toast.success("فشل تسجيل البيانات", {
                    position: 'top-right',
                    duration: 5000,
                    type: "error"
                })
            }
        }
    }
}

</script>