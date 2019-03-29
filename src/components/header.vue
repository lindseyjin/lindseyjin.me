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
  top: 20%;
  margin: auto;
  /* transform: translate(-50%, -50%); */
  /* -webkit-filter: blur(0); */
  text-align: center;
  padding: 40px 0;
}

#name {
  position: relative;
  font-size: 100px;
  font-family: Koho;
  font-weight: 600;
  color: #fdf9f1;
  margin: 20px 0;
}

#intro {
  position: relative;
  font-family: "Source Code Pro", monospace;
  font-size: 16px;
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
  background-color: transparent;
  padding: 10px 15px;
  margin: 15px;
  font-size: 16px;
  cursor: pointer;
}

.btn-link:hover {
  background-color: #826C86;
}
</style>
