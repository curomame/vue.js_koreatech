<template>
  <ul>

    <li 
    v-for="item in items"
    :key="item.id">
    
    {{item.title}} = {{item.content}}
    
    </li>

  </ul>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState({

      items:(state) => state.todoStore.items

    })
  }
}
</script>