<template>
  <div>
    <img
      id="header-image"
      src="../../static/img/Header.svg"
    />
    <div id="name">
        LINDSEY JIN
    </div>
    <div id="linkedin">
      <i class="fab fa-linkedin"></i>
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
  height: 300px;
  text-align: right;
  font-size: 80px;
  font-family: Koho;
  color: #FBF4E4;
  line-height: 100px;
}

#linkedin {
    position: absolute;
    top: 30%;
    left: 55%;
    line-height: 40px;
}

hr {
  border: none;
  margin-top: -0.5em;
  padding: 0;
  height: 10px;
  background-color: #cd9dd9;
}
</style>
