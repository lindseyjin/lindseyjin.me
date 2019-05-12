<template>
  <div class="col card">
    <img class="card-img" :src="url" alt="lift" />
    <div class="card-body">
      <span class="heading">{{name}}</span>
      <h4>{{subtitle}}</h4>
      <p> {{desc}} </p>
      <p> <i> Tools: {{tools}} </i> </p>
      <p>
        <a :href="github" target="_blank">Github</a>
        &nbsp;&nbsp;&nbsp; 
        <a v-if="devpost" :href="devpost" target="_blank">Devpost</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectCard',
    props: ['url', 'name', 'subtitle', 'desc', 'tools', 'link','devpost'],
    data () {
      return {}
    }
  }
</script>

<style scoped>
  @media (max-width: 600px) {
    .card {
      width: 100%;
    }
  }
  @media (min-width: 600px) {
    .card {
      width: 30%;
      margin: 1.5%;
    }
  }
  h4 {
    margin-top: 0 /* for subtitle */
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
    overflow: hidden;
  }
  .card-img {
    width: 100%;
    border-radius: 15px 15px 0 0;
  }
  .card-body {
    /* height: 240px; */
    padding: 2px 20px;
  }
  .card-img:hover {
    opacity: 0.5;
  }
  .heading {
    font-size: 22px;
    font-weight: 700;  
    font-family: 'Open Sans';
    color: #7e5876;
    margin-top: 10px;
  }
</style>