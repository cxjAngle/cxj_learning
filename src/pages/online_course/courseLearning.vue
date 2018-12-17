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
      <section class="top-wrap">
        <div class="play-view">
          <!-- 视频 -->
          <div class="" >

          </div>
          <!-- 图片 -->
          <div class="">
            
          </div>
        </div>
      </section>
      <!-- 课程和讲师、评论和章节 -->
      <section class="bottom-wrap">
        <div class="course-description">
          <div class="course-title">课程简介</div>
          <div class="course-content">{{courseDetail.courseIntroduction}}</div>
        </div>
        <div class="lecturer-description">
          <div class="lecturer-title">讲师简介</div>
          <div class="lecturer-img"></div>
          <div class="lecturer-content">
            
          </div>
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
  import HomeFooter from "@/components/footers/HomeFooter.vue";
  import {getOnlineCourseDetail, getSectionList, getTeacherDetails} from "@/services/api/courseList.js";
  export default {
    data() {
      return {
        courseDetail:[],
        lecturerId:''
      };
    },
    components: {
      Mainnav,
      Homeheader,
      HomeFooter
    },
    created(){
      this.getData();
      this.getTeacher();
    },
    mounted() {
        
    },
    methods:{
      getData(){
        const data = {courseId:this.$route.params.id};
        getOnlineCourseDetail(data).then(res=>{
          this.courseDetail = res.data[0];
          this.lecturerId = this.courseDetail.lecturerId.split(',')[1];
          console.log(this.lecturerId)
          console.log(this.courseDetail.courseIntroduction)
          this.getTeacher(this.lecturerId);
        });
        getSectionList(data).then(res=>{
          this.sectionList = res.data;
          console.log(this.sectionList)
        });
      },
      getTeacher(lecturerId){
        const datas ={lecturerId:lecturerId};
        getTeacherDetails(datas).then(res=>{
          this.teacherDetails = res.data;
        })
      }
    }
  };
</script>
<style lang="scss" scoped>
  .content-wrap {
    height: 100%;
  }

  .header-nav-wrap {
    background-color: #4f5861;
  }
  // 播放显示
  .top-wrap{
    width: 1200px;
    margin: 10px auto;
    border: 1px solid #dedede;
    overflow: hidden;
    height: 600px;
  }
  // 课程和讲师简介、评论和章节
  .bottom-wrap{
    width: 1200px;
    margin: 10px auto;
    overflow: hidden;
  }
  // 课程简介
  .course-description,.lecturer-description{
    width: 420px;
    height: 250px;
    background-color: #f4f9fd;
    float: left;
    margin-right: 10px;
    .course-title,.lecturer-title{
      height: 48px;
      line-height: 48px;
      text-align: center;
      width: 420px;
      color: #fff;
      font-size: 18px;
      font-family: "微软雅黑";
      background-color: #005aaa;
    }
    .course-content{
      margin: 5px;
      text-align: left;
    }
  }
  
</style>
