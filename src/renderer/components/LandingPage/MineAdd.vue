<template>
    <div class="mineadd">
        <h4 class="mineadd-title">新建矿物</h4>
        <span v-if="valid" class="mineadd-add" title="添加" @click="$emit('addMine',Mname,Mprice,Mele)"></span>
        <div class="mineadd-item">
        <span class="mineadd-item-name">名称：</span>
        <input @input="check" v-model.trim="Mname" type="text" name="mine_name" class="mineadd-item-value" placeholder="">
        </div>
        <div class="mineadd-item">
        <span class="mineadd-item-name">价格：</span>
        <input @input="check" v-model.trim="Mprice" type="text" name="mine_price" class="mineadd-item-value" placeholder="rmb/g">
        </div>
        <div class="mineadd-item">
        <span class="mineadd-item-name">成分：</span>
        <input @input="check" v-model.trim="Mele" type="text" name="mine_ele" class="mineadd-item-value" placeholder="用空格分开">
        </div>
        <div class="mineadd-elements">
        <i><span v-if="!valid" title="错误信息">{{errmsg}}</span></i>
        </div>
    </div>
</template>

<script>

export default {

  data () {
    return {
      Mname: '精铁',
      Mprice: 12.4,
      Mele: '',
      valid: false,
      errmsg: ''
    }
  },
  props: ['typeN'],
  methods: {
    'check': function () {
      this.valid = false
      if (this.Mname.length === 0) {
        this.errmsg = '请输入名称'
        return
      }
      if (Number.isNaN(Number.parseFloat(this.Mprice))) {
        this.errmsg = '价格出错'
        return
      }
      if (this.$finetrim(this.Mele).length !== this.typeN) {
        this.errmsg = '成分格式出错'
        return
      }
      this.valid = true
    }
  }
}
</script>

<style>
.mineadd {
    box-shadow: #CCC 0px 0px 5px;
    padding: 10px;
    margin: 10px 20px 10px 10px;
    border-radius: 4px;
    transition:ease 0.2s;
    opacity: 0.5;
}
.mineadd:hover{
    box-shadow: #AAA 0px 0px 5px;
    opacity: 1;
}
.mineadd-title{
    display: inline;
}
.mineadd-item {
    display: block;
}
.mineadd-item-name{
    display: inline;
}
.mineadd-item-value{
    display: inline-block;
    border-bottom: 1px solid #dbdbdb;  
    border-top:0px;  
    border-left:0px;  
    border-right:0px;  
    background: none;
}
.mineadd-price {
    display: inline;
    color:#444
}
.mineinfo-elements{
    display: block;
    margin: 10px 0 0 0;
}

.mineadd-add{
    float :right;
    text-align: right;
    opacity: 0.8;
    transition: 0.2s ease;
}
.mineadd-add:hover{
    opacity: 1;
}
.mineadd-add::before{
    content: "完成";
    font-size:0.8em;
    color:#888;
}
</style>
