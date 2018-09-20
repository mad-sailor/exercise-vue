<template>
    <div>
        <div id="mask" v-show="maskShow"></div>
        <div id="login" v-show="maskShow">
            <i class="iconfont icon-close" @click="maskhide"></i>
            <p>帐号密码登录</p>
            <form>
                <div class="uname" >
                    <input type="text" placeholder="帐号" v-model="uname">
                </div>
                <div class="upwd">
                    <input type="password" placeholder="密码" v-model="upwd">
                </div>
                <button class="btn-dl" @click.prevent="btnmit">登录</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                uname:'',
                upwd:''
            }
        },
        components:{},
        methods:{
             btnmit(){
                var url = `http://127.0.0.1/pubg/login.php?uname=${this.uname}&upwd=${this.upwd}`;
                this.$http.get(url).then(res=>{
                    var code = res.data.code;
                    if(code==1){
                        localStorage.setItem('uname',this.uname);
                        location.reload();
                    }else{
                        var msg = res.data.msg;
                        alert(msg);
                    }
                }).catch(err=>{
                    console.log(err);
                })
            },
            maskhide(){
                this.$emit('maskhide');
            }
        },
        computed:{},
        watch:{},
        mounted(){},
        props:['maskShow']
    }
</script>

<style scoped>
    #mask{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 101;
        width: 100%;
        height: 100%;
        background: rgba(230, 245, 255, .7);
    }
    #login{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 102;
        width: 618px;
        height: 364px;
        background: #fff;
        color: black;
        text-align: center;
    }
    #login>i{
        position: absolute;
        top: 3px;
        right: 10px;
        width: 40px;
        height: 30px;
        line-height: 30px;
        color: black;
        font-size: 20px;
        cursor: pointer;
    }
    #login>i:hover{
        background: linear-gradient(to bottom,red 0%,rgba(255,0,0,0) 100%);
        color: #fff;
    }
    #login>p{
        font-size: 20px;
        color: #333;
        margin: 50px 0;
    }
    .uname,.upwd{
        margin: 0 auto;
        width: 272px;
        height: 42px;
        border: 1px solid #cfcfcf;
        margin-bottom: 13px;
        border-radius: 5px;
    }
    .uname>input,.upwd>input{
        width: 100%;
        height: 100%;
        padding: 10px;
        border-radius: 5px;
    }
    .uname:focus-within,.upwd:focus-within{
        border-color:#A0D4FF;
    }
    .btn-dl{
        width: 272px;
        height: 42px;
        padding: 1px 6px;
        font-size: 17px;
        border: 0;
        background: #86CE2F;
        color: #fff;
        cursor: pointer;
    }
</style>