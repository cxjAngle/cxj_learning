<template>
  <div class="list_wrap">
      <div class="list_cate" :class="[backHeight == true ? 'list_cate_new' : '']">
        <div class="cateall" :class="[classifyId == undefined ? 'backStyle' : '']" @click="queryByClassifyIdAll(classifyId)">全部分类</div>
        <ul>
          <li v-for="item in cateData">
            <div :class="[ item.classifyId == classifyId ? 'backStyle' : '']"  @click="queryByClassifyId(item.classifyId)">{{item.classifyName}}</div>
            <!-- v-bind:class="classifyId == item.classifyId ? 'backStyle' : ''" -->
          </li>
        </ul>
        <span class="coll_button" :class="{'button_up' : backHeight == true, 'button_down' : backHeight == false}" @click="backHeight = !backHeight"></span>
      </div>
      <div class="list_sort">
        <ul>
          <li :class="[listOrderBy == 'CREATE_TIME' ? 'backStyle' : '']" @click="listOrderByTime()" >最新时间</li>
          <li class="viewrs_style" :class="{'viewer_desc' : listOrderBy == 'VIEWERS' && orderBy != 'desc', 'viewer_asc': listOrderBy == 'VIEWERS' && orderBy == 'desc'}" @click="listOrderByAll('VIEWERS')">浏览量</li>
          <li class="thump_up_count_style" :class="{'viewer_desc' : listOrderBy == 'thumb_up_count' && orderBy != 'desc', 'viewer_asc': listOrderBy == 'thumb_up_count' && orderBy == 'desc'}" @click="listOrderByAll('thumb_up_count')">点赞数</li>
          <li class="only_see">只看精品课程 <el-switch v-model="value2" active-color="#F36F3A" inactive-color="RGB(200, 200, 200)" @change="queryByExcellentCourse()"></el-switch></li>
        </ul>
      </div>
      <div class="course_list">   
        <noDate v-if="coursedata.length == 0"></noDate> 
        <ul>
          <li v-for="(item) in coursedata">
            <div class="">
              <span class="course_well"></span>
              <div class="course_large">
                <h4>{{item.courseName | capitalize}}</h4>
                <p>{{item.courseIntroduction}}</p>
              </div>
              <!--<div class="course_small">-->
                <span class="course_img"  :style="{'background-image': 'url(' + attachmentUrl(item.courseImg) + ')','background-size':'cover'}"></span>
                <span class="course_name">{{item.courseName | capitalize}}</span> 
              <!--</div>-->
            </div>
            <div class="course_icon">
              <ul>
                <li>
                  <icon name="commentIcon" scale="1.5" class="comment_icon"></icon>
                  <span>{{item.commentCount}}</span>
                </li>
                <li>
                  <icon name="viewsIcon" scale="2" class="views_icon"></icon>
                  <span>{{item.viewers}}</span>
                </li>
                <li>
                  <icon name="pressIcon" scale="2" class="press_icon"></icon>
                  <span>{{item.thumbUpCount}}</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <pagination :page-index="currentPage" :page-size="pageSize" :total="count" @change="pageChange" class="paginationCourse" style="white-space:normal" v-if="coursedata.length != 0"></pagination>
  </div>
</template>
<script>
  import {getOnlineCourseList, getOnlineCourseClassify} from '@/services/api/courseList' ;
  import {capitalize} from '@/filters/index.js';
  import pagination from "@/components/pagination/pagination.vue"
  import noDate from "@/components/NoData/index.vue"
  export default {
    name: 'CourseList',
    data() {
      return {
        coursedata : [],
        currentPage:0,  //   当前页码
        pageSize:12, //   每页显示条数
        count:0,  //   总记录数
        cateData:[],
        classifyId:undefined,
        listOrderBy: "CREATE_TIME",
        orderBy : 'desc',
        isExcellentCourse:'Y',
        value2 : false,
        backHeight: false
      };
    },
    filters:{
      capitalize
    },
    components: {
      pagination,
      noDate
    },
    created() {
      this.getList();
      this.getCate();
    },
    methods:{
      //课程列表
      getList(){
        const data = {firstIndex: this.currentPage, pageSize: this.pageSize, listOrder: this.listOrderBy, orderBy: this.orderBy,isExcellentCourse:this.isExcellentCourse,classifyId: this.classifyId};
        getOnlineCourseList(data).then(res=>{
          this.coursedata = res.data;
          this.count = res.count;
        });
      },
      //  分类
      getCate(){
         getOnlineCourseClassify().then(res=>{
          this.cateData = res;
        });
      },
      // 分类Id
      queryByClassifyId(classifyId){
        this.classifyId = classifyId;
        this.getList();
        // console.log(this.currentPage);
        this.pageChange(this.currentPage);
      },
      queryByClassifyIdAll(classifyId){
        this.classifyId = undefined;
        this.getList();
      },
      // 排序
      listOrderByTime(){
        this.listOrderBy = 'CREATE_TIME';
        this.orderBy = 'desc';
        this.getList();
      },
      listOrderByAll(listOrder){
        if(this.listOrderBy === listOrder){
          this.orderBy === "desc" ? this.orderBy = "asc" : this.orderBy = "desc";
        }
        else{
          this.listOrderBy = listOrder;
          this.orderBy = "desc";
        }
        this.getList();
      },
      // 精品课程
      queryByExcellentCourse(){
        this.isExcellentCourse = (this.value2 == true) ? 'Y' : undefined;
        this.getList();
      },
      // 分页
      pageChange(page){
        this.currentPage = page;
        console.log(this.currentPage)
        this.getList();
      }
    }
  };
