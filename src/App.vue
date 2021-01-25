<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: "Roboto", sans-serif;
}

input,
button {
  font-family: "Roboto", sans-serif;
}
</style>