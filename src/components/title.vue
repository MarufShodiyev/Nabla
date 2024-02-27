<template>
    <h2 class="page_title">{{ title }}</h2>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const subtitle = defineProps({
    title: {
        type: String,
        defult: ""
    }
})
const { title } = subtitle

</script>
   
<style scoped>
.page_title {
    color: #040062;
    line-height: 60px;
    font-size: 48px;
    font-weight: 900;
    max-width: 812px;
    
}
</style>
  