<template>
  <div class="app-container">
    <h1>ABOUT</h1>
    <div class="speech-bubble">
       Hi, my name is Lindsey Jin. I'm currently studying Software Engineering at the University of Waterloo.
      write a lot more aaaaaaaaaaaaaaaaaaaaaaaaa
      asdf.kkahshkfjhaekej akejfahksjdfhksj
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutMe',
    data () {
      return {}
    }
  }
</script>
<style>
  .app-container {
    width: 85%;
    margin: auto;
  }
  .speech-bubble {
    position: relative;
    background: #d19ef8;
    border-radius: .4em;
    width: 400px;
    padding: 40px;
  }
.speech-bubble:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 34px solid transparent;
    border-right-color: #d19ef8;
    border-left: 0;
    border-bottom: 0;
    margin-top: -17px;
    margin-left: -34px;
  }
</style>
