<template>
    <div class="myInfo">
        <my-index></my-index>
        <!-- 消息 -->
        <message></message>
    </div>
</template>
<script>
import myIndex from "./components/myIndex.vue";
import message from "./components/Message.vue";
export default {
    name:"myInfo",
    data(){
        return {

        }
    },
    methods: {

    },
    components:{
        message,
        myIndex
    }
}
</script>

