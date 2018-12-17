<template>
    <div class="taskCenter">
        <homeheader></homeheader>
        <section class="content-wrap">
            <header class="header-nav-wrap">
                <div class="mw">
                    <!-- <Mainnav></Mainnav> -->
                    <main-nav></main-nav>
                </div>
            </header>
            <section>
                <div class="task_warp">
                    <div class="c_top clearfix">
                        <div class="c_top_left">
                            <ul>
                                <li>
                                    <div class="left_img"><img src="/static/images/task/learningtime_icon.png"></div>
                                    <div class="right_word">10时7分<br>累计学习时长</div>
                                </li>
                                <li>
                                    <div class="left_img"><img src="/static/images/task/learningcourse_icon.png"></div>
                                    <div class="right_word">79门<br>累计学习课程</div>
                                </li>
                                <li>
                                    <div class="left_img"><img src="/static/images/task/learningday_icon.png"></div>
                                    <div class="right_word">51天<br>累计学习天数</div>
                                </li>
                            </ul>
                        </div>
                        <!-- 培训活动 -->
                        <div class="c_top_right">
                            <div class="train_title">
                                <div class="title_left">培训活动</div>
                                <div class="title_right"></div>
                            </div>
                            <div class="train_content">
                                <ul>
                                    <li v-for="(item, index) in taskList" v-if="index < 3">
                                        <div class="train_img" :style="{'background-image': 'url(' + attachmentUrl(item.actPicture) + ')','background-size':'cover'}"></div>
                                        <div class="train_title_small">{{item.activityName}}</div>
                                        <div class="train_title_large"><span>{{item.introduction}}</span></div>
                                        <div class="train_word">
                                            <p>{{getState(item.applyStatus)}}</p>
                                            <p>学习开放时间：<span>{{item.activityStartTimeS}}</span></p>
                                            <p>学习结束时间：<span>{{item.activityEndTimeS}}</span></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="c_bottom clearfix">
                         <!-- 考试 -->
                        <div class="c_bottom_left">
                            <div class="exam_title">
                                <div class="title_left">未完成考试</div>
                            </div>
                            <div class="exam_content">
                                <div class="exam_list" v-for="(item, index) in examList" v-if="index < 4">
                                    <ul>
                                        <li>
                                            <div class="exam_img" :style="{'background-image': 'url(' + attachmentUrl(item.examPaperPicture) + ')','background-size':'100% 100%'}"></div>
                                            <div class="exam_title_small">{{item.examName}}</div>
                                            <div class="exam_title_large"><span>{{item.examName}}</span></div>
                                        </li>
                                    </ul>
                                    <div class="exam_word">
                                        <p>状态：<span>{{item.examState}}</span></p>
                                        <p>考试开始时间：<span>{{item.beginTime}}</span></p>
                                        <p>考试结束时间：<span>{{item.endTime}}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 课程 -->
                        <div class="c_bottom_right">
                            <div class="course_title">
                                <div class="title_left">未完成课程</div>
                            </div>
                            <div class="course_content">
                                <div class="course_list" v-for="(item,index) in courseList" v-if="index < 4" @click="goDetail(item.courseId)">
                                    <ul>
                                        <li>
                                            <div class="course_img" :style="{'background-image': 'url(' + attachmentUrl(item.courseImg) + ')','background-size':'100% 100%'}"></div>
                                            <div class="course_title_small">{{item.courseName}}</div>
                                            <div class="course_title_large"><span>{{item.courseName}}</span></div>
                                        </li>
                                    </ul>
                                    <div class="course_word">
                                        <p v-show="item.status == 2">未签到</p>
                                        <p v-show="item.status == 4">未学习</p>
                                        <p v-show="item.status == 5">学习中</p>
                                        <p v-show="item.status == 6">未开始</p>
                                        <p>
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
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        <home-footer></home-footer>
    </div>
