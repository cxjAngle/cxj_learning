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
                                    <li>
                                        <div class="train_img"></div>
                                        <div class="train_title_small">123456</div>
                                        <div class="train_title_large"><span>爱的方式带给</span></div>
                                        <div class="train_word">
                                            <p>正在培训</p>
                                            <p>学习开放时间:2018-04-04 15:55</p>
                                            <p>学习结束时间:2019-04-04 19:00</p>
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
                            <div class=""></div>
                        </div>
                        <!-- 课程 -->
                        <div class="c_bottom_right">
                            <div class="course_title">
                                <div class="title_left">未完成课程</div>
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
import {getTaskList} from "@/services/api/task.js";
export default {
    data(){
        return{
            firstIndex:0,
            pageSize:3
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
            console.log(this.taskList)
            // console.log(this.myCourseList)
            this.count = res.count;
          });
        },
    }
}
</script>
<style scoped>
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
    margin-right: 15px;
    width: 282px;
}
.train_content ul li .train_word{
    background-color: #fafafa;
    padding: 10px 10px;
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
</style>
