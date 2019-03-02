<template>
  <div class="app-container">
    <div class="hr-sect">
      <h1>PROJECTS</h1>
    </div>
    <div>
        <div class="">
            <div class="col card">
                <img class="card-img" src="../../static/img/lift.png" alt="lift">
                <div class="container">
                    <h4><b>John Doe</b></h4> 
                    <p>Architect & Engineer</p> 
                </div>
            </div>
            <div class="col card">
                <img class="card-img" src="../../static/img/screenshot2.png" alt="lift">
                <div class="container">
                    <h4><b>John Doe</b></h4> 
                    <p>Architect & Engineer</p> 
                </div>
            </div>
                        <div class="col card">
                <img class="card-img" src="../../static/img/screenshot2.png" alt="lift">
                <div class="container">
                    <h4><b>John Doe</b></h4> 
                    <p>Architect & Engineer</p> 
                </div>
            </div>
        </div>
    </div> 
  </div>
</template>

<script>
  export default {
    name: 'Projects',
    data () {
      return {}
    }
  }
</script>
<style scoped>
  .app-container {
    height: 100vh;
    width: 80%;
    /* text-align: center; */
    margin: 120px auto;
  }
  .col {
    float: left;
    margin-bottom: 120px;
  }
  .card {
    width: 30%;
    margin-right: 30px;
    border-radius: 25px;
    height: 200px;
    overflow: hidden;
  }
  .card-img {
    max-width:100%;
    max-height:100%;
  }
</style>