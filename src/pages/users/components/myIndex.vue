<template>
    <div class="user_wrap">
        <div class="user_top">
            <div class="user_img" :style="{'background-image': 'url(' + attachmentUrl(userInfo.userImg) + ')','background-size':'cover'}"></div>
            <div class="user_top_left">
                <p>
                    <span>我的姓名：</span><span>{{userInfo.userName}}</span>
                </p>
                <p>
                    <span>我的电话：</span><span>{{userInfo.userTel}}</span>
                </p>
            </div>
            <div class="user_top_right">
                <div class="btn_sign btn_defalut">领取签到积分</div>
                <div class="btn_person btn_defalut">修改个人资料</div>
                <div class="btn_pwd btn_defalut">修改密码</div>
            </div>
        </div>
        <div class="user_center">
            <ul>
                <li>
                    <span class="userinfo_img">
                         <icon name="ebiIcon" scale="5"></icon>
                    </span>
                    <span class="userinfo_word">积分数</span>
                    <span class="userinfo_num">{{userInfo.eCoin}}个</span>
                </li>
                <li>
                    <span class="userinfo_img">
                        <icon name="timeIcon" scale="5"></icon>
                    </span>
                    <span class="userinfo_word">总时长</span>
                    <span class="userinfo_num">{{userInfo.totalTime | formatHour}}</span>
                </li>
                <li>
                    <span class="userinfo_img">
                        <icon name="courseCountIcon" scale="5"></icon>
                    </span>
                    <span class="userinfo_word">课程数</span>
                    <span class="userinfo_num">{{userInfo.courseCount}}门</span>
                </li>
                <li>
                    <span class="userinfo_img">
                        <icon name="rankIcon" scale="5"></icon>
                    </span>
                    <span class="userinfo_word">积分排名</span>
                    <span class="userinfo_num">{{userInfo.eCoinRanking}}名</span>
                </li>
                <li>
                    <span class="userinfo_img">
                        <icon name="signCountIcon" scale="5"></icon>
                    </span>
                    <span class="userinfo_word">签到次数</span>
                    <span class="userinfo_num">{{userInfo.signInTotal}}天</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { queryUserInfo } from "@/services/api/common";
import {formatHour} from "@/filters/index.js"
export default {
    data(){
        return{
            userInfo: {}
        }
    },
    created(){
        this.getUserInfo();
    },
    filters:{
        formatHour
    },
    methods: {
         getUserInfo() {
            queryUserInfo().then(res => {
                this.userInfo = res;
                this.$store.dispatch("UpdateUser", res);
            }).catch(error => {
                console.log(error);
            });
        } 
    }
}
</script>
<style scoped>
.user_top{
    width: 950px;
    height: 150px;
    margin-bottom: 10px;
    float: left;
    background: #f4f9fd;
}
/* 头像 */
.user_img{
    width: 110px;
    height: 110px;
    float: left;
    border-radius: 50%;
    margin: 20px 23px;
    text-align: center;
    line-height: 104px;
    font-size: 36px;
    background: #399dfb;
}
.user_top_left{
    width: 600px;
    height: 85px;
    float: left;
    overflow: hidden;
    margin-top: 49px;
    line-height: 20px;
}
.user_top_left p{
    text-align: left;
}
/* 三个按钮 */
.btn_defalut{
    display: inline-block;
    width: 150px;
    height: 40px;
    border-radius: 4px;
    color: #fff;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}
.btn_sign{
    background: #f36f3a;
    margin-bottom: 10px;
    margin-top: 5px;
}
.btn_person{
    background: #99c5e9;
    margin-bottom: 10px;
}
.btn_pwd{
    background: #88aed9;
}
/* 个人信息显示 */
.user_center ul li{
    display: inline-block;
    width: 179px;
    height: 200px;
    margin-right: 10px;
    float: left;
    background: #88aed9;
}
.user_center ul li .userinfo_img{
    display: inline-block;
    width: 182px;
    height: 55px;
    margin-top: 28px;
}
.user_center ul li .userinfo_word{
    font-size: 18px;
    color: #fff;
    margin-top: 10px;
    width: 100%;
    text-align: center;
    display: inline-block;
}
.user_center ul li .userinfo_num{
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-top: 20px;
    display: inline-block;
    width: 100%;
    text-align: center;
}
</style>
