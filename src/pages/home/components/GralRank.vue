<template>

  <div class="c_rank">
    <div class="c_rank_header">
      <div class="c_rank_title">积分</div>
      <div class="rank_hr"></div>
    </div>
    <div class="c_rank_body">
      <table>
        <tr v-for="(item, index) in goldData" v-if="index < 15">
          <td class="rank_first" v-if="index == 0"></td>
          <td class="rank_second" v-if="index == 1"></td>
          <td class="rank_third" v-if="index == 2"></td>
          <td v-if="index > 2" v-text="index + 1"></td>
          <td v-text="item.name"></td>
          <td>剩余：
            <span :class="{'c-f36f3a2': index < 3}" v-text="item.eNumber"></span>
          </td>
          <!--<td>累计：<span ng-bind="item.addUpEName"></span></td>-->
        </tr>
        <div class="goldMy">
          <span v-text="userInfo.eCoinRanking"></span>
          <span v-text="userInfo.userName"></span>
          <span>剩余：
            <i v-text="userInfo.eCoin"></i>
          </span>
        </div>
      </table>
    </div>
  </div>

</template>

<script>
  import { getTopGoldList } from '@/services/api/home' ;
  import { queryUserInfo } from "@/services/api/common"
  export default {
    name: "GralRank",
    props: [],
    mounted() {},
    data() {
      return {
        userInfo:{},
        goldData:[]
      };
    },
    created(){
      this.getList();
    },
    methods: {
      getList(){
         getTopGoldList().then(res => {
              this.goldData = res.data;
          }).catch(error => {
              console.log(error);
          });
          queryUserInfo().then(res => {
              this.userInfo = res;
            }).catch(error => {
              console.log(error);
            });
          }
    },
    computed: {}
  };
</script>

<style lang="scss" scoped>
  .c_rank {
    width: 224px;
    float: right;
  }
  .c_rank_header {
    height: 60px;
    line-height: 50px;
    // @include borderStyle($bbottom:1px);
  }
  .rank_hr {
    height: 4px;
    width: 224px;
    background: url(/static/images/home/rank/home_jifen_xiushi.png);
  }
  .c_rank_title {
    // @include textStyle($fontSize: 18px, $color: #333);
    // @include textStyle($fontSize: 18px);  //默认颜色 333，第二个参数不用传递
    @include textStyle($fontSize:18px, $lineHeight:50px);  //这种写法不写对应变量名，需要对应参数顺序
    padding-left: 30px;
    text-align: left;
    background: url(/static/images/home/rank/home_jifen_icon.png)
      no-repeat left;
  }
  .c_rank_body {
    width: 100%;
    height: 534px;
    margin-top: 14px;
    background-color: #fafafa;
    // border: 1px solid $bor-color;
    @include borderStyle;
  }
  table {
    position: relative;
  }
  table,
  table tbody,
  table tbody tr,
  table tr {
    display: inline-block;
    width: 100%;
  }
  .c_rank_body table tr:last-child {
    /*border-top: 1px solid #ccc;*/
  }

.c_rank_body table tr td {
//   display: inline-block;
  height: 33.5px;
  float: left;
  padding: 5px 0;
  line-height: 22px;
  text-align: center;
  @extend %textOverflowEllipsis;
  @include textStyle(12px, #4c4c4c, 22px);
  &:first-child {
    width: 20%;
    font-weight: bold;
    @include textStyle(18px, #808080, 22px);
  }
  &:nth-child(2) {
    width: 36%;
    text-align: left;
  }
  &:last-child {
    width: 40%;
    text-align: left;
  }
}

  .rank_first {
    background: url(/static/images/home/rank/home_no1_icon.png) no-repeat
      center;
  }
  .rank_second {
    background: url(/static/images/home/rank/home_no2_icon.png) no-repeat
      center;
  }
  .rank_third {
    background: url(/static/images/home/rank/home_no3_icon.png) no-repeat
      center;
  }
  .c-f36f3a2 {
    color: $home_gralrank_font_color;
    font-weight: bold;
  }
  .goldMy {
    position: absolute;
    left: 0;
    border-top: 1px solid $bor-color;
    
    width: 100%;
    height: 33px;
    line-height: 28px;
    font-size: 12px;
    span {
      display: inline-block;
      &:first-child {
        width: 17%;
        text-align: center;
        font-weight: bold;
        @include textStyle(18px, #808080);
      }
      &:nth-child(2) {
        width: 34%;
        text-align: left;
      }
      &:nth-child(3) {
        width: 42%;
        text-align: left;
      }
    }
  }

</style>

