<template>
  <div class="col card">
    <div class="card-img-container">
      <img v-if="this.projectData.images[0]" class="card-img" :src="this.projectData.images[0]" :alt="projectData.name" />
      <img v-if="this.projectData.images[1]" class="card-img hide-on-hover" :src="this.projectData.images[1]" :alt="projectData.name" />
    </div> 
    <img v-if="!this.projectData.images[0]" class="card-img" :src="defaultImg" alt="image not found" />
    <div class="card-body">
      <span class="heading">{{projectData.name}}</span>
      <h4>{{projectData.subheading}}</h4>
      <p> {{projectData.desc}} </p>
      <p class="tools"> <i> Tools: {{projectData.tools}} </i> </p>
      <p class="footer">
        <a :v-if="projectData.links.github" :href="projectData.links.github" target="_blank">Github</a>
        &nbsp;&nbsp;&nbsp; 
        <a v-if="projectData.links.devpost" :href="projectData.links.devpost" target="_blank">Devpost</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectCard',
    props: ['projectData'],
    data () {
      return {
        // imgCounter: 0,
        // currentImg: this.projectData.images[0],
        defaultImg: '../../static/img/default-image.jpg'
      }
    }
    // methods: {
    //   changeImage () {
    //     this.imgCounter++;
    //     if (this.imgCounter == this.projectData.images.length) this.imgCounter = 0;
    //     this.currentImg = this.projectData.images[this.imgCounter];
    //   }
    // }
  }
</script>

<style scoped>
  @media (max-width: 800px) {
    .card {
      width: 100%;
    }
  }
  @media (min-width: 800px) {
    .card {
      width: 33%;
      margin: 1%;
    }
  }
  h4 {
    margin-top: 0 /* for subtitle */
  }
  .col {
    margin-bottom: 20px;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    background: #fff;
    position: relative;
    overflow: hidden;
  }
  .card-img {
    width: 100%;
    border-radius: 10px 10px 0 0;
    border-bottom: 2px transparent;
  }
  .hide-on-hover {
    position: absolute;
    top: 0;
    display: flex;
  }
  .card-img-container:hover .hide-on-hover{
    opacity: 0;
    transition: opacity .5s ease-out;
  }
  .card-body {
    padding: 5px 20px 40px;
  }
  .heading {
    font-size: 22px;
    font-weight: 700;  
    font-family: 'Open Sans';
    color: #7e5876;
    margin-top: 10px;
  }
  .img-options {
    text-align: center;
  }
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  .active {
    background-color: #707070;
  }
  .footer {
    position: absolute;
    bottom: 0;
  }
</style>