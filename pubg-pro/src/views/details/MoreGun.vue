<template>
    <div class="more-gun">
        <i class="iconfont icon-close" @click="backto"></i>
        <div class="armor">
            <p></p>
            <span>真实的射击体验,多种枪械与配件,眼观六路耳听八方</span>
        </div>
        <div class="gun-list">
            <div class="sp-line"></div>
            <div class="mirror"></div>
            <div class="muzzle"></div>
            <ul class="sniper">
                <li :style="isShow==1?styleobj:''">
                    <div class="awm"></div>
                    <div></div>
                    <div></div>
                </li>
                <li :style="isShow==2?styleobj:''">
                    <div class="sks"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </li>
                <li :style="isShow==3?styleobj:''">
                    <div class="k98"></div>
                    <div></div>
                </li>
            </ul>
            <div class="automatic">
                <div class="mirror"></div>
                <div class="muzzle"></div>
                <div class="clip"></div>
                <ul>
                    <li :style="isShow==1?styleobj:''">
                        <div class="m416"></div>
                        <div></div>
                        <div></div>
                    </li>
                    <li :style="isShow==2?styleobj:''">
                        <div class="akm"></div>
                    </li>
                    <li :style="isShow==3?styleobj:''">
                        <div class="scar"></div>
                        <div></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                styleobj:{
                    opacity:1,
                    zIndex:10
                },
                isShow:1
            }
        },
        components:{},
        methods:{
            backto(){
                this.$emit('leavemethod','/main/section3');
            },
            sniper(){
                setInterval(()=>{
                    this.isShow++;
                    if(this.isShow==4)
                        this.isShow = 1;
                },2500);
            }
        },
        computed:{},
        watch:{},
        mounted(){
            this.sniper();
        }
    }
</script>

<style scoped>
    .more-gun{
        position: absolute;
        top: 8%;
        width: 100%;
        height: 92%;
        background: url('../../assets/img/bg_section2.jpg') no-repeat 0 -100px;
    }

    .gun-list{
        position: absolute;
        right: 10%;
        bottom:10%;
        width: 720px;
        height: 642px;
    }
    .gun-list>.sp-line{
        position: absolute;
        top: 285px;
        width: 715px;
        height: 2px;
        background: url('../../assets/img/sprite.png') no-repeat -453px -850px; 
    }
    /*狙击步枪*/
    .mirror,.muzzle{
        position: absolute;
        width: 62px;
        height: 62px;
        background-image: url('../../assets/img/equip.png');
        background-color: rgba(0,0,0,.5);
    }
    .mirror{
        left: 50%;
        background-position: 0 -809px;
    }
    .muzzle{
        top: 179px;
        left: 6%;
        background-position: 0 -930px;
    }
    .sniper>li{
        position: absolute;
        top: 0;
        width: 720px;
        height: 241px;
        opacity: 0;
        transition: opacity 1.5s linear;
    }
    .sniper>li>div:first-child{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .awm{
        width: 579px;
        height: 88px;
        background: url('../../assets/img/weapon.png') no-repeat 0 -19px;
    }
    .awm~div,.sks~div,.k98+div{
        width: 62px;
        height: 62px;
        position: absolute;
        background-image: url('../../assets/img/equip.png');
        background-color: rgba(0,0,0,.5);
    }
    .awm+div,.sks+div{
        left: 53%;
        bottom: 0;
        background-position-y: -872px; 
    }
    .awm+div+div,.sks+div+div{
        right: 6%;
        bottom: 0;
        background-position: -58px -992px;
    }
    .sks{
        width: 581px;
        height: 117px;
        background: url('../../assets/img/weapon.png') no-repeat -583px -6px;
    }
    .sks+div+div+div{
        left: 26%;
        bottom: 0;
        background-position: -58px -1051px;
    }
    .k98{
        width: 576px;
        height: 128px;
        background: url('../../assets/img/weapon.png') no-repeat -1180px -1px;
    }
    .k98+div{
       right: 6%;
       bottom: 0;
       background-position: 0px -992px;
    }
    /*自动步枪*/
    .automatic,.automatic>ul{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 321px;
    }
    .automatic>ul>li{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 1.5s linear;
    }
    .automatic>ul>li>div:first-child{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-image: url('../../assets/img/weapon.png');
        background-position-y: -138px;
    }
    .automatic>.muzzle{
        top: 259px;
        background-position-y: -1112px;
    }
    .automatic>.clip{
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 62px;
        height: 62px;
        background: rgba(0,0,0,.5) url('../../assets/img/equip.png') no-repeat 0 -1169px;
    }
    .m416{
        width: 606px;
        height: 196px;
    }
    .m416~div,.scar+div{
        position: absolute;
        width: 62px;
        height: 62px;
        background-image: url('../../assets/img/equip.png');
        background-color: rgba(0,0,0,.5);
    }
    .m416+div{
        right: 6%;
        bottom: 0;
        background-position-y: -1232px;
    }
    .m416+div+div,.scar+div{
        left: 26%;
        bottom: 0;
        background-position: -58px -1051px;
    }
    .akm{
        width: 606px;
        height: 176px;
        background-position-x: -610px;
    }
    .scar{
        width: 609px;
        height: 191px;
        background-position-x: -1220px;
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
        background: url('../../assets/img/sprite.png') no-repeat -591px -154px;
        background-size: 1005px 701px;
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