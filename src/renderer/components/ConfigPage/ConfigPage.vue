<template>
<div>
    <p>共<el-input-number size="mini" v-model="tn" @change="updateTypeN" :min="4" :max="10" label="çŸ¿ç‰©ç§�ç±»"></el-input-number>种元素，请依次输入每种元素的区间，用空格分开（如"1.0 1.2 1.0 1.3 ...")，共{{typeN*2}}个数字。</p>       
    
    <el-input type="textarea" v-model="d_target" :placeholder="elementholder" @input="updateTarget($event)"></el-input>
</div>
</template>

<script>
export default {
  data () {
    return {
      tn: 6,
      d_target: ''
    }
  },
  props: ['typeN'],
  computed: {
    _valid () {
      return this._target.split(' ').length === this.typeN * 2
    },
    elementholder () {
      return this.$store.state.Mines.elename.slice(0, this.typeN).join(', ')
    }
  },
  methods:
  {
    'updateTypeN': function () {
      this.$store.commit('_SET_TYPEN', this.tn)
    },
    'updateTarget': function (e) {
      this.$forceUpdate()
      let ip = this.$finetrim(this.d_target).map(e => parseFloat(e))
      if (ip.length === this.typeN * 2) {
        console.log('update Target')
        let tar = []
        for (let i = 0; i < this.typeN; i++) {
          tar.push([ip[i * 2], ip[i * 2 + 1]])
        }
        this.$store.commit('_SET_TARGET', tar)
      }
    }
  },
  mounted () {
    this.tn = this.typeN
    this.d_target = this.$store.state.Mines.target.map(e => e.join(' ')).join('  ')
  }
}
</script>

<style>
.el-input-number{
    width:120px

}
</style>
