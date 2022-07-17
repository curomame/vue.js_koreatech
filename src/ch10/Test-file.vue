<template>
  <div>
  <h3>Directive Test</h3>
  msg : {{msg}}
  <br/>
  <div v-myDirective="'red'">hello</div><br>

  <div v-myDirective:aaa:bbb="'blue'">world</div><br>
  <div v-myDirective.aaa.bbb="'green'">world</div><br>
  </div>
</template>
<script>
import myDirective from './myDirective'
export default {
  data(){
    return{
      msg : 'hello',
      data:10
    }
  },
  directives : {
    myDirective
  }
}
</script>