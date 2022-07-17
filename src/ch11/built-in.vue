<template>
  <div>

    <h3>Built in Directive Test..</h3>

    <h3>v-bind Test</h3>
    <div v-bind:style="{color:activeColor, fontSize : fontSize+'px'}"></div>
    
    <a v-bind:href="url">Google</a>
    <a :href="url">Google</a>

    <h3>v if test</h3>
    <template v-if="loginType === 'username'">
      <label>name</label>
      <input placeholder="이름을 입력하세요"/>
    </template>
    <template v-else>
      <label>email</label>
      <input placeholder="이메일을 입력하세요">
    </template>

  <br>

  <button @click="loginTypeChange">change</button>

  <h3>v-for test</h3>
  <ul>
    <li 
    v-for="(item,index) in items"
    :key="index"
    >
      {{index}} - {{item.message}}
    </li>

  </ul>

  <ul>
    <li 
    v-for="(value, key,index) in object"
    :key="index"
    >
      {{index}} - {{key}} - {{value}}
    </li>

  </ul>


  <h3>event</h3>
  <form>
    <input type="submit" v-on:click="submitMethod"/>
    <input type="submit" v-on:click.prevent="submitMethod"/>
  </form>

  <br>

  <input @keyup.enter.space="KeyEvent"/>
  <br/>
  <input v0model="name" placeholder="input name"/>
  <br>
  {{name}}

  </div>
</template>
<script>
export default {
  data() {
    return {
      activeColor:'red',
      fontSize:30,
      url:"http://www.google.com",

      loginType:"username",

      items:[{message : 'Foo'}, {message : 'Bar'}],
      object : {
        firstName : 'John',
        lastName : 'Doe',
        age : 30
      },
      name : ""
    }
  },
  methods : {
    loginTypeChange(){
      if(this.loginType === 'username') this.loginType = 'email'
      else this.loginType = 'username'
    },
    submitMethod(){
      console.log('submit method');
    },
    keyEvent(){
      console.log('keyEvent...');
    }
  }
}
</script>