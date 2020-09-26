<template>
  <div>
    <Header/>
    <AboutMe/>
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
</style>
