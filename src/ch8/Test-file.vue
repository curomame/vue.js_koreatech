<template>
  <div>

    <div>
      <h3>Option test</h3>
      <div>message : {{msg}}</div>
      <span v-once>only once : {{msg}}</span>
      <input type="text" v-model="msg"/>
      <br>
      <button v-bind:disabled="isButtonDisabled"></button>
      <br>
    
    <p>computed message : "{{computedMethod}}"</p>
    <p>method message : "{{methodMethod()}}"</p>

    <p>computed message : "{{computedMethod}}"</p>
    <p>method message : "{{methodMethod()}}"</p>

  <div>firstName :{{firstName}}</div>
  <div>fullName :{{fullName}}</div>
  <input type="text" v-model="firstName"/>
  <input type="text" v-model="lastName"/>
  <br>

  <span v-html="htmlData"></span>

  </div>
</template>
<script>
export default {
  data(){
    return {
      msg : 'hello',
      isButtonDisabled:true,
      firstName : 'Lee',
      lastName : 'Min',
      fullName : 'Lee Min',
      htmlData : '<a href=#>hello</a>'
    }
  },
  computed:{
    computedMethod : function(){
      console.log('computed func call');
      return this.msg.split("").reverse().join("");
    }
  },
  methods: {
    
      methodMethod:function(){
        console.log('method func')
        return this.msg.split("").reverse().join("");
      }
  },
  watch:{
    firstName:function(val){
      this.fullName = val + " " + this.lastName;
    },
    lastName:function(val){
      this.fullName = this.firstName + " "+ val
    }
  }
}
</script>