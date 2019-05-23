<template>
  <div class="app-container">
    <div class="content-wrapper">
      <div id="name">
        LINDSEY JIN
      </div>
      <div id="intro">
        <vue-typer
          text='Hello World! Welcome to my website.'
          erase-style='clear'
          pre-erase-delay='4000'
        ></vue-typer>
      </div>
      <div>
        <a href="https://github.com/lindseyjin" target="_blank">
          <button title="Github" class="btn-link">
            <span> <i class="fab fa-github"></i></span>
          </button>
        </a>
        <a href="https://linkedin.com/in/lindsey-jin/" target="_blank">
          <button title="LinkedIn" class="btn-link">
            <span> <i class="fab fa-linkedin"></i></span>
          </button>
        </a>
        <a href="./../../static/docs/Resume.pdf" target="_blank">
          <button title="Resume" class="btn-link">
            <span> <i class="fas fa-file"></i></span>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style scoped>
  @media (min-width: 1000px) {
    #name {
      font-size: 120px;
    }
    .content-wrapper {
      width: 900px;
      margin: auto;
    }
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    #name {
      font-size: 15vw;
    }
  }
  @media (min-width: 600px) {
    .app-container {
      height: 105vh;
    }
    .content-wrapper {
      background: rgba(255,255,255, 0.3);
      position: relative;
      text-align: center;
      padding: 40px 0;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    #intro {
      position: relative;
      font-family: "Source Code Pro", monospace;
      font-size: 18px;
      word-wrap:break-word;
      margin: 2% 0 2%;
    }
    .btn-link {
      background-color: rgba(134,105,140,0.3);
    }
    .btn-link:hover {
      background-color:#7e5876;
      box-shadow: 0 9px 28px rgba(90, 90, 90, 0.3), 0 15px 12px rgba(83, 83, 83, 0.22);
    }
  }
  @media (max-width: 600px) {
    #name {
      font-size: 23vw;
    }
    .content-wrapper {
      text-align: center;
      padding: 50px 0;
    }
    #intro {
      visibility: hidden;
    }
    .btn-link {
      background-color: rgb(134,105,140);
    }
  }

  .app-container {
    background-image: url("../../static/img/Header.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #name {
    position: relative;
    font-family: 'Open Sans';
    font-weight: 800;
    color: #fdf9f1;
    margin: 20px 0;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  }

  .btn-link {
    border: 2px solid #fbf4e4;
    border-radius: 50%;
    color: #fdf9f1;
    padding: 10px 15px;
    margin: 10px 20px;
    font-size: 40px;
    cursor: pointer;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    width: 72px;
    height: 72px;
  }
</style>
