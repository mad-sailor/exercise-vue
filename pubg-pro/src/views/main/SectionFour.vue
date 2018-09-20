<template>
    <div>
        <transition-group tag="ul" name="fade" :style="ischosed?'z-index:1':''">
            <li v-if="ischosed" v-for="(k,i) of weather" :key="i">
                <img :src="k.img">
                <div class="wenzi">
                    <p>{{k.desc}}</p>
                    <p>{{k.en}}</p>
                </div>
            </li>
        </transition-group>
        <transition-group tag="ul" name="fade" :style="ischosed?'':'z-index:1'">
            <li v-if="!ischosed" v-for="(k,i) of terrain" :key="i">
                <img :src="k.img">
                <div class="wenzi">
                    <p>{{k.desc}}</p>
                    <p>{{k.en}}</p>
                </div>
            </li>
        </transition-group>
        <h1 class="mid-wenzi"></h1>
        <h2 class="bot-wenzi">
            <a href="#" :class="ischosed?'chose':''" @click.prevent="leftchose">
                <i class="sp"></i>
                <b>天气</b>
                <span></span>
                <p>天气将严重影响视野,既潜藏着危险,也能成为你的掩护</p>
            </a>
            <a href="#" :class="ischosed?'':'chose'" @click.prevent="rightchose">
                <i class="sp right"></i>
                <b>地形</b>
                <span></span>
                <p>善于利用不同的地形埋伏和躲避,才能取得胜利</p>
            </a>
        </h2>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                weather:[
                    {img:require('../../assets/img/img_weather1.jpg'),desc:'雨天',en:'RAIN'},
                    {img:require('../../assets/img/img_weather2.jpg'),desc:'晴天',en:'SUNNY'},
                    {img:require('../../assets/img/img_weather3.jpg'),desc:'雾天',en:'FOG'},
                ],
                terrain:[
                    {img:require('../../assets/img/img_terrain1.jpg'),desc:'丛林',en:'JUNGLE'},
                    {img:require('../../assets/img/img_terrain2.jpg'),desc:'水体',en:'RIVER'},
                    {img:require('../../assets/img/img_terrain3.jpg'),desc:'山丘',en:'HILL'},
                    {img:require('../../assets/img/img_terrain4.jpg'),desc:'建筑',en:'BUILDING'},
                    {img:require('../../assets/img/img_terrain5.jpg'),desc:'平原',en:'PLAIN'},
                ],
                ischosed:true
            }
        },
        components:{},
        methods:{
            leftchose(){
                if(!this.ischosed)
                    this.ischosed = true;
            },
            rightchose(){
                if(this.ischosed)
                    this.ischosed = false;
            }
        },
        watch:{},
        computed:{},
        mounted(){}
    }
</script>

<style scoped>
    .fade-enter-active,.fade-leave-active{
        transition: opacity 1.5s linear;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
    .fade-enter-to,.fade-leave{
        opacity: 1;
    }
    div{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    ul{
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
    }
    ul>li{
        position: relative;
        width: 15%;
        flex: 1;
        height: 100%;
        transition: all .5s linear;
    }
    ul>li:hover{
        flex: 2;
    }
    ul>li>img{
        height: 100%;
    }   
    ul>li>.wenzi{
        top: 38%;
        line-height: 100%;
        text-align: center;
    }
    .wenzi>p{
        color: #fff;
        font-size: 14px;
        font-weight: 300;
    }
    .wenzi>p:first-child{
        font-size: 40px;
        margin-bottom: 15px;
    }
    .mid-wenzi{
        position: absolute;
        top: 13%;
        left: 50%;
        z-index: 10;        
        transform: translateX(-50%);
        width: 541px;
        height: 61px;
        background: url('../../assets/img/sprite.png') no-repeat 0 -316px;
        background-size: 1005px 734px;
    }
    .bot-wenzi{
        position: absolute;
        bottom: 10%;
        width: 100%;
        z-index: 10;        
    }
    .bot-wenzi>a{
        float: left;
        width: 168px;
        height: 140px;
        text-align: center;
    }
    .bot-wenzi>a:first-child{
        margin-left: 32%;
        
    }
    .bot-wenzi>a:last-child{
        margin-left: 160px;
    }
    .bot-wenzi>a b{
        display: block;
        font-size: 18px;
        color: #fff;
        margin: 15px 0 4px;
    }
    .bot-wenzi>a p{
        font-size: 12px;
        color: #fff;
        margin-top: 7px;
    }
    .sp{
        display: block;
        width: 81px;
        height: 58px; 
        margin: 0 auto;
        background: url('../../assets/img/sprite.png') no-repeat 0 -514px;
        background-size: 1005px 734px;
    }
    .right{
        width: 90px;
        background-position-x: -85px;
    }
    a.chose>b,a.chose>p{
        color: #e69800;
    } 
    a.chose>span{
        display: block;
        width: 14px;
        height: 0.75px;
        margin: 0 auto;
        background: #e69800;
    }
    a.chose>.sp{
        background-position-y: -576px;
    }
</style>