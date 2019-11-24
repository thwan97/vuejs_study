<template>
    <div id = "one">
        <h1>페이지 1</h1>
        <button @click="pass_param()"> 파라미터 전달하기 </button>
    </div>
</template>

<script>
export default {
    name : "one",
    methods : {
        pass_param() {
            this.$router.push({
                name : "tempone",
                params : {one_param : "one에서 tempone으로 파라미터 전달"}
            });
        }
    }
};
</script>