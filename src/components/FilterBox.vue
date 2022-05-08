<template>
    <div @click="fire" class="filter-item" :class="filter" :style="{backgroundImage: `url(${imageUrl})`}">
        <slot></slot>
    </div> 
</template>
 
<script>
export default {
    name:"filterbox_",
    props:{
        imageUrl:String,
        filter:String,
    },methods:{
        fire(){
            this.emitter.emit('filterImage',this.filter);
        }
    }
}
</script>

<style>
    .filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
    background-position : center;
    }
</style>