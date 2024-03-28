<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="header-menu">
         <ul>
           <li v-for="(value,index) in navs" :key="index">
            <a :href="value.path">{{ value.text }}</a>
          </li>    
         </ul>
    </div>
</template>


<script setup lang="ts">
import { reactive } from 'vue';

let navs=reactive([
    {
        text:'Home',
        path:'#home'
    },
    {
        text:'Vision',
        path:'#vision'
    },
    {
        text:'Team',
        path:'#team'
    },
    {
        text:"Careers",
        path:'#careers'
    },
    {
        text:'Blog',
        path:'#blog'
    }
])
</script>
