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
                        <input @input="e => searchValue = e.target.value" :value="searchValue" class="border-0"
                            type="text" placeholder="اكتب اسم الدواء هنا">

                        <i @click="searching(searchValue)"
                            class="fas input-search-btn fa-search back-secondry text-white"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <SearchResult :medcines="data" />
    <!-- <div v-for="item in data">
        {{ item.medcine }}
        {{ item.pharmacy }}
        {{ item.imgUrl }}
        {{ item.mapUrl }}
    </div> -->
</template>


<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.search {
    background-image: url("../assets/images/searchBack.png");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 550px;
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
        }
    },
    components: {
        NavbarSearch,
        SearchResult
    },
    name: "Search",
    methods: {
        async fetchData(searchValue) {
            const res = await fetch(`http://localhost:3000/${searchValue}`);
            const data = await res.json();
            return data;
        },
        async searching(searchValue) {
            const meds = await this.fetchData(searchValue);
            this.data = meds;

        }
    },
    // async created() {
    //     this.data = await this.fetchData();
    //     console.log(this.data);
    // }
}

</script>