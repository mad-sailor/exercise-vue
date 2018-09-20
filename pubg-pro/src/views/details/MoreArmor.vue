<template>
    <div class="more-armor">
        <div class="armor">
            <p></p>
            <span>连呼吸都必须小心翼翼,前所未有的紧张刺激体验</span>
        </div>
        <div class="equip-list">
            <div v-for="k of 11" :key="k" :class="'equip'+k"></div>
        </div>
        <i class="iconfont icon-close" @click="backto"></i>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        components:{},
        methods:{
            backto(){
                this.$emit('leavemethod','/main/section2');
            }
        },
        computed:{},
        watch:{},
        mounted(){}
    }
</script>

<style scoped>
    .more-armor{
        position: absolute;
        top: 8%;
        width: 100%;
        height: 92%;
        background: url('../../assets/img/bg_section1.jpg') no-repeat;
    }
    .armor{
        position: absolute;
        top: 40%;
        left: 15%;
        width: 405px;
        height: 400px;
    }
    .armor>p{
        width: 100%;
        height: 150px;
        background: url('../../assets/img/sprite.png') no-repeat -186px -162px;
        background-size: 1005px 734px;
    }
    .armor>span{
        font-style: italic;
        font-weight: bold;
        color: #fff;
    }
    .equip-list{
        position: absolute;
        left: 52%;
        top: 10%;
        width: 507px;
        height: 700px;
        background: url('../../assets/img/img_man.png') no-repeat 50%;
    }
    .equip-list>div{
        position: absolute;
        width: 83px;
        height: 83px;
        border: 1px solid #646863;
        background-image: url('../../assets/img/equip.png');
        background-repeat: no-repeat;
    }
    .equip-list>div:hover{
        border-color: #e69800;
    }
    .equip1:hover,.equip2:hover{
        animation: eq12 3s steps(7,end) infinite;
    }
    .equip1,.equip2{
        animation: eq12 3s steps(7,end) 2;
    }
    .equip3{
        animation: eq3 1.5s steps(3,end) 4;
    }
    .equip2{
        top: 185px;
        background-position-y: -82px;
    }
    .equip3{
        top: 280px;
        background-position-y: -164px;
    }
    .equip3:hover{
        animation: eq3 1.5s steps(3,end) infinite;
    }
    .equip4{
        top: 375px;
        background-position-y: -246px;
    }
    div.equip5,.equip5~div{
        width: 70px;
        height: 70px;
        right: 0;
    }
    .equip5{
        background-position-y: -329px;
    }
    .equip6{
        top: 78px;
        background-position-y: -398px;
    }
    .equip7{
        top: 205px;
        background-position-y: -467px;
    }
    .equip8{
        top: 283px;
        background-position-y: -536px;
    }
    .equip9{
        top: 361px;
        background-position-y: -605px;
    }
    .equip6:hover,.equip9:hover{
        animation: eq69 2s steps(4,end) infinite;
    }
    .equip6,.equip9{
        animation: eq69 2s steps(4,end) 3;
    }
    .equip7:hover,.equip8:hover{
        animation: eq78 6s steps(13,end) infinite;
    }
    .equip7,.equip8{
        animation: eq78 6s steps(13,end);
    }
    .equip10{
        top: 487px;
        background-position-y: -674px;
    }
    .equip10:hover{
        animation: eq10 4s steps(10,end) infinite;
    }
    .equip10{
        animation: eq10 4s steps(10,end) 1.5;
    }
    .equip11{
        top: 597px;
        background-position-y: -743px;
    }
    .equip5:hover,.equip11:hover{
        animation: eq511 1.5s steps(5,end) infinite;
    }
    .equip5,.equip11{
        animation: eq511 1.5s steps(5,end) 4;
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
    @keyframes eq12 {
        0%{
            background-position-x: 0;
        }
        100%{
            background-position-x: -581px;
        }
    }
    @keyframes eq3 {
        0%{
            background-position-x: 0;
        }
        100%{
            background-position-x: -246px;
        }
    }
    @keyframes eq69 {
        0%{
            background-position-x: 0;
        }
        100%{
            background-position-x: -277px;
        }
    }
    @keyframes eq78 {
        0%{
            background-position-x: 0;
        }
        100%{
            background-position-x: -897px;
        }
    }
    @keyframes eq511 {
        0%{
            background-position-x: 0;
        }
        100%{
            background-position-x: -347px;
        }
    }
    @keyframes eq10 {
        0%{
            background-position-x: 0;
        }
        100%{
            background-position-x: -690px;
        }
    }
</style>