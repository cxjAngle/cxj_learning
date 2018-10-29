<template>
    <div id="headline">
        <div class="headline_cont">

            <div class="headline_tit">
                <icon name="dididi" scale="2.5" class="laba"></icon>学习头条
            </div>

            <div class="scroll-wrap">
                <swiper :options="swiperOption" ref="mySwiper">
                    <!--  -->
                    <swiper-slide v-for="slide in newlist" :key="slide.id">
                        <a class="url" href="javascript:;">{{slide.name}}</a>
                    </swiper-slide>
                </swiper>
            </div>

        </div>
    </div>
</template>
<script>
    import { getHeadline } from "@/services/api/home";
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import "swiper/dist/css/swiper.css";

    export default {
      name: "headline",
      data() {
        return {
          swiperOption: {
            direction: "vertical",
            height: 50,
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: true
            }
          },
          newlist: []
        };
      },
      components: {
        swiper,
        swiperSlide
      },

      created() {
        this.getList();
      },

      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper;
        }
      },

      mounted() {
        // you can use current swiper instance object to do something(swiper methods)
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        this.swiper.slideTo(0, 1000, false);
      },
      methods: {
        getList() {
          getHeadline().then(res => {
            console.log(res);
            this.newlist = res;
            console.log(this.newlist);
          });
        }
      }
    };
</script>
<style scope>
    #headline {
      width: 100%;
      height: 50px;
      background: #fafafa;
    }
    .headline_cont {
      width: 1180px;
      padding-left: 20px;
      margin: 0 auto;
      line-height: 50px;
      font-size: 14px;
      color: #333;
    }
    .headline_tit {
      float: left;
      width: 120px;
      color: #f36f3a;
    }
    .laba {
      position: relative;
      top: 6px;
      left: -8px;
    }
    .scroll-wrap {
      float: left;
      width: 480px;
      height: 50px;
      overflow: hidden;
    }
    .scroll-content {
      position: relative;
      transition: top 0.7s;
    }
    .scroll-content li {
      line-height: 50px;
      text-align: left;
    }
    .url {
      height: 50px;
      display: block;
    }
    .swiper-slide .url {
      height: 100%;
      text-align: left;
    }
    .swiper-slide {
      height: 100%;
    }
</style>
