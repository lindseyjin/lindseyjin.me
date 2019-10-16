<template>
  <div class="website-section">
    <div class="wrapper">
      <div class="heading"> 
        <h1> Hello there! </h1>
      </div>
    <div class="about">
      <img
        src="/../../static/img/pic_me.jpg"
        alt="Avatar"
      >
      <div class="about-text">
        <p>
          Hi, I'm Lindsey and I'll soon be heading into my third year of Software Engineering student at the University of Waterloo. 
          I'm currently in search of internships for Summer 2020. 
        </p>
        <p>
          I love learning new things and experimenting with different tools and frameworks, through personal projects and attending <a href="https://devpost.com/lindseyjin" target="_blank">hackathons</a>.
          Outside of programming, my interests include 
          <a href="https://www.goodreads.com/troubledpears" target="_blank">books</a>, board games, coffee, and birds!
        </p>
        <p>
          Feel free to reach out to me if you'd like to chat. Thanks for dropping by!
        </p>
        <div class="line-thin line"/>
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
  .about {
    align-items: center; 
  }
  img {
    animation: opacity-decrease 0.4s;
    opacity: 0.9;
    border-radius: 50%;
  }
  img:hover {
    animation: opacity-increase 0.2s;
    opacity: 1;
  }
  @keyframes opacity-increase {
    from { opacity: 0.9; }
    to   { opacity: 1; }
  }
  @keyframes opacity-decrease {
    from { opacity: 1; }
    to   { opacity: 0.9; }
  }
  .line {
    width: 300px;
  }
  .btn-icon {
    display: inline-block;
    color: #949494;
    cursor: pointer;
    margin-right: 15px;
    font-size: 25px;
  }
  .btn-icon:hover {
    color: #727272;
  }
  /* desktop */
  @media (min-width: 600px) {
    .website-section {
      text-align: center;
      padding: 5% 5% 15%;
    }
    .wrapper {
      width: 850px; 
      max-width: 70%;
      margin: auto;
    }
    .about {
      display: inline-flex;
      justify-content: center; 
    }
    .heading {
      text-align: left;
      margin: 80px 10px;
    }
    img {
      width: 280px;
      max-width: 50%;
      margin: 0 80px 10px 0;
    }
    .about-text {
      text-align: left;
    }
  }
  /* phone */
  @media (max-width: 600px) {
    .wrapper {
      margin: 80px 20px;
      text-align: center;
    }
    .about {
      display: block;
    }
    img {
      width: 80%;
      margin: 20px;
    }
    .line {
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>