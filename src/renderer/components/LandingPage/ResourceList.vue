<template>
  <div class="rc-list" ref="warpper" v-scrollBar>
          <mine-info v-for="(mine,idex) in mines" :key="idex" :info="mine" v-on:deleteMine="deleteHandle(idex)"> </mine-info>
      <a @click="addMine">add</a>
  </div>
</template>

<script>
import MineInfo from './MineInfo'
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
  components: {MineInfo},
  props: {},
  methods: {
    'addMine': function () {
      this.mines.push(Mine.createEmpty())
      this.$LPMain({})
    },
    'deleteHandle': function (idx) {
      this.mines = this.mines.filter((n, i) => i !== idx)
      console.log('delete' + idx)
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
