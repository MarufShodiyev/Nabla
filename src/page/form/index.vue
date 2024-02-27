<template>
    <div id="form">
        <div class="container">
            <div class="form-wrapper">
                <div class="img">
                    <img src="../../assents/images/about-left.png" alt=" about left img">
                </div>
                <div class="content">
                    <Title title="Newsletter" />
                    <SubTitle
                        Subtitle="Get the latest news from Nabla on health and artificial intelligence, straight to your inbox." />
                    <div class="inp-btn">
                        <input type="text" placeholder="Enter your email adress">
                        <button>Submit</button>
                    </div>
                    <p>Nabla uses your email address to send you the newsletter.<span><a href="#">More info</a></span></p>
                </div>
            </div>
        </div>

    </div>
</template>  
<script lang="ts" setup>
import Title from '../../components/title.vue'
import SubTitle from '../../components/parag.vue'
</script>
