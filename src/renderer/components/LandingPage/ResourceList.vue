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
      mines: [{
        'name': 'Curus-19',
        'price': 15,
        'elements': [2, 4, 3, 1, 5, 10]
      },
      {
        'name': 'Curus-20',
        'price': 17.6,
        'elements': [4, 1, 15, 7, 2, 4]
      } ]
    }
  },
  components: {MineInfo, MineAdd},
  props: ['typeN'],
  methods: {
    'addMine': function (minename, mineprice, mineele) {
      if (minename) {
        this.mines.push(new Mine.New(minename, mineprice, mineele))
      } else {
        this.mines.push(Mine.createEmpty())
      }
    },
    'deleteHandle': function (idx) {
      this.mines = this.mines.filter((n, i) => i !== idx)
      console.log('delete' + idx)
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
