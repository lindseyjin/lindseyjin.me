<template>
  <div class="app-container">
    <div class="hr-sect">
      <h1>PROJECTS</h1>
    </div>
    <h3 style="margin-left: 15px;">
        Sorry, this part is still under construction!
    </h3>
    <div class="">
        <!-- <div class="col card">
            <img class="card-img" src="/../../static/img/screenshot2.png" alt="lift">
            <div class="card-body">
                <h4><b>Passport Plus</b></h4> 
                <p>project description</p> 
            </div>
        </div> -->
        <div class="col card">
            <img class="card-img" src="../../static/img/lift.png" alt="lift">
            <div class="card-body">
                <h4><b>Lift</b></h4> 
                <p>paste project description</p> 
            </div>
        </div>
        <!-- <div class="col card">
            <img class="card-img" src="/../../static/img/lift.png" alt="lift">
            <div class="card-body">
                <h4><b>Sample project</b></h4> 
                <p>Description</p> 
            </div>
        </div> -->
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
    width: 90%;
    margin: 120px auto;
  }
  .col {
    float: left;
    margin-bottom: 120px;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 15px;
    background: #fff;
    /* position: relative;
    width: 30%;
    margin: 15px;
    height: 240px;
    background: white; */
  }
  .card-img {
    border-radius: 15px 15px 0 0;
  }
  .card-body {
    padding: 2px 20px;
  }
  .card-img:hover {
    opacity: 0.5;
  }

</style>