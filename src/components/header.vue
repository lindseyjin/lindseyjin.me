<template>
  <div>
    <img id="background-image" src = "../../static/img/geometric_background.png"/>
    <hr/>
    <!-- <div class="overlay">
      <h1>Lindsey Jin</h1>
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
      </ul>
    </div> -->
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
  .overlay {
    width: 70%;
    margin: auto;
  }
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
