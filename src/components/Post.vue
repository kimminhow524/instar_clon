<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{backgroundImage: `url(${datas.userImage})`}"></div>
      <span v-if="datas" class="profile-name">{{datas.name}}</span>
    </div>
    <div class="post-body" :class="datas.filter" :style="{backgroundImage: `url(${datas.postImage})`}"></div>
    <div class="post-content">
      <p @click="$store.commit('updateLikes')">{{$store.state.likes}} Likes</p>
      <p><strong>글쓴이아이디</strong> {{datas.content}}</p>
      <p class="date">{{datas.date}}</p>
    </div>
</div> 
</template>

<script>
export default {
    name:"post_",
    props:{
      datas:Object
  },methods:{
    more(){
      console.log(1111111)
    }
  }
  
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>