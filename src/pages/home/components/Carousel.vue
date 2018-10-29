<template>

  <div class="carousel">
    <el-carousel>
      <el-carousel-item v-for="item in sliderList" :key="item.id">
        <img :src="item.pictureUrl | img" alt="">
        <!-- <div class="car-bg" :style="{ backgroundImage: 'url('+ item.pictureUrl) +'}"></div> -->
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
  import Vue from "vue";
  import { Carousel } from "element-ui";
  import { getRollingPicture } from '@/services/api/home' ;
  import { img } from "@/filters";
  Vue.use(Carousel);
  export default {
    name: "carousel",
    props: [],
    mounted() {},
    data() {
      return {
        sliderList:[]
      };
    },
    filters: {
       img
    },
    computed: {},
    created(){
      this.getList();
    },
    methods: {
      getList(){
         getRollingPicture().then(res => {
              this.sliderList = res;
          }).catch(error => {
              console.log(error);
          });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .carousel {
    width: $carousel_width;
    height: 380px;
    /* position: absolute; */
    right: 0;
    top: 50px;
  }
</style>
<style rel="stylesheet/scss" lang="scss">
  .el-carousel__container {
    height: 380px;
  }
  .el-carousel__arrow--left {
    left: 246px;
  }
  .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 15px;
  }
  .el-carousel__item {
    img {
      width: 968px;
      height: 380px;
      width: 100%;
    }
  }

  .el-carousel__indicator {
    button {
      opacity: 1;
    }
    &.is-active {
      button {
        width: 30px;
        background-color: #f36f3a !important;
      }
    }
  }
</style>
