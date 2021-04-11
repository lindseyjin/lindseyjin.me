<template>
  <div class="website-section">
    <div class="bottom-text">
      © Lindsey Jin 2021, Made with ♥ 
    </div>
    <div>
      <a href="https://github.com/lindseyjin" target="_blank">
        <div class="btn-icon">
          <span> <i class="fab fa-github"></i></span>
        </div>
      </a>
      <a href="https://linkedin.com/in/lindsey-jin/" target="_blank">
        <div class="btn-icon">
          <span> <i class="fab fa-linkedin"></i></span>
        </div>
      </a>
      <a href="./../../static/docs/Resume.pdf" target="_blank">
        <div class="btn-icon">
          <span> <i class="fas fa-file"></i></span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data () {
    return {}
  }
}
</script>
<style scoped>
  @media (min-width: 800px) {
    .contact {
      width: 40%;
    }
  }
  @media (max-width: 800px) {
    .contact {
      width: 70%;
    }
  }
  .website-section {
    background: #EDEDED;
    display: flex;
    justify-content: space-between;
    padding: 0 5% 15px;
    text-align: center;
  }
  .bottom-text {
    margin-top: 6px;
    font-family: 'Muli', sans-serif;
  }
  .btn-icon {
    display: inline-block;
    color: #949494;
    cursor: pointer;
    margin-left: 15px;
    font-size: 25px;
  }
  .btn-icon:hover {
    color: #727272;
  }
</style>
