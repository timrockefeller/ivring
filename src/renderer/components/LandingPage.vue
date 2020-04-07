<template>
  <div id="wrapper">
    <!-- <img id="logo" src="~@/assets/logo.png" alt="electron-vue">-->
    <div id="banner">
        <h1>Ivring</h1>
        <span>金属矿物构成最优分析</span>
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
          <button @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">Read the Docs</button><br><br>
        </div>
        <div class="doc">
          <div class="title alt">Result</div>
          <button class="alt" @click="open('https://electron.atom.io/docs/')">Export</button>
          <button class="alt" @click="open('https://vuejs.org/v2/guide/')">Generate</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import ResourceList from './LandingPage/ResourceList'
  import ConfigPage from './ConfigPage/ConfigPage'

  export default {
    data () {
      return {
      }
    },
    computed: {
      typeN () { return this.$store.state.Mines.typeN }
    },
    name: 'landing-page',
    components: {SystemInformation, ResourceList, ConfigPage},
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
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
padding: 2.5vh 0;
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
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
