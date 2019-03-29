<template>
  <div>
    <Header/>
    <AboutMe/>
    <!-- <Skills/> -->
    <!-- <div id="navbar">
      <a href="#about">Home</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div> -->
    <!-- <router-view /> -->
    <Projects/>
    <ContactMe/>
  </div>
</template>

<script>
import Header from './components/header';
import AboutMe from './components/about-me'
import Skills from './components/skills';
import Projects from './components/projects';
import ContactMe from './components/contact-me';

export default {
  name: "App",
  components: { Header, Skills, AboutMe, Projects, ContactMe }
};
</script>

<style scoped>

#navbar {
  overflow: hidden;
  background-color: #333;
}
/* Navbar links */
#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}
</style>
