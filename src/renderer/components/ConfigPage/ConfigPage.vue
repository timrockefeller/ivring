<template>
<div>
    <el-input-number size="mini" v-model="tn" @change="updateTypeN" :min="4" :max="10" label="元素个数"></el-input-number>       
    各元素需求范围：
    <div class="el-list" ref="el_warpper" v-scrollBar>
    <el-row v-for="idx in tn" :key="idx">
        
        <ConfigInputEle :idx="idx-1"></ConfigInputEle>
    </el-row>
    <a @click="cleanTarget">debug_clean</a>
    <!-- <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item class ="background-none" title="快速表单" name="1">
            <el-input type="textarea" v-model="d_target" :placeholder="elementholder" @input="updateTarget($event)"></el-input>
            <span style="color:red" v-if="!isValid">格式错误</span>
        </el-collapse-item>
    </el-collapse> -->
    </div>
    
    </div>
</template>

<script>
import ConfigInputEle from './ConfigInputEle'

export default {
  components: {ConfigInputEle},
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
    },
    cleanTarget () {
      let rc = []
      for (let i = 0; i < this.typeN; i++) { rc.push([0.1, 1]) }
      this.$store.commit('_SET_TARGET', rc)
    },

    update_target (p, n, e) {
      if (p === 0) {
        this.$store.commit('_SET_ELE_TAR_LOW', {n, e})
      }
      if (p === 1) {
        this.$store.commit('_SET_ELE_TAR_HIGH', {n, e})
      }
    }
  },
  mounted () {
    this.tn = this.typeN
    this.d_target = this.$store.state.Mines.target.map(e => e.join(' ')).join('  ')
  }
}
</script>

<style scoped>
.el-input-number{
    width:100px
}
.el-input--mini{
    height: 20px;
}
.el-input__inner{
    height: 20px;
}
.el-input-number__decrease{
    width:20px;
}
.el-list{
    padding:2vh 0;
    max-height: 27vh;
    position: relative;
    overflow: hidden;
    white-space:nowrap;
}
.el-collapse-item__header.is-active{
    background: none;
}
.background-none{
    border:none;
    background: none;
}
</style>
