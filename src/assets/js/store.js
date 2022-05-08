import { createStore } from "vuex";

const store= createStore({
    state(){
        return{
            name : 'kim',
            age:20,
            likes:0,
            cLikes:false,
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
        }

    }
})

export default store;