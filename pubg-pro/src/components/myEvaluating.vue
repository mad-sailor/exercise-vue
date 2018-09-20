<template>
    <div class="yhpc">
        <div class="d-line">共{{total}}条评测</div>
        <div class="clear" v-if="isLogin">
            <div class="touxiang">
                <img src="../assets/img/wtx.jpg">
            </div>
            <div class="srk">
                <textarea rows="3" class="input" placeholder="请输入评论内容，可以按Ctrl+Enter提交" v-model="content" @keyup="keypc"></textarea>
                <div class="referring">
                    <button @click="btnpc">提交</button>
                    <span>请限制在1000字以内</span>
                </div>
            </div>
        </div>
        <div class="login" v-else>如需评测,请先 <a href="javascript:;" @click="loginShow">登录</a></div>
        <div class="pc-content clear">
            <div class="pc-top">
                <a href="javascript:;" :class="isActive?'pc-tab active':'pc-tab'" @click="changeA(1)">按热门</a>
                <a href="javascript:;" :class="!isActive?'pc-tab active':'pc-tab'" @click="changeA(2)">按时间</a>
            </div>
            <ul class="pc-body">
                <li class="clear" v-for="(k,i) of allPc" :key="i">
                    <div class="touxiang">
                        <img src="../assets/img/wtx.jpg">
                    </div>
                    <div class="pc-right">
                        <p>{{k.uname}}</p>
                        <p>{{k.content}}</p>
                        <p>
                            <span>{{k.uptime | BigIToTime}}</span>
                            <a href="javascript:;">
                                <b class="iconfont icon-zan" @click="updateZ(k.yid,i)"></b>
                                <i>{{k.zan}}</i>
                            </a>
                            <a href="javascript:;">
                                <b class="iconfont icon-cai" @click="updateC(k.yid,i)"></b>
                                <i>{{k.cai}}</i>
                            </a>
                            <a href="javascript:;">举报</a>
                        </p>
                    </div>
                </li>
            </ul>
            <button class="btn-more" @click="loadMore">{{desc}}</button>
        </div>
        <my-login :maskShow="maskShow" @maskhide="maskhide"></my-login>
    </div>
</template>

<script>
    import myLogin from './myLogin';

    export default {
        data(){
            return {
                isLogin:'',
                maskShow:false,
                uname:'',
                uid:'',
                content:'',
                allPc:[],
                isActive:true,
                total:'',
                pageCount:'',
                desc:'',
                pno:1
            }
        },
        components:{
            myLogin
        },
        methods:{
            isSignin(){
                var uname = window.localStorage.getItem('uname');
                this.uname = uname;
                if(uname){
                    var url = 'http://127.0.0.1/pubg/islogin.php?uname='+uname;
                    this.$http.get(url).then(res=>{
                        var code = res.data.code;
                        if(code==-1){
                            this.isLogin = false;
                        }else{
                            this.isLogin = true;
                            this.uid = res.data.uid;
                        }
                    }).catch(err=>{
                        console.log(err);
                    })
                }else{
                    this.isLogin = false;
                }
            },
            loginShow(){
                this.maskShow = true;
            },
            maskhide(){
                this.maskShow = false;
            },
            btnpc(){
                var str = this.content;
                if(str==''){
                    alert('至少输入点东西呀');
                }else{
                    var url = `http://127.0.0.1/pubg/yhpc.php?uid=${this.uid}&uname=${this.uname}&content=${str}&uptime=${new Date().getTime()}`;
                    this.$http.get(url).then(res=>{
                        alert('发表成功!');
                        this.content = '';
                        this.getPc();
                    }).catch(err=>{
                        console.log(err);
                    });  
                }
            },
            keypc(e){
                if (e.ctrlKey && e.keyCode == 13){
                    this.btnpc();
                } 
            },
            getPc(order,pno){
                if(order==null){
                    order = 'zan';
                }
                if(pno==null){
                    pno = 1;
                }
                var url = `http://127.0.0.1/pubg/getYhpc.php?order=${order}&pno=${pno}`;
                this.$http.get(url).then(res=>{
                    this.allPc = this.allPc.concat(res.data.data);
                    this.total = res.data.total;
                    this.pageCount = res.data.pageCount;
                    if(pno>=this.pageCount){
                        this.desc = '暂无更多评测';
                    }else{
                        this.desc = '查看更多评测';
                    }
                }).catch(err=>{
                    console.log(err);
                })
            },
            changeA(v){
                this.allPc = [];
                this.pno = 1;
                if(v==1){
                    this.isActive = true;
                    this.getPc();
                }else if(v==2){
                    this.isActive = false;
                    this.getPc('uptime');
                }
            },
            loadMore(){
                if(this.pno<this.pageCount){
                    var pno = parseInt(this.pno)+1;
                    this.pno = pno;
                    var order = this.isActive?'':'uptime';
                    this.getPc(order,pno);
                }
            },
            updateZ(yid,i){
                this.allPc[i].zan++;
                var url = `http://127.0.0.1/pubg/updateZC.php?yid=${yid}&who=zan`;
                this.$http.get(url);
            },
            updateC(yid,i){
                this.allPc[i].cai++;
                var url = `http://127.0.0.1/pubg/updateZC.php?yid=${yid}&who=cai`;
                this.$http.get(url);
            }
        },
        computed:{},
        watch:{},
        mounted(){
            this.isSignin();
            this.getPc();
        }
    }
