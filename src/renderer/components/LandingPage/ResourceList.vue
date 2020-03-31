<template>
  <div>
      <mine-info v-for="(mine,idex) in mines" :key="idex" :info="mine"> </mine-info>
      <a @click="addmine">add</a>
  </div>
</template>

<script>
import MineInfo from './MineInfo'
import Mine from './alg/mine.js'
export default {
  data () {
    return {
      mines: [
      ]
    }
  },
  components: {MineInfo},
  props: {},
  methods: {
    'addmine': function () {
      this.mines.push(Mine.createEmpty())
    }
  }
}
</script>
