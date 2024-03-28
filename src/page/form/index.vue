<template>
    <div id="form">
        <div class="container">
            <div class="form-wrapper">
                <div class="img">
                    <img src="../../assents/images/about-left.png" alt=" about left img">
                </div>
                <div class="content">
                    <!-- <Title :title="$t('form.title')" />
                    <SubTitle :Subtitle="$t('form.subtitle1')"/> -->
                    <h2>{{ $t('form.title') }}</h2>
                    <p>{{ $t('form.subtitle1') }}</p>
                    <div class="inp-btn">
                        <input type="text" :placeholder="$t('form.placeholder')">
                        <button>{{ $t('form.btn') }}</button>
                    </div>
                    <p>{{ $t('form.subtitle2') }}<span><a href="#">More info</a></span></p>
                </div>
            </div>
        </div>

    </div>
</template>  
<script lang="ts" setup>
   
</script>
 