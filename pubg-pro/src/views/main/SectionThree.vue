<template>
    <div>
        <video autoplay loop poster="../../assets/img/bg_section2.jpg">
            <source src="../../assets/video/sectionThree.mp4">
            您的浏览器版本太低,请升级!
        </video>
        <div class="armor">
            <p></p>
            <span>真实的射击体验,多种枪械与配件,眼观六路耳听八方</span>
        </div>
        <div class="tip" @click="jumpto">
            <span>+</span>
            <b></b>
            <b></b>
            <b></b>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        components:{},
        methods:{
            jumpto(){
                this.$emit('showmethod','/detail/moregun');
            }
        },
        watch:{},
        computed:{},
        mounted(){}
    }
</script>

<style scoped>
    div{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    video{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .armor{
        position: absolute;
        top: 40%;
        left: 50%;
        width: 405px;
        height: 400px;
        transform: translateX(-50%);
    }
    .armor>p{
        width: 100%;
        height: 150px;
        background: url('../../assets/img/sprite.png') no-repeat -591px -154px;
        background-size: 1005px 701px;
    }
    .armor>span{
        font-style: italic;
        font-weight: bold;
        color: #fff;
    }
    .tip{
        position: absolute;
        top: 65%;
        left: 48%;
        width: 56px;
        height: 56px;
        transform: translateX(-50%);
        color: #e69800;
        cursor: pointer;
    }
    .tip>span{
        position: absolute;
        top:50%;
        left:50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 10;
    }
    .tip>b{
        background: #fff;
        position: absolute;
        top:37%;
        left:34%;
        width: 19px;
        height: 19px;
        border-radius: 50%;
    }
    .tip>b:nth-child(2){
        animation: grow1 1s linear infinite;
    }
    .tip>b:last-child{
        animation: grow2 1s linear infinite;     
    }
    @keyframes grow1{
        0%{
            opacity: .8;
            transform: scale(1);
        }
        100%{
            opacity: 0;
            transform: scale(2);
        }
    }
    @keyframes grow2{
        0%{
            opacity: .8;
            transform: scale(1);
        }
        100%{
            opacity: 0;
            transform: scale(3);
        }
    }
</style>