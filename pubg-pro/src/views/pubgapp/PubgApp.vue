<template>
    <div class="pubgapp">
        <div class="big-banner"></div>
        <div class="configuration">
            <div class="clear">
                <div class="peizhi">配置要求以及推荐</div>
                <h1 class="config_title">为了体验绝地求生的真正魅力，感受身临其境的真实生存，建议您使用推荐或更好配置进行游戏<span>（目前仅支持64位系统）</span></h1>
                <div class="config_con">
                	<div class="peizhitab clear">
                        <a href="javascript:;" v-for="(k,i) of desc" :key="i" :class="cssarr[i]" @click="qiehuan(i)">{{k}}</a>
                    </div>
                
                    <div class="qiehuanpeizhi">
                        <div class="qhpz_tab" v-for="(k,i) of pzxq" :key="i" :style="cssarr[i]==''?'display:none':'display:block'">
                            <h4>{{k.ms}}</h4>
                            <p>
                                <span>系统</span>Windows7/Windows10 64位<br>
                                <span>内存</span>{{k.nc}}<br>
                                <span>CPU</span>{{k.cpu}}<br>
                                <span>显卡</span><span v-html="k.xk"></span><br>
                                <span>硬盘</span>{{k.yp}}
                            </p>
                        </div>
                        <a class="alinkmore">更多配置帮助&gt;&gt;</a>        
                    </div>
                </div>
                <div class="peizhi">消费者评测</div>
                <my-evaluating></my-evaluating>
                <div class="guanggao" v-show="ggShow">
                    <i class="iconfont icon-close" @click="gghide"></i>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import myFooter from '../../components/myFooter';
    import myEvaluating from '../../components/myEvaluating';
    export default {
        data(){
            return {
                desc:['最低配置','普通配置','推荐配置','顶级配置'],
                cssarr:['active','','',''],
                pzxq:[
                    {ms:'（最低能运行的配置，可能会卡顿 建议设置较低画质）',nc:'6GB',cpu:'Intel i3-4340/AMD FX-6300',xk:'GTX 660 HD 7850',yp:'7200转机械硬盘'},
                    {ms:'（体验流畅画面，建议设置中等画质）',nc:'8GB',cpu:'Intel i5-6400/AMD R3-1300X',xk:'GTX 1050 / GTX 960 / GTX 1050TI / RX 570',yp:'7200转机械硬盘'},
                    {ms:'（体验高清画质，建议设置较高画质）',nc:'16GB',cpu:'Intel i5-7600K/AMD R5-1500X',xk:'GTX 1060 <a style="color:#F00;">（荐）</a>/ GTX 970 / RX 580 ',yp:'7200转机械硬盘'},
                    {ms:'（感受身临其境，建议设置超高画质）',nc:'16GB及以上',cpu:'Intel i7-7700K/AMD R7-1800X',xk:'GTX 1070 / GTX1070TI / GTX 1080 / GTX 1080TI / RX Vega64/ RX Vega56',yp:'SSD（固态硬盘）'},
                ],
                ggShow:true
            }
        },
        components:{
            myFooter,
            myEvaluating
        },
        methods:{
            qiehuan(i){
                this.cssarr = ['','','',''];
                this.cssarr[i] = 'active';
            },
            gghide(){
                this.ggShow = false;
            }
        },
        computed:{},
        watch:{},
        mounted(){}
    }
</script>

<style scoped>
    .pubgapp{
        position: absolute;
        top: 8%;
        width: 100%;
    }
    .big-banner{
        height: 725px;
        background: url('../../assets/img/header.jpg') no-repeat 50% 0;
    }
    .configuration{
        min-width: 1200px;
        background: #121212;
        color: #fff;
    }
    .configuration>div{
        width: 1205px;
        margin: 0 auto;
        padding-bottom: 15px;
    }
    .peizhi{
        font-size: 22px;
        margin-top: 30px;
        color: #e69800;
        line-height: 22px;
    }
    .config_title {
        font-size: 14px;
        line-height: 30px;
        font-weight: normal;
   
        padding-top: 10px;
        padding-bottom: 25px;
    }
    .config_title>span{
        color: #e69800;
    }
    .peizhitab{
        width: 1040px;
        padding-left: 50px;
    }
    .peizhitab>a{
        float: left;
        font-size: 14px;
        color: #fff;
        padding-bottom: 15px;
        line-height: 14px;
        width: 90px;
        text-align: center;
        margin-right: 75px;
    }
    .peizhitab>a.active{
        color: #d98500;
        border-bottom: 3px solid #d98500;
    }
    .qiehuanpeizhi{
        width: 830px;
        border-top: 1px solid #333333;
        padding-bottom: 40px;
        border-bottom: 1px dashed #333;
    }
    .qiehuanpeizhi>div{
        margin-top: 30px;
        padding-bottom: 20px;
    }
    .qhpz_tab>h4{
        margin-bottom: 15px;
        font-size: 12px;
        font-weight: bold;
    }
    .qhpz_tab>p{
        font-size: 12px;
        color: #ccc;
    }
    .qhpz_tab>p>span{
        padding-right: 90px;
        font-weight: bold;
    } 
    a.alinkmore {
        display: block;
        color: #e69800;
        font-size: 14px;
        width: 114px;
        cursor: pointer;
    }
    .guanggao{
        position: fixed;
        top: 150px;
        right: 120px;
        width: 160px;
        height: 340px;
        background: url('../../assets/img/pubg-gg.png') no-repeat;
    }
    .icon-close{
        position: absolute;
        right: -6px;
        top: -6px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-weight: bold;
        cursor: pointer;
        background: #fff;
        color: #757575;
        text-align: center;
        border-radius: 50%;
    }
</style>