</script>

<style scoped>
    .yhpc{
        width: 830px;
        margin-top: 30px;
    }
    .d-line{
        line-height: 2.2;
        margin-bottom: 20px;
        border-bottom: 1px solid #e3e3e3;
    }
    .login{
        margin: 20px 0;
    }
    .login>a{
        color: #aaa;
        text-decoration: underline;
    }
    .login>a:hover{
        color: #fff;
    }
    .touxiang{
        float: left;
        width: 34px;
        height: 34px;
        border:1px solid #555;
        margin-right: 10px;
    }
    .srk{
        float: left;
        color: #757575;
    }
    .input{
        display: block;
        width: 786px;
        height: 83px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.64345;
        color: #757575;
        background-color: #222;
        border: 1px solid #222;
        overflow: auto;
        resize: none;
    }
    .input:focus{
        border-color: #333;
        outline: 0;
    }
    .referring{
        font-size: 14px;
    }
    .referring>button{
        float: left;
        border: 0;
        outline: 0;
        cursor: pointer;
        color: #fff;
        padding: 5px 10px;
        background: linear-gradient( to bottom, #515151 5%, #474747 95%)
    }
    .referring>span{
        float: right;
        line-height: 28.18px;
    }
    .pc-body>li{
        margin-bottom: 15px;
    }
    .pc-top{
        margin: 30px 0;
    }
    .pc-tab{
        margin-right: 20px;
        padding-bottom: 5px;
        border-bottom: 2px solid transparent;
        color:#fff;
    }
    .pc-tab.active{
        color: #e69800;
        border-color: #e69800;
    }
    .pc-right{
        display: inline-block;
        width: 786px;
    }
    .pc-right>p:nth-child(2){
        color: #757575;
        font-size: 14px;
        margin: 5px 0;
    }
    .pc-right>p:last-child{
        font-size: 12px;
        color: #757575;
    }
    .pc-right>p>a{
        color: #757575;
    }
    .pc-right>p>span,.pc-right>p>a{
        margin-right: 5px;
    }
    .iconfont{
        font-size: 12px;
    }
    .btn-more{
        display: block;
        width: 115px;
        height: 37px;
        border: 0;
        outline: 0;
        margin: 0 auto;
        padding: 6px 12px;
        font-size: 14px;
        color: #fff;
        background: linear-gradient( to bottom, #515151 5%, #474747 95%);
        cursor: pointer;
    }
</style>