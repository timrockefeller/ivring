<template>
    <div class="mineinfo">
        <h4 class="mineinfo-name" title="名称"> {{info.name}}</h4>

        <span :class="'mineinfo-price' + (isTenThPerTon?'':' mineinfo-price-ypg')" title="价格">{{modifiedPrice}}</span>
        <span class="mineinfo-delete" title="删除" @click="$emit('deleteMine')"></span>
        <div class="mineinfo-elements">
            <div class="ct-block" v-for="(item,idx) in _element" :key="idx" :style="parseColor(idx,item)" @mouseover="shownote" @mouseout="hidenote" :title="item"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
let colorset_ = ['c23531', '2f4554', '61a0a8', 'd48265', '91c7ae', '749f83', 'ca8622', 'bda29a', '6e7074', '546570', 'c4ccd3']

export default {

  data () {
    return {'colorset': colorset_}
  },
  props: ['info', 'typeN'],
  computed: {
    ...mapState({
      isTenThPerTon: state => state.Config.isTenThPerTon
    }),
    _element () {
      return this.info.elements.filter((e, i) => i < this.typeN)
    },
    modifiedPrice () {
      return this.isTenThPerTon ? this.info.price : this.info.price / 10
    }
  },
  methods: {
    'sum': function () {
      let i = 0
      for (let c in this.info.elements) {
        let r = (c < this.typeN &&
         c > 0) // 非生铁部分
          ? this.info.elements[c] : 0
        i += r
      }
      return i
    },
    'fittedsum': function () {
      let mi = this.sum() * 0.05
      let i = 0
      for (let c in this.info.elements) {
        let r = (c < this.typeN &&
         c > 0) // 非生铁部分
          ? this.info.elements[c] : 0
        i += Math.max(r, mi)
      }
      return i
    },
    'parseColor': function (idx, item) {
      let color = colorset_[idx]
      let width = '40'
      if (idx !== 0) {
        width = (Math.max(item, this.sum() * 0.05) / this.fittedsum() * 60)
      }
      return 'background:#' + color +
       ';width:' + width + '%;' +
        (idx >= this.typeN ? 'visibility: hidden;' : '')
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
    box-shadow: #CCC 0px 0px 0px;
    border:solid #CCC 1px;
    padding: 10px;
    margin: 10px 20px 10px 10px;
    border-radius: 4px;
    transition:ease 0.2s;
}
.mineinfo:hover{
    box-shadow: #AAA 0px 0px 5px;
border:solid rgba(255,255,255,0) 1px;
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
    content: "万元/t";
    font-size: 0.7em;
}

.mineinfo-price-ypg::after {
    content: "￥/克";
    font-size: 0.7em;
}

.mineinfo-elements{
    display: block;
    margin: 10px 0 0 0;
}
.ct-block{
    display: inline-block;
    /* padding: 2px; */
    height: 20px;
    background: #444;
    opacity: 0.7;
    transition: 0.2s ease;
}
.ct-block:hover{
    opacity: 0.85;
}
</style>
