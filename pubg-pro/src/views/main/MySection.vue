<template>
    <div class="container">
        <div class="body">
            <transition :name="scroll">
                <router-view @showmethod="jumpto"></router-view>
            </transition>
        </div>
        <a href="#" class="top-arrow" @click.prevent="moveto(10,new Date().getTime())"></a>
        <i class="direct1"></i>
        <i class="direct2"></i>
        <i class="direct3"></i>
        <i class="direct4"></i>
        <i class="direct5"></i>
        <a href="#" class="bot-arrow" @click.prevent="moveto(-10,new Date().getTime())"></a>
        <ul>
            <li v-for="(k,i) of directions" :key="i">
                <router-link :to="k.path">
                    <b>{{k.direct}}</b>
                    <span></span>
                    <div>{{k.describ}}</div>
                </router-link>
            </li>
        </ul>
        <p class="mouse"></p>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                scroll:"up",
                scostart:0,
                directions:[
                    {direct:'N',describ:'丰富玩法',path:'/main/section1'},
                    {direct:'NE',describ:'丰富防具',path:'/main/section2'},
                    {direct:'E',describ:'丰富武器及配件',path:'/main/section3'},
                    {direct:'SE',describ:'丰富天气及地形',path:'/main/section4'},
                    {direct:'S',describ:'丰富载具',path:'/main/section5'},
                ]
            }
        },
        components:{},
        methods:{
            moveto(num,scoend){
                var str = location.hash;
                if(str.indexOf("/main/section")==-1){
                    return;
                }else{
                    var floor = parseInt(str.slice(-1));
                    if(num>0 && scoend-this.scostart>2000){
                        this.scroll = "down";
                        this.scostart = scoend;
                        floor--;
                        if(floor<1){
                            floor = 5;
                        }
                        this.$router.push(`/main/section${floor}`);
                    }else if(num<0 && scoend-this.scostart>2000){
                        this.scroll = "up";
                        this.scostart = scoend;
                        floor++;
                        if(floor>5){
                            floor = 1;
                        }
                        this.$router.push(`/main/section${floor}`);
                    }
                }
            },
            jumpto(url){
                this.$emit("showmethod",url);
            }
        },
        watch:{},
        computed:{},
        mounted(){
            window.onmousewheel = e=>{
                var scoend = new Date().getTime();
                var num = e.wheelDelta;
                this.moveto(num,scoend);
            };
        }
    }
</script>

<style scoped>
    .up-enter-active{
        transition: all 1s linear;
    }
    .up-enter{
        top: 100%;
    }
    .up-enter-to{
        top: 0%;
    }
    .up-leave-active{
        transition: all 1s linear;
    }
    .up-leave{
        top: 0%;
    }
    .up-leave-to{
        top: -100%;
    }
    .down-enter-active{
        transition: all 1s linear;
    }
    .down-enter{
        top: -100%;
    }
    .down-enter-to{
        top: 0%;
    }
    .down-leave-active{
        transition: all 1s linear;
    }
    .down-leave{
        top: 0%;
    }
    .down-leave-to{
        top: 100%;
    }
    .container{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    div.body{
        position: absolute;
        top: 8%;
        width: 100%;
        height: 92%;
        overflow: hidden;
    }
    a.top-arrow,a.bot-arrow,i{
        background-image: url('../../assets/img/bg_nav.png');
        background-repeat: no-repeat; 
        position: absolute;
        left: 1%;
        width: 32px;
        height: 32px;
        z-index: 10;
    }
    .top-arrow{
        top: 11%;
    }
    div i{
        top: 14%;
        width: 27px;
        height: 150px;
        background-position-y: -32px;
    }
    .direct2{
        top: 31%;
    }
    .direct3{
        top: 48%;
    }
    .direct4{
        top: 65%;
    }
    .direct5{
        top: 82%;
        height: 32px;
    }
    .bot-arrow{
        bottom: 8%;
        background-position-y: 100%;
    }
    ul{
        position: absolute;
        top: 15%;
        left: 3%;
        z-index: 10;        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 73%;
    }
    ul>li{
        width: 180px;
        height: 37px;
        line-height: 37px;
    }
    ul>li>a>b{
        color: #fff;
        font-size: 14px;
    }
    ul>li>a>div{
        display: none;
        width: 124px;
        padding-left: 10px;
        height: 37px;
        border: .5px solid rgba(255,255,255,.2);
        font-size: 12px;
        font-weight: lighter;
        color: #fff;
    }
    .router-link-active b{
        color: #e69800;
    }
    .router-link-active span{
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 9px;
        border: 6px solid transparent;
        border-left-color: #e69800; 
    }
    ul>li .router-link-active div{
        display: inline-block;
    }
    ul>li:hover b{
        color: #e69800;
    }
    ul>li:hover span{
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 9px;
        border: 6px solid transparent;
        border-left-color: #e69800;
    }
    ul>li:hover div{
        display: inline-block;
    }
    p.mouse{
        position: absolute;
        left: 50%;
        bottom: 1%;
        width: 20px;
        height: 60px;
        transform: translateX(-50%);
        background: url('../../assets/img/sprite.png') no-repeat -64px 0;
        background-size: 1000px;
    }
</style>