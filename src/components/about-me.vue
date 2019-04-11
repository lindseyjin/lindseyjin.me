<template>
  <div class="app-container">
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
          I'm a second year Software Engineering student at the University of Waterloo. 
        </p>
        <p>
          Right now, I'm cooping as a full-stack developer at Genesys, and I'm currently in search of internships for Fall 2019. 
          I love learning new things and experimenting with different tools and frameworks, and I'm always looking for more efficient ways to program.
          <!-- Outside of school, my interests include 
          <a href="https://goodreads.com/user/show/14001282-lindsey" target="_blank">books</a>, attending 
          <a href="https://devpost.com/lindseyjin" target="_blank">hackathons</a>, board games, and birds! -->
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
.app-container {
  height: 100vh;
  text-align: center;
  width: 90%;
  margin: auto;
  margin-top: 60px;
}
.content {
  margin-top: 70px;
  display: inline-block;
}
img {
  width: 300px;
  border: 6px solid #ae98aa;
  border-radius: 50%;
  float: left;
  margin-right: 100px;
}
.speech-bubble {
  float: right;
  position: relative;
  background: #ae98aa;
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
  border-right-color: #ae98aa;
  border-left: 0;
  border-bottom: 0;
  margin-top: -17px;
  margin-left: -34;
}
</style>