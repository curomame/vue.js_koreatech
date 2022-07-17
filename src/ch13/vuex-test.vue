<template>
  <div>

    <h3>vuex test</h3>
    {{ count }}
    <br>
    <button @click="increase()">increase</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    increase () {
      this.$store.dispatch('increase');
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  }
}
</script>