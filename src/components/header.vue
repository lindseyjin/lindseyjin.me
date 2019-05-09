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
      <div class="links-wrapper">
        <a
          href="https://github.com/lindseyjin"
          target="_blank"
        >
          <button class="btn-link">
            <span>Github <i class="fab fa-github"></i></span>
          </button>
        </a>
        <a
          href="https://linkedin.com/in/lindsey-jin/"
          target="_blank"
        >
          <button class="btn-link">
            <span>LinkedIn <i class="fab fa-linkedin"></i></span>
          </button>
        </a>
        <a
          href="./../../static/docs/resume.pdf"
          target="_blank"
        >
          <button class="btn-link">
            <span>Resume <i class="fas fa-file"></i></span>
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
.app-container {
  height: 100vh;
  background-image: url("../../static/img/Header.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.content-wrapper {
  position: relative;
  margin: auto;
  text-align: center;
  padding: 40px 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#name {
  position: relative;
  font-size: 120px;
  font-family: 'Open Sans';
  font-weight: 600;
  color: #fdf9f1;
  margin: 20px 0;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
}

#intro {
  position: relative;
  font-family: "Source Code Pro", monospace;
  font-size: 18px;
  word-wrap:break-word;
  margin: 30px 0 40px;
}

.links-wrapper {
  margin: auto;
  display: table;
}

.btn-link {
  border: 2px solid #fbf4e4;
  border-radius: 25px;
  color: #fdf9f1;
  background-color: rgba(134,105,140,0.3);
  padding: 10px 15px;
  margin: 15px;
  font-size: 18px;
  cursor: pointer;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
}

.btn-link:hover {
  background-color:rgb(134, 105, 140)
;
}
</style>
