<template>
    <div id = "tempcom">
        <!--<h1>여기는 component1 입니다.</h1>-->
        <h1>여기는 Header</h1>
        <router-link to = "/"> Home </router-link>
        <router-link to = "/one"> One </router-link>
        <router-link to = "/two"> Two </router-link>
        <router-link to = "/three"> Three </router-link>
    </div>
</template>

<script>
export default {
    name : "tempcom",
    data(){
        return {};
    }
};
</script>