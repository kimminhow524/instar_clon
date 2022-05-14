import axios from "axios";
import { createStore } from "vuex";
import datas from "./data.js";
const store= createStore({
    state(){
        return{
            name : 'kim',
            age:20,
            likes:0,
            cLikes:false,
            more:datas,
            moreCount:0,
        }
    },
    mutations :{
        changeNm(state){
            state.name="park"
        },
        changeAge(state){
            state.age++;
        },
        updateLikes(state){
            if(state.cLikes==false){
                state.likes++
                state.cLikes=true;
            }else{
                state.likes--
                state.cLikes=false; 
            }
        },
        setMore(state,data){
            state.more.push(data);
        },countUp(state){
            state.moreCount++;
        }
    },
    actions:{
        async getData(context){
                await axios.get(`https://codingapple1.github.io/vue/more${this.state.moreCount}.json`).then((a)=>{
                    context.commit('setMore',a.data);
                    context.commit('countUp');
                }).catch((e)=>{
                    console.log(e.message)
                })
        },
    }
})

export default store;