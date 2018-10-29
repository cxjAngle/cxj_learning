<template>
    <div class="message">
        <div class="main_right_bottom usr-msg">
            <p class="news">消息</p>
            <!-- <div class="xiaoren ng-hide" v-show="messageArr.length==0"></div>
            <div class="carried ng-hide" v-show="messageArr.length==0">暂无数据!</div> -->
            <ul class="center">
                <li class="clear" v-for="(item,index) in messageArr" :class="{'line': currmessageId == item.messageId }" :key="item.messageId">
                    <div class="notice" @click="queryMessageDetail(item);">
                        <div class="left ng-binding" v-text="item.messageTitle">1</div>
                        <span v-text="item.createTime" class="ng-binding">2018-02-06 10:48</span>
                    </div>
                    <p class="content" v-show="currmessageId == item.messageId">
                        <i>{{item.messageDetails}}</i>
                        <span class="dian" @click="queryMessageDetail(item);"></span>
                    </p>
                </li>
            </ul>
            <pagination :page-index="currentPage" :page-size="pageSize" :total="count" @change="pageChange"></pagination>
        </div>
    </div>
</template>
<script>
    import { getMessageList } from "@/services/api/user.js";
    import pagination from "@/components/pagination/pagination.vue"
    export default {
      name: "message",
      data() {
        return {
          messageArr: [],
          currmessageId: 0,
          currentPage:0,  //   当前页码
          pageSize:6, //   每页显示条数
          count:0  //   总记录数
        };
      },
      mounted() {
        this.getMessageList();
      },
      components:{
        pagination
      },
      methods: {
        getMessageList() {
          const data = { firstIndex: this.currentPage, pageSize: this.pageSize };
          getMessageList(data)
            .then(res => {
              this.messageArr = res.data;
              this.count = res.count;
            })
            .catch(error => {
              console.log(error);
            });
        },
        queryMessageDetail(item) {
          if (this.currmessageId == item.messageId) {
            this.currmessageId = null;
          } else {
            this.currmessageId = item.messageId;
          }
        },
        pageChange(page){
          this.currentPage = page;
          this.getMessageList();
        }
      }
    };
</script>
<style>
    .main_right_bottom {
      width: 950px;
      min-height: 390px;
      float: left;
      margin: 10px 0 0 0;
      background: #f4f9fd;
      position: relative;
    }
    .news {
      color: #3493ea;
      margin-top: 25px;
      margin-left: 20px;
    }
    .messageempty {
      color: #3493ea;
      /* padding-top:12%;
        	margin-left:40%; */
    }
    .messageempty {
      color: #3493ea;
      top: 60%;
      left: 38%;
      position: absolute;
    }

    .main_right {
      width: 950px;
      float: left;
      margin-left: 20px;
      border: 1px solid #85bef2;
      height: 810px;
      padding: 27px;
      padding-bottom: 20px;
      position: relative;
      overflow: auto;
    }

    .xiaoren {
      width: 127px;
      height: 96px;
      margin: 30px auto;
      /* background: url(../images/wushuju_bg.png) no-repeat center; */
      z-index: 100;
    }
    .carried {
      width: 127px;
      height: 96px;
      margin: 10px auto;
      text-align: center;
    }
    .left {
      float: left;
    }
    .usr-msg .xiaoren {
      position: absolute;
      width: 127px;
      height: 96px;
      top: 50%;
      left: 50%;
      margin: 0 auto;
      margin-left: -63.5px;
      margin-top: -48px;
      /* background: url(../images/wushuju_bg.png) no-repeat center; */
      z-index: 100;
    }
    .usr-msg .carried {
      position: absolute;
      width: 127px;
      top: 65%;
      left: 50%;
      margin: 0 auto;
      margin-left: -63.5px;
      text-align: center;
    }
    .main_right_bottom .center {
      margin-left: 20px;
      margin-right: 22px;
      margin-bottom: 0px;
      min-height: 275px;
      font-size: 14px;
      font-family: 宋体;
    }
    .main_right_bottom .center li {
      border-bottom: 1px dashed #dedede;
      line-height: 39px;
    }
    .main_right_bottom .center li.line {
      border-bottom: none;
    }
    .main_right_bottom .center li .notice {
      /* float: left; */
      height: 39px;
    }
    .main_right_bottom .center li .notice div {
      cursor: pointer;
    }
    .main_right_bottom .center li span {
      float: right;
    }
    .main_right_bottom .center li p {
      padding: 10px;
      margin: 0 0 15px 0;
      background: #fff;
      line-height: 20px;
    }
    .main_right_bottom .center li .content {
      position: relative;
      /* background: pink; */
    }
    .main_right_bottom .center li span.dian {
      position: absolute;
      width: 14px;
      height: 9px;
      display: block;
      /* background: #000; */
      /* background: url(../images/user/sanjiao.png) no-repeat; */
      right: 25px;
      bottom: 12px;
      cursor: pointer;
    }
    
</style>

