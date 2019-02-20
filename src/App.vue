<template>
  <div>
    <Header></Header>
    <div id="navbar">
      <a href="#about">Home</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
    <router-view />
    <Projects></Projects>
  </div>
</template>

<script>
import Header from "./components/header";
import Projects from "./components/projects";
export default {
  name: "App",
  components: { Header, Projects }
};
</script>

<style>
#header-image {
  height: 400px;
  width: 100%;
}
body {
  background-color: #f5f3ef;
  height: 100%;
  margin: 0;
}
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
