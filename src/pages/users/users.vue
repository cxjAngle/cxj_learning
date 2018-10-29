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
      <section>
        <div class="mw">
          <LeftNav></LeftNav>
        </div>
      </section>
    </section>

    <!-- home footer -->
    <HomeFooter></HomeFooter>
  </div>
</template>
<script>
  import Homeheader from "@/components/headers/homeHeader.vue";
  import Mainnav from "@/components/navs/MainNav.vue";
  import LeftNav from "@/pages/users/components/LeftNav.vue";
  import HomeFooter from "@/components/footers/HomeFooter.vue";
  export default {
    data() {
      return {

      };
    },
    components: {
      Homeheader,
      Mainnav,
      LeftNav,
      HomeFooter
    },
    methods:{

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
