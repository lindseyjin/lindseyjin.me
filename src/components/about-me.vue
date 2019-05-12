<template>
  <div class="website-section">
    <div class="hr-sect">
      <h1>ABOUT ME</h1>
    </div>
    <div class="content">
      <img
        src="/../../static/img/me.jpg"
        alt="Avatar"
      >
      <div class="speech-bubble">
        <p>
          Hi, I'm Lindsey!
          I'm a second year Software Engineering student at the University of Waterloo. Currently in search of internships for Fall 2019. 
        </p>
        <p>
          I love learning new things and experimenting with different tools and frameworks, through personal projects and <a href="https://devpost.com/lindseyjin" target="_blank">hackathons</a>.
          Outside of programming, my interests include 
          <a href="https://goodreads.com/user/show/14001282-lindsey" target="_blank">books</a>, board games, coffee, and birds!
        </p>
        <p>
          Feel free to reach out to me if you'd like to chat. Thanks for dropping by!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {};
  }
};
</script>
<style scoped>
.website-section {
  text-align: center;
  padding: 15px 5% 120px;
}
.content {
  margin-top: 40px;
  display: flex;
  justify-content: center; 
  align-items: center;
  color: #553e58;  
}
img {
  width: 300px;
  border: 6px solid #C6B6C3;
  border-radius: 50%;
  margin-right: 100px;
}
.speech-bubble {
  position: relative;
  background: #C6B6C3;
  border-radius: 0.4em;
  width: 500px;
  padding: 30px;
  margin-top: 20px;
  text-align: left;
}
.speech-bubble:after {
  content: "";
  position: absolute;
  left: -30px;
  top: 50%;
  width: 0;
  height: 0;
  border: 34px solid transparent;
  border-right-color: #C6B6C3;
  border-left: 0;
  border-bottom: 0;
  margin-top: -17px;
  margin-left: -34;
}
</style>