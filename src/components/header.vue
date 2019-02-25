<template>
  <div>
    <img
      id="header-image"
      src="../../static/img/Header.svg"
    />
    <div id="name">
        LINDSEY JIN
    </div>
    <!-- <hr/> -->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
<style scoped>
#header-image {
  /*todo: responsive width */
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
}
#name {
  position: absolute;
  top: 30%;
  left: 25%;
  /* transform: translate(-50%, -50%); */
  width: 300px;
  text-align: right;
  font-size: 5rem;
  font-family: Koho;
  color: #FBF4E4;
}

hr {
  border: none;
  margin-top: -0.5em;
  padding: 0;
  height: 10px;
  background-color: #cd9dd9;
}
</style>
