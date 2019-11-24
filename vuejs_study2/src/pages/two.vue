<template>
    <div id = "two">
        <h1>페이지 2</h1>
        <router-link to = "/two/temptwo?temp_query=1"> temptwo로 쿼리 보내기 </router-link>
    </div>
</template>

<script>
export default {
    name : "two"
};
</script>