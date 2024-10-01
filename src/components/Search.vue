<template>
    <section class="search py-3">
        <NavbarSearch />

        <div class="container">
            <div class="row ">
                <div class="col-12 mt-5">
                    <h1 class="text-white fw-bold text-center  ">
                        ابحث عن الدواء<br>
                        الذي تحتاجه
                    </h1>
                    <div class="d-flex  align-items-center justify-content-between search-input ">
                        <input @keyup.enter="{ searching(searchValue); console.log(searchValue) }"
                            @input="e => searchValue = e.target.value" :value="searchValue" class="border-0" type="text"
                            placeholder="اكتب اسم الدواء هنا">
                        <select class="border-0" @change="(e) => { searchCity = e.target.value }">
                            <option value="false">اختر المدينة (اختياري)
                            </option>
                            <option value="حمص">حمص</option>
                            <option value="حلب">حلب</option>
                        </select>
                        <i @click="searching(searchValue)"
                            class="fas input-search-btn fa-search back-secondry text-white"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div v-if="loadingMeds" class="col-12 mt-5">
        <div class="spinner-grow text-primary mx-auto">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <SearchResult v-else :medcines="data" />
    <div v-if="emptySearch && !loadingMeds" class="fs-2 fw-bold text-center my-5">
        عذرا لا يوجد نتائج
    </div>
</template>


<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.search {
    background-image: url("../assets/images/searchBack.png");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 550px;

    select {
        margin-left: 20px;

        &:focus {
            outline: none;
        }
    }
}


h1 {
    line-height: 56px;
    margin: 20px 0;
}

.search-input {
    border-radius: 55px;
    max-width: 600px;
    font-size: 20px;
    margin: 20px auto;
    height: 55px;
    overflow: hidden;
    background-color: #fff;
    padding-left: 10px;

    i {
        width: 75px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        font-size: 21px;
        cursor: pointer;
    }

    input {
        width: 100%;
        height: 100%;
        color: #646464;
        padding-right: 15px;


        &:focus {
            outline: none;
        }
    }

    button {

        &:hover {
            background-color: $secondry-clr;
        }
    }
}
</style>

<script setup>
import NavbarSearch from "./NavbarSearch.vue";
import SearchResult from "./SearchResult.vue"

</script>

<script>

export default {
    data() {
        return {
            data: null,
            searchValue: null,
            searchCity: null,
            emptySearch: false,
            loadingMeds: false,
        }
    },
    components: {
        NavbarSearch,
        SearchResult
    },
    name: "Search",
    methods: {
        async fetchData(searchValue) {
            const header = {
                method: 'get',
                mode: 'cors',
                header: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                }
            };
            const url = this.searchCity && this.searchCity != 'false' ? `${searchValue}/${this.searchCity}` : `${searchValue}`;
            const res = await fetch(`http://127.0.0.1:8000/api/search/${url}`);
            const data = await res.json();
            return data;
        },
        async searching(searchValue) {
            if (!this.searchValue) return;
            this.loadingMeds = true;
            try {
                const meds = await this.fetchData(searchValue);
                this.data = meds.data;
                if (this.data.length == 0) {
                    this.emptySearch = true;
                } else {
                    this.emptySearch = false;
                }
            } catch (e) {
                this.emptySearch = false;
            }
            setTimeout(() => {
                this.loadingMeds = false;
            }, 1000)


        }
    },

}

</script>