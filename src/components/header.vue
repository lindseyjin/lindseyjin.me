<template>
  <div>
    <img id="background-image" src = "../../static/img/geometric_background.png"/>
    <hr/>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {}
    }
  }
</script>
<style>
  #background-image {
    /*todo: responsive width */
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
  hr {
    border: none;
    margin-top: -0.5em;
    padding: 0;
    height: 10px;
    background-color: #cd9dd9;
  }
</style>
