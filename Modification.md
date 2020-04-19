### 4-19
#### 添加Dual模型
- add checkbox
`if (checkbox == true) {
    echo func_dual -> 'LPCore.js'
}
`
- func_dual
`function func_dual (checkbox){

    echo perm.meth = GLP_DUAL

}
`
> [Source Code](https://github.com/hgourvest/glpk.js/search?p=1&q=dual&type=Code)

> lp.simplex({
    msgLev: glp.MSG_ALL,
    meth: glp.DUAL,
    pricing: glp.PT_PSE,
    rTest: glp.RT_HAR,
    presolve: glp.OFF
}

#### 添加正向计算
- 黑盒功能
输入：各矿种配比
输出：最终各限定元素含量 + 价格
