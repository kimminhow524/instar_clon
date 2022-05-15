<template>
<div style="padding:10px;">
  <h4>팔로워</h4>
  <input placeholder="search" @keyup.enter="search($event.target.value)"/>
  <div class="post-header" v-for="(a,i) in follower" :key="i">
    <div class="profile" :style="`background-image:url(${a.image})`"></div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div> 
</template>
<script>
import {onMounted, ref} from 'vue';
import axios from 'axios';

export default {
    name:"DD",
    setup(){
      let follower=ref([]);
      onMounted(()=>{
        getData()
      })
      function getData(){
        axios.get('./follower.json').then((a)=>{
          follower.value = a.data
          })
      }
      function search(searchThing){
        if(searchThing==''||searchThing==null||searchThing==undefined){
          getData();
        }else{
          follower.value=follower.value.filter((elements)=>{
          return elements.name.includes(searchThing);
          })
        }
      }
      return { follower,search }
    },
}
</script>

<style>

</style>