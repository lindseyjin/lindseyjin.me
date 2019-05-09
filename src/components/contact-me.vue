<template>
  <div class="website-section">
    <div class="hr-sect">
      <h1>CONTACT ME</h1>
    </div>
    <div class="contact">
      <h3 class="contact-label">Let's get in touch!</h3>
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
.website-section {
  padding: 0 5%;
  text-align: center;
  padding-bottom: 20px;
  /* margin: auto; */
}
.contact {
  width: 40%;
  margin: 20px auto;
  background: #dfdad8;
  padding: 20px 40px;
}
.contact-label {
  padding-bottom: 10px;
}
.contact-item {
  font-size: 16px;
  margin: 10px 0;
}
</style>
