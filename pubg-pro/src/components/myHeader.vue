<template>
    <div class="top">
        <div class="main">
            <router-link to="/main" class="logo"></router-link>
            <ul class="clear">
                <li>
                    <router-link to="/main">官网首页</router-link>
                </li>
                <li>
                    <router-link to="/detail">更多细节</router-link>
                </li>
                <li>
                    <router-link to="/yuyue">国服预约</router-link>
                </li>
                <li>
                    <router-link to="/bangding">老兵绑定</router-link>
                </li>
                <li>
                    <router-link to="/tese">游戏特色</router-link>
                </li>
                <li>
                    <router-link to="/pubgapp">讨论社区</router-link>
                </li>
                <li>
                    <router-link to="/renzhen">网吧认证</router-link>
                </li>
            </ul>
            <div class="yhxx" v-if="!isLogin">亲爱的用户,请[<a href="javascript:;" @click="loginShow">登录</a>]</div>
            <div class="yhxx" v-else>欢迎{{uname}},<a href="javascript:;" @click="signout">注销</a></div>
            <router-link to="/main" class="entertomain">进入官网</router-link>
            <my-login :maskShow="maskShow" @maskhide="maskhide"></my-login>
        </div>
    </div>
</template>
<script>
    import myLogin from './myLogin';

    export default {
        data(){
            return {
                isLogin:false,
                maskShow:false,
                uname:''
            }
        },
        components:{
            myLogin
        },
        methods:{
            isSignin(){
                var uname = localStorage.getItem('uname');
                this.uname = uname;
                if(uname){
                    var url = 'http://127.0.0.1/pubg/islogin.php?uname='+uname;
                    this.$http.get(url).then(res=>{
                        var code = res.data.code;
                        if(code==-1){
                            this.isLogin = false;
                        }else{
                            this.isLogin = true;
                        }
                    }).catch(err=>{
                        console.log(err);
                    })
                }else{
                    this.isLogin = false;
                }
            },
            signout(){
                window.localStorage.removeItem('uname');
                location.reload();
            },
            loginShow(){
                this.maskShow = true;
            },
            maskhide(){
                this.maskShow = false;
            }
        },
        watch:{},
        computed:{},
        mounted(){
            this.isSignin()
        }
    }
</script>

<style scoped>
    .top{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
        height: 12%;
        background-image: url('../assets/img/nav_spr.png'); 
    }
    .main{
        width: 1205px;
        margin: 0 auto;
        position: relative;
    }
    .logo{
        float: left;
        margin-top: 5px;
        width: 129px;
        height: 66px;
        background-image: url('../assets/img/nav_spr.png');
        background-position: -6px -133px;
    }
    ul{
        float: left;
        padding-left: 27px;
        height: 66px;
        line-height: 66px;
        text-align: center;
    }
    ul>li{
        float: left;
        margin: 0 24px;
    }
    ul>li>a{
        color: #ccc;
        font-size: 14px;
        font-weight: bold;
    }
    .entertomain{
        position: absolute;
        top: 19px;
        right: 0;
        display: block;
        width: 142px;
        height: 40px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        line-height: 40px;
        color: #fff !important;
        background: #e69800;
        text-shadow: 1px 1px 1px #b27601;
    }
    .router-link-active{
        color: #e69800;
    }
    .yhxx{
        position: absolute;
        top: 23px;
        right: 166px;
        color: #fff;
    }
</style>
