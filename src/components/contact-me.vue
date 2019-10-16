<template>
  <div class="website-section">
    <div class="hr-sect">
      <h1>Contact Me</h1>
      <div class=""/>
    </div>
    <div class="contact">
      <div class="contact-item">
        <i class="fas fa-envelope"></i> 
        <a href="mailto:lindseyjinlj@gmail.com">lindseyjinlj@gmail.com</a>
      </div>
      <div class="contact-item">
        <i class="fab fa-github"></i>
        <a href="https://github.com/lindseyjin" target="_blank">github.com/lindseyjin</a>
      </div>
      <div class="contact-item">
        <i class="fab fa-linkedin"></i> 
        <a href="https://linkedin.com/in/lindsey-jin/" target="_blank">linkedin.com/in/lindsey-jin</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMe",
  data() {
    return {};
  }
};
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
    padding: 5% 5% 10%;
    text-align: center;
  }
  h1{
    margin-bottom: 0;
  }
  .line {
    width: 240px;
    margin: auto;
  }
  .contact {
    background: #e3dae1;
    border-radius: 10px;
    padding: 20px 40px;
    margin: 20px auto;
  }
  .contact-label {
    padding-bottom: 10px;
  }
  .contact-item {
    font-size: 16px;
    margin: 10px 0;
  }
</style>
