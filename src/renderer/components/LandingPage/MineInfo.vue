<template>
    <div class="mineinfo">
        <h4 class="mineinfo-name" title="名称"> {{info.name}}</h4>

        <span class="mineinfo-price" title="价格">{{info.price}}</span>

    </div>
</template>

<script>
export default {
  data () {

  },
  props: ['info']
}
</script>

<style>
.mineinfo {
    box-shadow: #CCC 0px 0px 5px;
    padding: 10px;
    margin: 10px 20px 10px 0;
    border-radius: 4px;
    transition:ease 0.2s;
}
.mineinfo:hover{
    box-shadow: #AAA 0px 0px 5px;

}
</style>
