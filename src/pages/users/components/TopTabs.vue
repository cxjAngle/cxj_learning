<template>
    <el-tabs v-model="TabsValue" @tab-click="handleClick" class="UserTabs">
        <el-tab-pane :key="item.name" v-for="(item, index) in tabList" :label="item.title" :name="item.name">
            <slot :name="item.name"></slot>
        </el-tab-pane>
    </el-tabs>
</template>


<script>
    export default {
      props: {
        tabList: Array,
        
      },
      data() {
        return {
          TabsValue: "1",
          // tabIndex: 2
        };
      },
      methods: {
        handleClick(tab, event) {
          // console.log(tab, event);
          this.$emit("change",tab.index)
        }
      }
    };
</script>
<style>
    .UserTabs.el-tabs.el-tabs--top{
        text-align: left;
        height: 720px;
    }
</style>
