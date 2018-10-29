<template>
    <a href="javascript:void(0)" class="new-msg">
        <span class="red-point" v-if="msg.newMessage == 'Y'"></span>
        <svg-icon class="msg-icon" icon-class="Message" />
        <span>消息</span>  
    </a>
</template>
<script>
import { queryNewMessage } from '@/services/api/home'

export default {
    name:"messageTip",
    data(){
        return {
            msg:{}
        }
    },
    created(){
        this.getNewMessage();
    },
    methods:{
        getNewMessage(){
            queryNewMessage().then(res => {
               this.msg = res ;
            }).catch(error => {
                console.log(error);
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .new-msg {
        position: relative;
    }
    .msg-icon {
        vertical-align: middle;
    }
    .red-point {
        position: absolute;
        display: inline-block;
        width: 8px;
        height: 8px;
        top: 0;
        left: 12px;
        border-radius: 100%;
        background-color: red;
    }
</style>
