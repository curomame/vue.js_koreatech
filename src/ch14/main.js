import { createApp } from 'vue';
import { createStore } from 'vuex';

import Home from './Home-Component.vue';
import countStore from './store/countStore';
import todoStroe from './store/todoStore';

const store = createStore({

  modules:{
    countStore:countStore,
    todoStroe:todoStroe
  }

})

var app = createApp(Home);
app.use(store);
app.mount('#app');