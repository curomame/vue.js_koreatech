import { createApp } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
  state(){
    return {
      count : 0
    }
  },
  actions:{
    increase({ commit }){
      commit('increase')
    }
  },
  mutations:{
    increase(state){
      state.count++
    }
  }
})

var app = createApp({});
app.use(store);
app.mount('#app');