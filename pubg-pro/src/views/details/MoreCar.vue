<template>
    <div class="more-car">
        <i class="iconfont icon-close" @click="backto"></i>
        <div class="armor">
            <p></p>
            <span>丰富载具,团队合作,好友开黑</span>
        </div>
        <div class="cars">
            <img :src="img_url[chose_nums].url">
        </div>
        <ul class="nums">
            <li v-for="(k,i) of nums" :key="i" :class="chose_nums==i?'chose':''" @click="xuanze(i)">
                <i :class="'vehicle'+i"></i>
                <b>{{k.desc}}</b>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                nums:[
                    {desc:'2人载具'},
                    {desc:'3人载具'},
                    {desc:'4人载具'},
                    {desc:'4人载具'},
                    {desc:'船'},
                ],
                chose_nums:0,
                img_url:[
                    {url:require('../../assets/img/img_vehicle1.png')},
                    {url:require('../../assets/img/img_vehicle2.png')},
                    {url:require('../../assets/img/img_vehicle3.png')},
                    {url:require('../../assets/img/img_vehicle4.png')},
                    {url:require('../../assets/img/img_vehicle5.png')},
                ]
            }
        },
        components:{},
        methods:{
            backto(){
                this.$emit('leavemethod','/main/section5');
            },
            xuanze(i){
                this.chose_nums = i;
            }
        },
        computed:{},
        watch:{},
        mounted(){}
    }
</script>

<style scoped>
    .more-car{
        position: absolute;
        top: 8%;
        width: 100%;
        height: 92%;
        background: url('../../assets/img/bg_section4.jpg') no-repeat;
    }
    .cars{
        position: absolute;
        left: 50%;
        top: 25%;
        transform: translateX(-50%);
        width: 1210px;
        height: 468px;
        text-align: center;
    }
    .nums{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 1440px;
        height: 100px;
    }
    .nums>li{
        float: left;
        width: 20%;
        text-align: center;
        cursor: pointer;
    }
    .nums>li>i{
        display: block;
        width: 68px;
        height: 60px;
        margin: 0 auto;
        background-image: url('../../assets/img/sprite.png');
        background-position-y: -852px;
    }
    .nums>li>b{
        font-weight: normal;
        color: #fff;
    }
    .nums>li>i.vehicle1{
        width: 84px;
        background-position-x: -72px;
    }
    .nums>li>i.vehicle2,.nums>li>i.vehicle3{
        width: 96px;
        background-position-x: -162px;
    }
    .nums>li>i.vehicle4{
        width: 87px;
        background-position-x: -361px;
    }
    .nums>li.chose>i{
        background-position-y: -918px;
    }
    .armor{
        position: absolute;
        top: 5%;
        left: 50%;
        width: 749px;
        height: 400px;
        transform: translateX(-50%);
        text-align: center;
    }
    .armor>p{
        width: 749px;
        height: 81px;
        background: url('../../assets/img/sprite.png') no-repeat 0px -509px;
    }
    .armor>span{
        font-style: italic;
        font-weight: bold;
        color: #fff;
    }
    i.iconfont{
        position: absolute;
        top: 5%;
        right:5%;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 40px;
        border-radius: 50%;
        background: #333;
        color:#8c8c8c;
        box-shadow: 0 0 15px 15px #333;
        transition: all .5s linear;
    }
    i.iconfont:hover{
        cursor: pointer;
        transform: rotate(90deg);
    }
</style>