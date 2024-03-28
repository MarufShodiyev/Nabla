<template>
    <div id="service">
        <div class="container">
            <div class="service-wrapper">
                <ul>
                    <li v-for="(item, index) in info" :key="index">
                        <div class="img12">
                            <img :src="item.img12" alt="img12">
                        </div>
                        <div v-if="index % 2 == 0" class="flex1">
                            <div class="content">
                                <h2>{{ $t(item.text1) }}</h2>
                                <p>{{ $t(item.text2) }}</p>
                            </div>
                            <div class="img">
                                <img :src="item.img11" alt=" img11 ">
                            </div>
                        </div>
                        <div v-else class="flex2">
                            <div class="content">
                                <h2>{{ $t(item.text1) }}</h2>
                                <p>{{ $t(item.text2) }}</p>
                            </div>
                            <div class="img">
                                <img :src="item.img11" alt=" img11 ">
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="end">
                    <div class="img-center">
                        <img :src="img12" alt="img 12">
                    </div>
                    <div class="img">
                        <img :src="img11" alt="img 11">
                    </div>
                    <div class="contend">
                        <h2>{{$t('service.end.title') }}</h2>
                        <p>{{ $t('service.end.subtitle') }}</p>
                        <div class="btn">
                            <button>{{ $t('service.end.btn') }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

import { reactive } from 'vue'
import img11 from '../../assents/images/service-img11.png'
import img12 from '../../assents/images/service-img12.png'
// import img21 from '../../assents/images/service-img21.png'
import img22 from '../../assents/images/service-img22.png'
import img31 from '../../assents/images/service-img31.png'
import img32 from '../../assents/images/service-img32.png'
import img41 from '../../assents/images/service-img41.png'
import img42 from '../../assents/images/service-img42.png'
let info = reactive([

    {
        img11: img11,
        img12: img12,
        text1: "service.card1.title",
        text2: "service.card1.subtitle"
    },
    {
        img11: img41,
        img12: img22,
        text1: "service.card2.title",
        text2: "service.card2.subtitle"
    },
    {
        img11: img31,
        img12: img32,
        text1: "service.card3.title",
        text2: "service.card3.subtitle"
    },
    {
        img11: img41,
        img12: img42,
        text1: "service.card4.title",
        text2: "service.card4.subtitle"
    }
])

</script>