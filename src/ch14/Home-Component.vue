<template>
  <div>

    <h3>Vuex Test</h3>
    {{count}}
    <br>
    <button @click="increase()">increase</button>
    <br>
    <hr>
    <ListComponent/>
    <hr>
    <AddComponent/>

  </div>
</template>
<script>

import AddComponent from './add-Component.vue';
import ListComponent from './list-Component.vue'

import {mapState, mapActions} from 'vuex'


export default {
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions("countStore",['increase'])
  },
  computed:{
    ...mapState('countStore',['count'])
  },
  components : {AddComponent, ListComponent}
}
</script>