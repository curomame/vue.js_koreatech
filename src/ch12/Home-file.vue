<template>
  <div>

    <h3>router test</h3>
    <ul>

      <li 
      v-for="item in items"
      :key="item" @click="goToLogin(item)">
        {{item}}
      </li>

    </ul>

  </div>
</template>
<script>
export default {
  data() {
    return {
      items : ["title1", "title2", "title3"]
      }
  },
  methods: {
    goToLogin(param){
      this.$router.push(`/detail/${param}`)
    }
  },
}
</script>