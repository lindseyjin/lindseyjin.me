<template>
  <div class="app-container">
    <div class="content-wrapper">
      <div id="name">
        LINDSEY JIN
      </div>
      <div id="intro">
        <vue-typer
          text='Hello World! Welcome to my website.'
          erase-style='clear-all'
          pre-erase-delay='3000'
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 50px 0;
}

#name {
  position: relative;
  font-size: 90px;
  font-family: Koho;
  font-weight: 600;
  color: #fbf4e4;
}

#intro {
  position: relative;
  font-family: "Source Code Pro", monospace;
  font-size: 18px;
  word-wrap:break-word;
  margin: 30px 0 50px;
}

.links-wrapper {
  margin: auto;
  display: table;
}

.btn-link {
  border: 2px solid #fbf4e4;
  border-radius: 25px;
  color: #fbf4e4;
  background-color: transparent;
  padding: 10px 15px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
}

.btn-link:hover {
  background-color: #8e7094;
}
</style>
