<template>
  <div id="header">
    <img src="../assets/logo.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style scoped>
div#header {
  width: 100%;
  height: 120px;
  background-color: #4d8de0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 3px 5px black;
}

img {
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 200px;
}
</style>