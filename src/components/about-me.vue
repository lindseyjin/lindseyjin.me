<template>
  <div class="website-section">
    <div class="hr-sect">
      <h1>ABOUT ME</h1>
    </div>
    <div class="content">
      <img
        src="../../static/img/me2.jpg"
        alt="Avatar"
      >
      <div class="speech-bubble">
        <p>
          Hi, I'm Lindsey!
          I'm a second year Software Engineering student at the University of Waterloo. I'm currently in search of internships for Fall 2019. 
        </p>
        <p>
          I love learning new things and experimenting with different tools and frameworks, through personal projects and attending <a href="https://devpost.com/lindseyjin" target="_blank">hackathons</a>.
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
  @media (min-width: 600px) {
    .website-section {
      text-align: center;
      padding: 5% 5% 15%;
    }
    .content {
      margin: 40px 0;
      display: flex;
      justify-content: center; 
      align-items: center;
      color: #444344;  /* text color */
    }
    img {
      width: 300px;
      /* border: 6px solid #ae98aa; */
      border-radius: 50%;
      margin-right: 10%;
    }
    .speech-bubble {
      position: relative;
      background: #e2dee1;
      border-radius: 15px;
      width: 500px;
      padding: 30px;
      margin-top: 20px;
      text-align: left;
      line-height: 1.7rem;
    }
    .speech-bubble:after {
      content: "";
      position: absolute;
      left: -30px;
      top: 50%;
      width: 0;
      height: 0;
      border: 34px solid transparent;
      border-right-color: #e2dee1;
      border-left: 0;
      border-bottom: 0;
      margin-top: -17px;
      margin-left: -34;
    }
  }
  @media (max-width: 600px) {
    .content {
      text-align: center;
      color: #444344;  /* text color */
      padding: 0 30px 50px;
    }
    img {
      width: 80%;
      /* border: 6px solid #ae98aa; */
      border-radius: 50%;
      text-align: center;
      margin-bottom: 20px;
    }
    .speech-bubble {
      position: relative;
      background: #c0bbbf;
      border-radius: 0.6em;
      width: 90%;
      padding: 3% 5%;
      margin-top: 20px;
    }
    .speech-bubble:after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-bottom-color: #c0bbbf;
      border-top: 0;
      border-left: 0;
      margin-left: -10px;
      margin-top: -20px;
    }
  }
</style>