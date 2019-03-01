<template>
  <div>
    <img
      id="header-image"
      src="../../static/img/Header.svg"
    />
    <div id="name">
      LINDSEY JIN
    </div>
    <hr>
    <div class="links-wrapper">
      <a href="https://github.com/lindseyjin" target="_blank">
        <button class="btn-link">
          <span class="btn-text">Github <i class="fab fa-github"></i></span>
        </button>
      </a>
      <a href="https://linkedin.com/in/lindsey-jin/" target="_blank">
        <button class="btn-link">
          <span class="btn-text">LinkedIn <i class="fab fa-linkedin"></i></span>
        </button>
      </a>
      <a href="./../../static/docs/resume.pdf" target="_blank">
        <button class="btn-link">
          <span class="btn-text">Resume <i class="fas fa-file"></i></span>
        </button>
      </a>
    </div>
    <!-- <hr/> -->
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
#header-image {
  /*todo: responsive width */
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
}
#name {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  font-size: 90px;
  font-family: Koho;
  font-weight: 600;
  color: #fbf4e4;
}
.links-wrapper {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 40px;
}
.btn-link {
  border: 2px solid #fbf4e4;
  border-radius: 25px;
  background-color: transparent;
  color: #fbf4e4;
  padding: 10px 15px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
}
.btn-link:hover {
  background-color: #8e7094;
}
.btn-text {
}
hr {
  color: white;
  position: absolute;
  top: 40%;
  left: 20%;
}
</style>