</template>
<script>
import Homeheader from "@/components/headers/homeHeader.vue";
import HomeFooter from "@/components/footers/HomeFooter.vue";
import MainNav from "@/components/navs/MainNav.vue";
import {getTaskList, getExamList, getCourseList} from "@/services/api/task.js";
export default {
    data(){
        return{
            firstIndex:0,
            pageSize:3,
            taskList:[],
            examList: [],
            courseList: []
        }
    },
    components: {
      Homeheader,
      MainNav,
      HomeFooter
    },
    created(){
        this.getList();
    },
    methods: {
        getList(){
            const data = {firstIndex: this.currentPage, pageSize: this.pageSize};
            getTaskList(data).then(res=>{
                this.taskList = res.data;
                // console.log(this.taskList)
                this.count = res.count;
            });
            getExamList(data).then(res=>{
                this.examList = res.data;
                // console.log(this.examList)
                this.count = res.count;
            });
            getCourseList(data).then(res=>{
                this.courseList = res.data;
                console.log(this.courseList)
                this.count = res.count;
            });
        },
        // 培训状态
        getState(state){
            if(state == 1) return '等待报名';
            if(state == 2) return '我要报名(未报名)';
            if(state == 3) return '取消报名(已报名)';
            if(state == 4) return '等待培训';
            if(state == 5) return '正在培训';
            if(state == 6) return '任务成功';
            if(state == 7) return '任务失败';
            if(state == 8) return '推送中';
            if(state == 9) return '推送失败';
            if(state == 10) return '推送成功';
            if(state == 11) return '推送成功';
        },
        // 点击课程进入详情
        goDetail(id){
            this.$router.push({name:'/courseLearning',params:{id:id}});
        }
    }
}
</script>
<style lang="scss" scoped>
.content-wrap {
    height: 100%;
}
.header-nav-wrap{
    background: #4f5861;
}
/* 任务中心内容 */
.task_warp{
    height: auto;
}
.c_top{
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
}
/* 累计数据 */
.c_top_left{
    float: left;
}
.c_top_left ul li{
    width: 275px;
    height: 110px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    position: relative;
}
.left_img{
    float: left;
    position: absolute;
    left: 20%;
    top: 25%;
}
.right_word{
    position: absolute;
    left: 45%;
    top: 30%;
}
/* 培训活动 */
.c_top_right{
    float: left;
    width: 907px;
    height: 350px;
    /* border-radius: 10px; */
    margin-left: 18px;
    border: 1px solid #dedede;
    position: relative;
}
.train_title{
    width: 905px;
    height: 55px;
    background-color: #f5f5f5;
    position: relative;
}
.title_left{
    height: 55px;
    line-height: 55px;
    float: left;
    font-size: 18px;
    padding-left: 10px;
}
.train_content{
    padding: 20px;
    overflow: hidden;
}
.train_content ul li{
    float: left;
    margin-right: 6px;
    width: 282px;
}
.train_content ul li .train_word{
    background-color: #fafafa;
    padding: 10px 10px;
    p{
        text-align: left;
        line-height: 30px;
    }
}
.train_content ul li .train_title_small{
    background: #000;
    opacity: 0.5;
    filter: "alpha(opacity=50)";
    filter: alpha(opacity=50);
    color: #fff;
    position: absolute;
    bottom: 132px;
    width: 282px;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    font-family: "宋体";
    cursor: pointer;
}
.train_content ul li:hover .train_title_small{
    display: none;
}
.train_content ul li:hover .train_title_large{
    display: block;
}
.train_content ul li .train_title_large{
    position: absolute;
    top: 74px;
    background: #000;
    opacity: 0.5;
    filter: "alpha(opacity=50)";
    filter: alpha(opacity=50);
    width: 282px;
    height: 141px;
    color: #fff;
    display: none;
}
.train_content ul li .train_title_large span{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 282px;
    height: 141px;
}
.train_content ul li .train_img{
    width: 282px;
    height: 141px;
}
.c_bottom{
    width: 1200px;
    height: auto;
    margin:10px auto;
}
/* 考试 */
.c_bottom_left{
    width: 595px;
    height:660px;
    border:1px solid #dedede;
    float: left;
}
.exam_title{
    width: 593px;
    height: 55px;
    background-color: #f5f5f5;
}
.exam_list{
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    position: relative;
}
.exam_list ul li .exam_img{
    width: 282px;
    height: 141px;
}
.exam_list ul li .exam_title_small{
    background: #000;
    opacity: 0.5;
    filter: "alpha(opacity=50)";
    filter: alpha(opacity=50);
    color: #fff;
    position: absolute;
    bottom: 108px;
    width: 282px;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    font-family: "宋体";
    cursor: pointer;
}
.exam_list ul li:hover .exam_title_small{
    display: none;
}
.exam_list ul li:hover .exam_title_large{
    display: block;
}
.exam_list ul li .exam_title_large{
    position: absolute;
    top: 0px;
    background: #000;
    opacity: 0.5;
    filter: "alpha(opacity=50)";
    filter: alpha(opacity=50);
    width: 282px;
    height: 141px;
    color: #fff;
    display: none;
}
.exam_list ul li .exam_title_large span{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 282px;
    height: 141px;
}
.exam_word{
    background-color: #fafafa;
    padding: 10px 10px;
    p{
        text-align: left;
        line-height: 30px;
    }
}
/* 课程 */
.c_bottom_right{
    width: 595px;
    height:660px;
    border:1px solid #dedede;
    float: right;
}
.course_title{
    width: 593px;
    height: 55px;
    background-color: #f5f5f5;
}
.course_list{
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    position: relative;
}
.course_list ul li .course_img{
    width: 282px;
    height: 141px;;
}
.course_list ul li .course_title_small{
    background: #000;
    opacity: 0.5;
    filter: "alpha(opacity=50)";
    filter: alpha(opacity=50);
    color: #fff;
    position: absolute;
    bottom: 80px;
    width: 282px;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    font-family: "宋体";
    cursor: pointer;
}
.course_list ul li:hover .course_title_small{
    display: none;
}
.course_list ul li:hover .course_title_large{
    display: block;
}
.course_list ul li .course_title_large{
    position: absolute;
    top: 0px;
    background: #000;
    opacity: 0.5;
    filter: "alpha(opacity=50)";
    filter: alpha(opacity=50);
    width: 282px;
    height: 141px;
    color: #fff;
    display: none;
}
.course_list ul li .course_title_large span{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 282px;
    height: 141px;
}
.course_word{
    background-color: #fafafa;
    padding: 10px 10px;
    p{
        overflow: hidden;
        text-align: left;
    }
    p ul li{
        float: left;
        line-height: 30px;
        width: 33%;
        margin-top: 10px;
    }
}
</style>
