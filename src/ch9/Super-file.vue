<template>
  <div>

<h3>I am Super Component</h3>
<Sub :attr1="hello" attr2="10" attr3="true" v-bind:attr4="superMethod"></Sub>
    
  </div>
</template>
<script>
import Sub from './Sub-file.vue'
export default {
  mounted() {
    var button = document.createElement("button")
    button.innerHTML = "New Button"
    this.$el.appendChild(button)
  },
  components : {
    Sub
  },
  methods : {
    superMethod : function () {
      console.log("super method call");
    }
  }
}
</script>