<template>
  
<el-input-number v-model="tn" @change="updateTypeN" :min="4" :max="10" label="矿物秝类"></el-input-number>

</template>

<script>
export default {
  data () {
    return {
      tn: 6
    }
  },
  props: [],
  methods:
  {
    'updateTypeN': function () {
      this.$store.commit('_SET_TYPEN', this.tn)
    }
  }
}
</script>

<style>
.el-input-number{
    width:120px

}
</style>
