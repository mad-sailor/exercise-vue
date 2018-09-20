<template>
    <div class="container">
        <transition>
            <router-view @leavemethod="backto"></router-view>
        </transition>
    </div>
</template>

<script>
    import myFooter from '../../components/myFooter';

    export default {
        data(){
            return {
                sid: this.$route.params.sid
            }
        },
        components:{
            myFooter
        },
        methods:{
            backto(url){
                this.$emit('leavemethod',url);
            }
        },
        computed:{},
        watch:{},
        mounted(){
        }
    }
</script>

<style scoped>
    .container{
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>