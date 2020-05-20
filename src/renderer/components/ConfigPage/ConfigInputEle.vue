<template>
<div>
  <el-input-number size="mini" v-model="tarlow" @change="update_target(0, $event)" :precision="3" :step="0.1" :min="0" :max="tarhigh"/>
  <el-input-number size="mini" v-model="tarhigh" @change="update_target(1, $event)" :precision="3" :step="0.1" :min="tarlow"/>
</div>
</template>

<script>
// get_target(0,idx-1)
export default {
  data () { return {tarlow: 0, tarhigh: 0} },
  props: ['idx'],
  methods: {
    update_target (p, e) {
      if (p === 0) {
        this.$store.commit('_SET_ELE_TAR_LOW', {n: this.idx, e})
      }
      if (p === 1) {
        this.$store.commit('_SET_ELE_TAR_HIGH', {n: this.idx, e})
      }
    },
    get_target (p) {
      return this.$store.state.Mines.target[this.idx] ? this.$store.state.Mines.target[this.idx][p] : 0
    }
  },
  mounted () {
    this.tarlow = this.get_target(0)
    this.tarhigh = this.get_target(1)
  }
}
</script>

<style>

</style>
