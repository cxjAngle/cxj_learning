<template>
    <div class="myCourse">
        <top-tab :tabList="tabList">
            <div slot="1"><render1 :level='2'>hello world<p>sdsdsd</p></render1></div>
            <div slot="2">2222</div>
            <div slot="3">3333</div>
        </top-tab>
    </div>
</template>
<script>
    import topTab from "./components/TopTabs.vue";
    import render1 from './components/render.vue'
    export default {
      name: "myCourse",
      props: {},
      data() {
        return {
          tabList: [
            {
              title: "已完成课程",
              name: "1"
            },
            {
              title: "未完成课程",
              name: "2"
            },
            {
              title: "收藏的课程",
              name: "3"
            }
          ]
        }
      },
      components: {
        topTab,
        render1
      },
      methods: {}
    };
</script>
<style>
</style>


