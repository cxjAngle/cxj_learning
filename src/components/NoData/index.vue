<template>
    <div class="no_data">
        <div class="no_img"></div>
        <div class="no_word">暂无数据！</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.no_data{
    position: absolute;
    top: 50%;
    left: 50%;
}
.no_img{
    background: url(/static/images/wushuju_bg.png) no-repeat;
    width: 127px;
    height: 117px;
}
.no_word{
    width: 130px;
    height: 20px;
    text-align: center;
}
</style>


