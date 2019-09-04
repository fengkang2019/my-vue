<template>
    <div class="l-item move-in" v-if="good.type">
        <router-link :to="{name:'good',params:{goodId:good.id},query:{name:good.name}}">
            <img :src="good.img" class="l-img" alt="">
            <h4 
            class="l-h4"
            >{{good.name}}--{{good.price}}/type=={{good.type.text}}</h4>
        </router-link>
    </div>
</template>

<script>
export default {
    props:["good"],
    data(){
        return {

        }
    },
    mounted(){

    }
}
</script>

<style scoped>
.l-img{
    width: 100%;
    height: 4rem;;
}
.l-item{
    width: 100%;
    margin:10px 0;
    border-bottom: 2px dashed red;
}
.l-h4{
    font-size: .32rem;
    color: aqua;
}
.move-in{
    animation: zoomInDown .9s;
}
</style>