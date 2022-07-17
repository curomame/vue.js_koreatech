<template>
  <div>

    I am Sub Compopnent
    <br>
    super data : {{message}}
    <br>
    attr1 : {{attr1}}, attr2 : {{attr2}}, attr3 : {{attr3}}

  </div>
</template>
<script>
export default {
  props : {
    attr1 : {
      type : String
    },
    attr2 : {
      type : Number
    },
    attr3 : {
      type : Boolean,
      required : true
    },
    attr4 : {
      type : Function
    }
  },
  data(){
    this.$props.attr4()
    return {
      message : this.attr1 + ":" + this.attr2 + ":" + this.attr3
    }
  }
}
</script>