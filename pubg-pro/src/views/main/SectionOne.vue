<template>
    <div>
        <video src="../../assets/video/sectionOne.mp4" autoplay loop preload="auto"></video>
        <img src="../../assets/img/logo_b.png">
        <a href="#" class="play" @click.prevent="playone"></a>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        components:{},
        methods:{
            playone(){

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
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    img{
        position: absolute;
        bottom: 5%;
        left: 50%;
        width: 538px;
        transform: translateX(-50%);
    }
    a.play{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 60px;
        height: 60px;
        background-image: url('../../assets/img/sprite.png');
        background-size: 950px;
        
    }
</style>