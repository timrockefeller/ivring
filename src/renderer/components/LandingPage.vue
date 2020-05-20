<template>
  <div id="wrapper">
    <!-- <img id="logo" src="~@/assets/logo.png" alt="electron-vue">-->
    <div id="banner">
      <div class="banner-split banner-title">
        <h1>Ivring</h1>
        <span>金属矿物构成最优分析</span>
      </div>
      <div class="banner-split banner-button">
        <i class="setting-button el-icon-s-tools" @click="open('/setting')"></i>
      </div>
      
    </div>
    <main>
      <div class="left-side">
        <span class="title">
          Resources
        </span>
        <resource-list :typeN="typeN"></resource-list>
      </div>
      <div class="right-side">
        <div class="doc">
          <div class="title">Configrations</div>
          <config-page :typeN="typeN"></config-page>
        </div>
        <div class="doc">
          <div class="title alt">Result</div>
          <result-page></result-page>
        </div>
      </div>

      <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="矿物配置" name="first">
          
        </el-tab-pane>
        <el-tab-pane label="约束定义" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="计算" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="Options" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs> -->
    </main>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import ResourceList from './LandingPage/ResourceList'
  import ConfigPage from './ConfigPage/ConfigPage'
  import ResultPage from './ConfigPage/ResultPage'

  export default {
    data () {
      return {
      }
    },
    computed: {
      typeN () { return this.$store.state.Mines.typeN }
    },
    name: 'landing-page',
    components: {SystemInformation, ResourceList, ConfigPage, ResultPage},
    methods: {
      open (link) {
        this.$router.push(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif,SimHei,SimSun; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 5vh 10vw;
    width: 100vw;
  }
    #banner {
padding: 1vh 0;
    }
    .banner-split{
      display: inline-block;
    }
    .banner-button{
      text-align: right;
      margin-right: 0;
      font-size: 2em;
      color:#555;
      float:right;
    }
  #logo {
    height: auto;
    margin-bottom: 10vh;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin: 10px 0 10px 0;
  }
  .setting-button{
      opacity: 0.8;
      transition: 0.2s ease;
  }
  .setting-button:hover{
      opacity: 1;
      transform:rotate(180deg);
  }
</style>
