<template>
    <a href="javascript:void(0);">
        <span class="user-circle" v-if="!userImg" v-text="firstName"></span>
        <img class="user-img" v-if="userImg" :src="userImg | img" />
        <span class="user-name" v-text="userName"></span>
    </a>
</template>
<script>
    import { img } from "@/filters";
    export default {
      props: ["userImg", "userName"],
      computed:{
          firstName(){
              return this.userName ? this.userName.substring(0, 1) : "";
          }
      },
      filters: {
        img
      }
    };
</script>
<style lang="scss" scoped>
    .user-circle {
        display: inline-block;
        height: 22px;
        width: 22px;
        line-height: 22px;
        border-radius: 50%;
        background: red;
        vertical-align: middle;
    }
    .user-img {
        height: 22px;
        width: 22px; 
        border-radius: 22px;
        vertical-align: middle;
    }
    .user-name {

    }
</style>
