<template>
  <div class="content-wrap">
    <!--<el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">-->
      <!--<el-radio-button label="top">top</el-radio-button>-->
      <!--<el-radio-button label="right">right</el-radio-button>-->
      <!--<el-radio-button label="bottom">bottom</el-radio-button>-->
      <!--<el-radio-button label="left">left</el-radio-button>-->
    <!--</el-radio-group>-->

    <el-tabs type="border-card"  :tab-position="tabPosition" class="user-el-tabs">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-tickets"></i> 我的资料</span>
          <my-info></my-info>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的学习地图</span>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的课程</span>
        <my-course></my-course>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-edit"></i> 我的考试</span>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的资讯</span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import myInfo from "@/pages/users/myInfo.vue";
import myCourse from "@/pages/users/myCourse.vue"

  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    },
    methods: {

    },
    components:{
      myInfo,
      myCourse
    }
  };
</script>
<style scoped>
  .content-wrap{
    margin-top: 15px;
    margin-bottom: 15px;
    height: 800px;
  }
  .content-wrap .el-tabs{
    height: 800px;
  }
</style>
<style>
  .user-el-tabs.el-tabs--left.el-tabs--border-card .el-tabs__header.is-left {
    width: 200px;
    margin-right:0px;
  }
  .user-el-tabs.el-tabs--left.el-tabs--border-card .el-tabs__header.is-left .el-tabs__item.is-left{
     text-align:left;
  }
</style>

