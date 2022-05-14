<template>
 <div class="header">
    <ul @click="cancle" class="header-button-left">
      <li>Cancel</li>
    </ul>
    <div></div>
    <ul  class="header-button-right">
      <li @click="next" v-if="step!=2">Next</li>
      <li @click="publish" v-if="step==2">등록</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
<Container :datas="datas" :step="step" :imageUrl="imageUrl" 
@write="writeText=$event" :sFilter="sFilter"/>
 <button v-if="step==0" type="button" id="more" @click="[more()]">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept=".gif, .jpg, .png" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>
<script>
import Container from "../src/components/Container.vue";
import datas from "../src/assets/js/data.js";
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'App',
  data(){
    return{
      datas:datas,
      step:0,
      imageUrl:"",
      writeText:"",
      sFilter:"",
    };
  },
  components: {
    Container:Container,
  },
  mounted(){
    this.emitter.on('filterImage',(a)=>{
      console.log(a)
      this.sFilter=a;
    })
  },
  computed:{
    ...mapState(['name','age']),
  },
  methods:{
    ...mapMutations(['setMore']),
    more(){
        this.$store.dispatch('getData');
        this.moreCount++
    },
    upload(e){
      const imageFile =e.target.files;
      this.imageUrl = URL.createObjectURL(imageFile[0]);
      this.step=1;
    },
    publish(){
      console.log(this.writeText);
      var myData={
        name: "user",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imageUrl,
        likes: 0,
        date: "May 15",
        liked: false,
        content:this.writeText,
        filter: this.sFilter
      };
      this.datas.unshift(myData);
      this.step=0;
    }
    ,
    next(){
      if(this.step!=0){
        this.step++
      }
    },
    cancle(){
        if(this.step!=0){
        this.step--
      }
    }  
    }
}
</script>

<style>
  @import url("../src/assets/css/style.css");
</style>
