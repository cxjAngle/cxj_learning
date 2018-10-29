<template>
    <div class="page-wrap">
        <!-- home header -->
        <Homeheader></Homeheader>

        <section class="content-wrap">
          <header class="header-nav-wrap">
                <div class="mw">
                    <Mainnav></Mainnav>
                </div>
          </header>
          <!--<div style="width: 100px; height: 100px;">-->
            <!--<router-link to="/course/courseLearning">课程列表</router-link>-->
          <!--</div>-->
          <section class="list_wrap">
            <div class="mw">
              <CourseList></CourseList>
            </div>
          </section>
        </section>
        <!-- <section>
            price:{{price}}
            <currency-input v-model="price"></currency-input>

        </section> -->
        <!-- home footer -->
        <HomeFooter></HomeFooter>
    </div>
</template>
<script>
    import Homeheader from "@/components/headers/homeHeader.vue";
    import HomeFooter from "@/components/footers/HomeFooter.vue";
    import Mainnav from "@/components/navs/MainNav.vue";
    import CourseList from "@/pages/online_course/courseList.vue";

    var CurrencyInput = {
      template:
        '\
                <span>\
                $\
                <input\
                    ref="input"\
                    v-bind:value="value"\
                    v-on:input="updateValue($event)"\
                >\
                </span>\
            ',
      props: ["value"],
      methods: {
        // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
        updateValue: function($event) {
          console.log($event);
          var value = $event.target.value;
          var formattedValue = value
            // 删除两侧的空格符
            .trim()
            // 保留 2 位小数
            .slice(
              0,
              value.indexOf(".") === -1 ? value.length : value.indexOf(".") + 3
            );
          // 如果值尚不合规，则手动覆盖为合规的值
          if (formattedValue !== value) {
            this.$refs.input.value = formattedValue;
          }
          // 通过 input 事件带出数值
          this.$emit("input1", Number(formattedValue));
        }
      }
    };
    export default {
      data() {
        return {
          price: "0"
        };
      },
      components: {
        Mainnav,
        Homeheader,
        HomeFooter,
        "currency-input": CurrencyInput,
        CourseList,
        HomeFooter
      },
      methods:{
          /*goDetail(){
              this.$router.push( {path: '/course/courseLearning'} );
          }*/
      }
    };
</script>
<style lang="scss" scoped>
    .content-wrap {
      height: 100%;
    }
    .list_wrap{
      height: 100%;
    }
    .header-nav-wrap {
      background-color: #4f5861;
    }
</style>
