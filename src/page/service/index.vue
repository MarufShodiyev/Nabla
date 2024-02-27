<template>
    <div id="service">
        <div class="container">
            <div class="service-wrapper">
                <ul>
                    <li v-for="(value, index) in info" :key="index">
                        <div class="img12">
                            <img :src="value.img12" alt="img12">
                        </div>
                        <div v-if="index % 2 == 0" class="flex1">

                            <div class="content">
                                <Title :title="value.title" />
                                <SubTitle :Subtitle="value.subtitle" />
                            </div>
                            <div class="img">
                                <img :src="value.img11" alt=" img11 ">
                            </div>
                        </div>
                        <div v-else class="flex2">
                            <div class="content">
                                <Title :title="value.title" />
                                <SubTitle :Subtitle="value.subtitle" />
                            </div>
                            <div class="img">
                                <img :src="value.img11" alt=" img11 ">
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
                        <Title title="Toward precision health" />
                        <SubTitle
                            Subtitle="The combination of biological, genetic, phenotypic and environmental data together with AI will unlock our ability to predict, prevent and cure disease more precisely, empowering people to lead healthier lives." />

                        <div class="btn">
                            <button>Get early access</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Title from '../../components/title.vue'
import SubTitle from '../../components/parag.vue'
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
        title: 'In sickness and in health',
        subtitle: 'Whether you have a little scratch, something you’re worried about, an ambitious health goal or you just want to stay healthy, your care team is here every day.'
    },
    {
        img11: img41,
        img12: img22,
        title: 'In sickness and in health',
        subtitle: 'Whether you have a little scratch, something you’re worried about, an ambitious health goal or you just want to stay healthy, your care team is here every day.'
    },
    {
        img11: img31,
        img12: img32,
        title: 'In sickness and in health',
        subtitle: 'Whether you have a little scratch, something you’re worried about, an ambitious health goal or you just want to stay healthy, your care team is here every day.'
    },
    {
        img11: img41,
        img12: img42,
        title: 'In sickness and in health',
        subtitle: 'Whether you have a little scratch, something you’re worried about, an ambitious health goal or you just want to stay healthy, your care team is here every day.'
    },
])

</script>