</script>
<style lang="scss" scoped>
  .list_wrap {
    overflow: hidden;
  }
  // 分类
  .list_cate{
    width: 1200px;
    height: 48px;
    margin: 20px auto;
    background-color: #f6f6f6; 
    overflow:hidden;
    ul li{
      float: left;
      width: 165px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
    }
    .cateall{
      width: 110px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      float: left;
      background: #f6f6f6;
      cursor: pointer;
      font-size: 16px;
    }
    .coll_button{
      display: inline-block;
      width: 52px;
      height: 32px;
      margin-top: 20px;
      cursor: pointer;
    }
    .button_down{
       background: url(/static/images/course/xianshangkecheng_shaixuan_xiag_btn.png) no-repeat;
    }
    .button_up{
       background: url(/static/images/course/xianshangkecheng_shaixuan_shang_btn.png) no-repeat;
    }
  }
  .list_cate_new {
    height: auto;
  }
  .backStyle{
    background: #fff!important;
    color: #0055aa;
  }
  // 排序
  .list_sort{
    width: 1200px;
    height: 48px;
    margin: 0 auto;
    background-color: #f6f6f6;
    ul li{
      float: left;
      line-height: 48px;
      height: 48px;
      text-align: center;
      width: 110px;
      font-size: 16px;
      cursor: pointer;
    }
    & .only_see{
      position: relative;
    }
    & .only_see .el-switch{
      position:absolute;
      left:110px;
      top:14px;
    }
    & .viewrs_style, & .thump_up_count_style{
      background:url(/static/images/course/course_soft.png) no-repeat right;
    }
    & .viewer_desc{
      color: #0055aa;
      background:#fff url(/static/images/course/course_softdown.png) no-repeat right!important;
    }
    & .viewer_asc{
      color: #0055aa;
      background:#fff url(/static/images/course/course_softup.png) no-repeat right!important;
    }
  }
  
  .course_list{
    overflow: hidden;
    min-height: 820px;
    ul li{
      float: left;
      margin-top: 12px;
      margin-right: 18px;
      display: inline-block;
      width: 285px;
      height: 258px;
      position: relative;
      z-index: 0;
      &:nth-child(4n){
        margin-right:0;
      }
      &:hover .course_large{
        display: block;
      }
      &:hover .course_name{
        display: none;
      }
      &:hover .course_img{
        display: inline-block;
        position: absolute;
        top:0;
        left:0;
        z-index: -1;
      }
    }
  }
  .course_well{
    position: absolute;
    display: inline-block;
    width: 77px;
    height: 77px;
    top: 0;
    left: 0;
    background: url(/static/images/home/course/home_jingpinkecheng_jioabiao.png) no-repeat;
  }
  .course_img{
    display: inline-block;
    width: 285px;
    height: 214px;
    background-size: 100% 100%;
  }
  .course_name{
    position: absolute;
    display: inline-block;
    width: 285px;
    height: 30px;
    background: #000;
    opacity: 0.6;
    color: #fff;
    top: 184px;
    left:0;
    text-align: center;
    line-height: 30px;
  }
  .course_large{
    display: none;
    width: 100%;
    height: 214px;
    padding: 5px;
    text-align: center;
    overflow: hidden;
    opacity: 0.8;
    color: #FFFFFF;
    background-color: #000;
    z-index: 9999;
  }
  .course_icon{
    width: 285px;
    height: 44px;
    border: 1px solid #ccc;
    border-top: 0;
    position: absolute;
    top: 214px;
    ul li{
      display: inline-block;
      float: left;
      width: 94px;
      height: 44px;
      margin: 0;
      line-height: 44px;
      text-align: center;
      & .comment_icon,& .views_icon,& .press_icon{
        position: relative;
        top:5px
      }
    }
  }
  .course_icon ul li span{
    font-size:12px;
  }
  .paginationCourse{
    white-space: normal;
    position: relative;
    // left: 50%;
    bottom: -15px;
    // margin-left: -170px;
    margin-bottom: 30px;
  }
</style>
