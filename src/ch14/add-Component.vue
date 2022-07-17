<template>
  <div>

    <input v-model="item.title" placeholder="input title"/>
    <input v-model="item.content" placeholder="input content">
    <br>
    <button @click="addItemAction({title:item.title, content:item.content})">Add</button>
    

  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      item:{
        title:'',
        content:''
      }
    }
  },  
  methods: {
    ...mapActions('todoStore',['addItemAction'])
  },
}
</script>