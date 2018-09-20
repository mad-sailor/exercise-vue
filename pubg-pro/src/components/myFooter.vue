<template>
    <div class="footer">
        <div class="footer-main">
            <div class="footer-left">
                <a></a>
                <span></span>
            </div>
            <ul>
                <li class="clear">
                    <a>腾讯互动娱乐</a>
                    <span class="f-line">|</span>
                    <a>服务条款</a>
                    <span class="f-line">|</span>
                    <a>隐私政策</a>
                    <span class="f-line">|</span>
                    <a>腾讯游戏招聘</a>
                    <span class="f-line">|</span>
                    <a>腾讯游戏客服</a>
                    <span class="f-line">|</span>
                    <a>游戏地图</a>
                    <span class="f-line">|</span>
                    <a>商务合作</a>
                    <span class="f-line">|</span>
                    <a>腾讯网</a>
                    <span class="f-line">|</span>
                    <a>网站导航</a>
                </li>
                <li class="clear">
                    <a>腾讯公司版权所有</a>
                </li>
                <li>
                    <p>COPYRIGHT © 1998 - 2018 TENCENT. ALL RIGHTS RESERVED.</p>
                    <p>©PUBG Corporation. All rights reserved.</p>
                </li>
                <li>
                    <a>粤网文[2017]6138-1456号</a>
                    <span class="f-line">|</span>
                    <a>新出网证（粤）字010号</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        components:{},
        methods:{},
        computed:{},
        watch:{},
        mounted(){}
    }
</script>

<style scoped>
    .footer{
        width: 100%;
        height: 161px;
        background: #000;
        border-top: 5px solid #252525;
    }
    .footer-main{
        width: 1205px;
        height: 140px;
        margin: 0 auto;
        padding-top: 20px;
    }
    .footer-left{
        float: left;
    }
    .footer-left>a{
        float: left;
        width:  180px;
        height: 35px;
        margin: 40px 20px 0 0px;
        background: url('../assets/img/nav_spr.png') no-repeat -414px -183px;
        cursor: pointer;
    }
    .footer-left>span{
        float: left;
        width: 66px;
        height: 56px;
        background: url(http://game.gtimg.cn/images/pubg/web201712/nav_spr.png) no-repeat -627px -172px;
        margin-left: 10px;
        margin-top: 30px;
    }
    ul{
        float: left;
        padding-left: 50px;
    }
    ul>li{
        line-height: 20px;
    }
    ul>li>a{
        float: left;
        color: #676767;
        font-size: 12px;
        cursor: pointer;
    }
    ul>li>.f-line{
        float: left;
        padding: 0 10px;
        color: #676767;
    }
    ul>li>p{
        font-size: 12px;
        color: #676767;
    }
</style>