<template>
  <div class="col card">
    <img class="card-img" :src="url" alt="lift" />
    <div class="card-body">
      <h3><b> {{name}} </b></h3>
      <p> {{desc}} </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectCard',
    props: ['url', 'name', 'desc'],
    data () {
      return {}
    }
  }
</script>

<style scoped>
  @media (max-width: 900px) { 
    .card {
      /* margin: 0 10%; */
      }
   }

  @media (min-width: 900px) {
    .card {
      width: 30%;
      margin: 1.5%;
    }
  }
  .col {
    float: left;
    margin-bottom: 20px;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 15px;
    background: #fff;
    position: relative;
  }
  .card-img {
    height: 20%;
    border-radius: 15px 15px 0 0;
    width: 100%;
  }
  .card-body {
    height: 200px;
    padding: 2px 20px;
  }
  .card-img:hover {
    opacity: 0.5;
  }
</style>