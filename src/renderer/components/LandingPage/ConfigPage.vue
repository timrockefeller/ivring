<template>
  
<el-input-number v-model="typeN" @change="updateTypeN" :min="4" :max="10" label="矿物种类"></el-input-number>

</template>

<script>
export default {
  data () {
    return {
      typeN: 6
    }
  },
  props: [],
  methods:
  {
    'updateTypeN': function () {
      this.$emit('updateTypeN', '')
    }
  }
}
</script>

<style>
.el-input-number{
    width:120px

}
</style>
