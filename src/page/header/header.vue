<template>
    <div id="header" class="header" :class="{ 'position': menu }">
        <div class="container">
            <div class="header-wrapper">
                <div class="header-left">
                    <h3><a href="#">Nabla</a></h3>
                </div>
                <ul>
                    <li v-for="(value, index) in navs" :key="index">
                        <a :href="value.path">{{ $t(value.text) }}</a>
                    </li>
                </ul>
                <div class="header-right">
                    <div class="dropdown" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-center">
                        <button class="dropbtn" @click="changeOpen">
                            <span class="dropbtn-logo">
                                <img src="../../assents/icons/world.svg" alt="">
                            </span>
                            <div>
                                <span>{{ selected.title }}</span>
                                <img src="../../assents/icons/cherwon-drown.svg" alt="">

                            </div>

                        </button>
                        <ul v-if="open">
                            <li v-for="(value, index) in allLangs" :key="index" @click="changeLang(value)">
                                <p v-if="value.title !== selected.title">{{ value.title }}</p>
                            </li>

                        </ul>
                    </div>

                    <span class="header-toogle" @click="OpenMenu" v-if="!menu">
                        <img src="../../assents/icons/toogle.svg" alt="toogle">
                    </span>
                </div>
                <div class="mobile" :class="{ 'active': menu }" v-if="menu" @click="OpenMenu">
                    <img src="../../assents/icons/close.svg" alt="close">
                </div>
            </div>
        </div>

        <Menu @click="OpenMenu()" :class="{ 'close': !menu }" />
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import Menu from './menu.vue'
import { useI18n } from "vue-i18n"
const { locale } = useI18n({ useScope: "global" });
let navs = reactive([
    {
        text: 'header.home',
        path: '#home'
    },
    {
        text: 'header.vision',
        path: '#vision'
    },
    {
        text: 'header.team',
        path: '#team'
    },
    {
        text: "header.careers",
        path: '#careers'
    },
    {
        text: 'header.blog',
        path: '#blog'
    }
])
interface LangItem {
    title: string;
    short_title: string;
    value: string;
}
const langs = ref<Record<string, LangItem>>({});
const selected = ref<LangItem>({ title: '', short_title: '', value: '' });
const allLangs = reactive<Record<string, LangItem>>({
    rus: {
        title: "Pусский",
        short_title: "Pус",
        value: "ru",
    },
    uzb: {
        title: "O'zbek",
        short_title: "O'z",
        value: "uz",
    },
    eng: {
        title: "English",
        short_title: "Eng",
        value: "en",
    },
});

// onMounted(() => {
//     selected.value = allLangs[localStorage.getItem("lang") || "en"]
//     langs.value = { ...allLangs };
//     console.log(locale, "Ishlayapdi");
// })
const open = ref(false)

const changeOpen = () => {
    open.value = !open.value
    console.log(open.value,'value')
}

const changeLang = (e: LangItem) => {
    selected.value = e
    langs.value = { ...allLangs };
    open.value = false
    localStorage.setItem("lang", e.value)
    locale.value = e.value;
    // console.log(locale);
    console.log(open.value);
    
}


let menu = ref(false)
const OpenMenu = () => {
    menu.value = !menu.value
}

</script>

