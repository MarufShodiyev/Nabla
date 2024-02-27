<template>
    <p class="parag-title">{{ Subtitle }}</p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const parag_title = defineProps({
    Subtitle: {
        type: String,
        defult: ""
    }
})
const { Subtitle } = parag_title

</script>
   
<style scoped>
.parag-title {
    color: #6d758d;
    font-size: 18px;
    font-weight: 400;
    max-width: 812px;
}
</style>
  