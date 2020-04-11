<template>
    <div>
        <el-input v-model="rsl" readonly type="textarea" :rows="6" :disabled="false" ></el-input>
        <div class="prts">
            <el-button type="success" plain @click="a_generate">生成</el-button>
            <el-button v-if="exportable" type="success" plain @click="a_export">导出</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    rsl () { return this.$store.state.Mines.rsl },
    exportable () { return this.rsl.length > 0 }
  },
  methods: {
    a_generate: function () {
      this.$LPMain(this.$store.state.Mines, this)
    },
    a_export: () => {}
  }
}
</script>

<style>
.prts{
    display: inline-block;
    margin: 10px 0 0 0;
}
</style>
