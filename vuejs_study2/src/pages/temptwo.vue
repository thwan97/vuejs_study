<template>
    <div id = "temptwo">
        <h1>여기는 temptwo입니다.</h1>
        <p>전달받은 쿼리 : {{two_query}}</p>
    </div>
</template>

<script>
export default {
    name : "temptwo",

    mounted(){
        this.two_query = this.$route.query.temp_query
    },

    data : () => ({
        two_query : "쿼리를 전달받을 변수"
    })
};
</script>