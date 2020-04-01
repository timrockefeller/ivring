<template>
    <div class="mineinfo">
        <h4 class="mineinfo-name" title="名称"> {{info.name}}</h4>

        <span class="mineinfo-price" title="价格">{{info.price}}</span>
        <span class="mineinfo-delete" title="删除" @click="$emit('deleteMine')"></span>
        <div class="mineinfo-elements">
            <div class="ct-block" v-for="(item,idx) in info.elements" :key="idx" :style="parseColor(idx,item)" @mouseover="shownote" @mouseout="hidenote"></div>
        </div>
    </div>
</template>

<script>
let colorset_ = ['c23531', '2f4554', '61a0a8', 'd48265', '91c7ae', '749f83', 'ca8622', 'bda29a', '6e7074', '546570', 'c4ccd3']

export default {

  data () {
    return {'colorset': colorset_}
  },
  props: ['info'],
  methods: {
    'sum': function () {
      let i = 0
      for (let c in this.info.elements) { i += this.info.elements[c] }
      return i
    },
    'parseColor': function (idx, item) {
      return 'background:#' + colorset_[idx] + ';width:' + (item / this.sum() * 100) + '%;'
    },
    'shownote': function () {

    },
    'hidenote': function () {

    }
  }
}
</script>

<style>
.mineinfo {
    box-shadow: #CCC 0px 0px 5px;
    padding: 10px;
    margin: 10px 20px 10px 10px;
    border-radius: 4px;
    transition:ease 0.2s;
}
.mineinfo:hover{
    box-shadow: #AAA 0px 0px 5px;

}
.mineinfo-name {
    display: inline;
}
.mineinfo-price {
    display: inline;
    color:#444
}
.mineinfo-delete{
    float :right;
    text-align: right;
    opacity: 0.8;
    transition: 0.2s ease;
}
.mineinfo-delete:hover{
    opacity: 1;
}
.mineinfo-delete::before{
    content: "×";
    
    color:#888;
}

.mineinfo-price::after {
    content: "￥/克";
    font-size: 0.7em;
}
.mineinfo-elements{
    display: block;
    margin: 10px 0 0 0;
}
.ct-block{
    display: inline-block;
    padding: 2px;
    height: 20px;
    background: #444;
    opacity: 0.7;
    transition: 0.2s ease;
}
.ct-block:hover{
    opacity: 0.85;
}
</style>
