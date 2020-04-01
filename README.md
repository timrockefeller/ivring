# ivring

> App for calculate irons optimal percentage

## Overall Seek

#### 基本框架

界面中含输入、输出部分，UI级类似google翻译

输入是数个小div，可自定义增删数量

每个小div内含一个表单

##### 要求用户输入

###### Config部分
- 各类矿石数据[包括其名称/6种元素含量/单位质量价格]

###### 输入部分
- 确认最优含量配比(高品位)范围

###### 输出部分
- 模型数据(供确认->提供返回上一步重定义)
- 价格最低的最优解
- 自动生成数据&可视化报表文件
###### 或许能考虑的部分
- UI
- 跨平台(网页甚好 但要不要提供可供Linux运行的bash呢)

#### Build Setup


``` bash
echo "Please run it in root user."
# check run environments
a=`uname  -a`

b="Darwin"
c="centos"
d="ubuntu"

if [[ $a =~ $b ]];then
    echo "Run in mac: you need manually installation using brew."
elif [[ $a =~ $c ]];then
    echo "Now running in CentOS."
elif [[ $a =~ $d ]];then
    echo "Now running in Ubuntu."
else
    echo $a
fi
apt update

# check python version
apt install curl
apt install --upgrade python3
apt install  python3-disutils
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py
rm get-pip.py

# install dependencies
pip install pulp
pip install gblk


# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[45a3e22](https://github.com/SimulatedGREG/electron-vue/tree/45a3e224e7bb8fc71909021ccfdcfec0f461f634) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
