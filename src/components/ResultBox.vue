<template>
    <a class='result-box mb-3 d-flex align-items-center text-decoration-none' :href="mapUrl">
        <div class='image me-3'>
            <img :src="imgUrl" :alt="pharmacyName">
        </div>
        <div class="text ">
            <span class="clr-secondry">{{ medcineName }}</span>
            <span class="clr-secondry">{{ pharmacyName }}</span>
        </div>
        <div class="icon ms-auto ">
            <i class="fas fa-location-dot text-white back-secondry"></i>
        </div>
    </a>
</template>


<style lang="scss">
.result-box {
    padding: 12px 14px;
    border-radius: 10px;
    font-size: 20px;
    box-shadow: 5px 5px 11px #bababaa1;
    transition: 0.5s;

    &:hover {
        transform: translateY(-10px);
    }

    .image {
        width: 75px;
        height: 75px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;

        }
    }

    .text {
        span {
            display: block;
            margin-bottom: 5px;
        }

        & span:nth-of-type(2) {
            color: #000;
        }

    }

    i {
        height: 40px;
        width: 40px;
        padding: 5px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
    }
}
</style>


<script>

export default {
    data() {
        return {

        }
    },
    props: {
        imgUrl: String,
        medcineName: String,
        pharmacyName: String,
        mapUrl: String
    }
}
</script>