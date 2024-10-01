<template>


    <a class='result-box mb-3  text-decoration-none' :href="mapUrl" target="_blank">
        <div class="iframe-box" v-html="mapIframe"></div>
        <div class="text">
            <div class='my-2'>
                <span class="clr-secondry">
                    اسم الدواء:
                </span>
                <span class="clr-black">
                    {{ medcineName }}
                </span>
            </div>
            <div class="my-2">
                <span class="clr-secondry">
                    اسم الصيدلية:
                </span>
                <span class="clr-black">
                    {{ pharmacyName }}
                </span>
            </div>
            <div class="my-2">
                <span id="quantity" class="clr-secondry">
                    الكمية:
                </span>
                <span>
                    {{ quantity }}
                </span>
            </div>
            <div class='my-2'>
                <span class="clr-secondry">
                    السعر :
                </span>
                <span class="clr-black">
                    {{ price }}
                </span>
            </div>
            <div class='my-2'>
                <span class="clr-secondry">
                    العنوان :
                </span>
                <span class="clr-black">
                    {{ address }}
                </span>
            </div>
        </div>

        <div class="icon ms-auto d-flex align-items-center justify-content-center py-1">
            <span class="">
                الموقع على الخريطة
            </span>
            <i class="fas fa-location-dot text-white back-secondry d-block ms-1"></i>
        </div>
    </a>
</template>


<style lang="scss">
@import "../assets/scss/variables.scss";

.clr-black {
    color: $black-clr;
}

.result-box {
    padding: 12px 14px;
    border-radius: 10px;
    font-size: 20px;
    box-shadow: 5px 5px 11px #bababaa1;
    transition: 0.5s;
    position: relative;
    display: block;

    &:hover {
        transform: translateY(-10px);
    }

    .iframe-box {
        max-width: 100%;

        iframe {
            width: 100%;
            max-width: 100%;
            height: 250px;
        }
    }

    .image {
        width: 100%;
        height: 250px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
            aspect-ratio: 3/2;
        }
    }

    .text {
        span {
            margin-bottom: 5px;
        }

        & span:nth-of-type(2) {
            color: #000;
        }

    }





    .icon {
        border-radius: 8px;
        background-color: $secondry-clr;
        color: #fff;
        text-align: center;
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
        mapUrl: String,
        mapIframe: String,
        quantity: Number,
        price: Number,
        address: String
    }
}
</script>