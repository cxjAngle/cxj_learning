<template>
    <div class="myCourse">
        <top-tab :tabList="tabList" @change="courseClick">
          <!-- <render1 :level='2'>hello world<p>sdsdsd</p></render1> -->
            <div slot="1" >
              <ul class="course_title">
                <li></li>
                <li>课程名称</li>
                <li>评论人数</li>
                <li>浏览人数</li>
                <li>点赞人数</li>
                <li>课程状态</li>
              </ul>
              <ul class="course_list" v-for="item in myCourseList">
                <li :style="{'background-image': 'url(' + attachmentUrl(item.courseImg) + ')','background-size':'100% 100%'}"></li>
                <!-- <li><span>{{item.courseName}}</span></li> -->
                <li>{{item.courseName}}</li>
                <li>{{item.commentsCount}}</li>
                <li>{{item.viewers}}</li>
                <li>{{item.thumbUpCount}}</li>
                <li>{{courseStatus(item.courseStatus)}}</li>
              </ul>
            </div>
            <div slot="2">
              <ul class="course_title">
                <li></li>
                <li>课程名称</li>
                <li>评论人数</li>
                <li>浏览人数</li>
                <li>点赞人数</li>
                <li>课程状态</li>
              </ul>
              <ul class="course_list" v-for="item in myCourseList">
                <li :style="{'background-image': 'url(' + attachmentUrl(item.courseImg) + ')','background-size':'100% 100%'}"></li>
                <li>{{item.courseName}}</li>
                <li>{{item.commentsCount}}</li>
                <li>{{item.viewers}}</li>
                <li>{{item.thumbUpCount}}</li>
                <li>{{courseStatus(item.courseStatus)}}</li>
              </ul>
            </div>
            <div slot="3">
              <ul class="course_title">
                <li></li>
                <li>课程名称</li>
                <li>评论人数</li>
                <li>浏览人数</li>
                <li>点赞人数</li>
                <li>课程状态</li>
              </ul>
              <ul class="course_list" v-for="item in myCourseList">
                <li :style="{'background-image': 'url(' + attachmentUrl(item.courseImg) + ')','background-size':'100% 100%'}"></li>
                <li>{{item.courseName}}</li>
                <li>{{item.commentsCount}}</li>
                <li>{{item.viewers}}</li>
                <li>{{item.thumbUpCount}}</li>
                <li>{{courseStatus(item.courseStatus)}}</li>
              </ul>
            </div>
        </top-tab>
      <pagination :page-index="currentPage" :page-size="pageSize" :total="count" @change="pageChange" class="paginationCourse" style="white-space:normal" v-if="myCourseList.length != 0"></pagination>
    </div>
</template>
<script>
    import topTab from "./components/TopTabs.vue";
    // import render1 from './components/render.vue'
    import {getMyCourse} from "@/services/api/my";
    import pagination from "@/components/pagination/pagination.vue"
    export default {
      name: "myCourse",
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
          ],
          myCourseList:[],
          currentPage:0,  //   当前页码
          pageSize:5, //   每页显示条数
          count:0,  //   总记录数
          identifying:1
        }
      },
      components: {
        topTab,
        // render1,
        pagination
      },
      created(){
        this.getList();
        // this.courseClick();
      },
      methods: {
         //我的课程
        getList(){
          const data = {firstIndex: this.currentPage, pageSize: this.pageSize,identifying:this.identifying};
          getMyCourse(data).then(res=>{
            this.myCourseList = res.courseList.data;
            // console.log(this.myCourseList)
            this.count = res.courseList.count;
          });
        },
        // 切换选项卡
        courseClick(index){
          if(index == 0){
             this.identifying = 1;
          }else if(index == 1){
            this.identifying = 0;
          }else{
            this.identifying = 2
          }
          this.getList();
        },
        // 状态
        courseStatus(status){
          if(status == 0){
            return '未学习';
          }else if(status == 1){
            return '未签到';
          }else if(status == 2){
            return '已学习';
          }else if(status == 3){
            return '已签到';
          }else if(status == 4){
            return '学习中';
          }
        },
        // 分页
        pageChange(page){
          console.log(page)
          this.currentPage = page;
          this.getList();
        }
      }
    };
</script>
<style scoped>
.myCourse{
  height: 770px;
}
.course_title li{
  float: left;
  width: 161px;
  height: 50px;
  color: #666666;
  text-align: center;
  line-height: 50px;
  background-color: #f2f2f2;
  border-right: 2px solid #fff;
}
.course_list li{
  float: left;
  height: 122px;
  width: 161px;
  border: 2px solid #fff;
  background-color: #fafafa;
  text-align: center;
  /* 垂直居中 */
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.course_list li:last-child{
  color: #005AAA;
}
/* 分页 */
 .paginationCourse{
    white-space: normal;
    position: relative;
    /* // left: 50%; */
    bottom: -15px;
    /* // margin-left: -170px; */
    margin-bottom: 30px;
  }
</style>

