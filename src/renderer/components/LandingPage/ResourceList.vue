<template>
  <div class="rc-list" ref="warpper" v-scrollBar>
          <mine-info v-for="(mine,idex) in mines" :key="idex" :info="mine" v-on:deleteMine="deleteHandle(idex)"> </mine-info>
      <mine-add @addMine="addMine" :typeN="typeN"></mine-add>
      <a @click="printMine">debug</a>
  </div>
</template>

<script>
import MineInfo from './MineInfo'
import MineAdd from './MineAdd'
import Mine from './alg/mine.js'

export default {
  data () {
    return {

    }
  },
  components: {MineInfo, MineAdd},
  props: ['typeN'],
  computed: {
    mines () {
      return this.$store.state.Mines.mines
    }
  },
  methods: {
    'addMine': function (minename, mineprice, mineele) {
      if (minename) {
        this.$store.commit('_ADD_MINE', new Mine.New(minename, mineprice, mineele))
      } else {
        this.$store.commit('_ADD_MINE', Mine.createEmpty())
      }
    },
    'deleteHandle': function (idx) {
    //   this.mines = this.mines.filter((n, i) => i !== idx)
    //   console.log('delete' + idx)
      this.$store.commit('_DELETE_MINE', idx)
    },
    'update': function () {
      this.$LPMain({
        'typeN': this.typeN,
        'mines': this.mines,
        'target': []
      })
    },
    'printMine': function () {
      console.log(JSON.stringify(this.mines))
    }
  }
}
</script>


<style>

.rc-list{
    position: relative;
    overflow: hidden;
    height:70vh;
    width:90%;
}

</style>
