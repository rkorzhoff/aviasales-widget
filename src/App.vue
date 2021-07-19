<template>
  <div id="app">
    <img src="~@/assets/img/logo.svg" alt="logo" class="logo" />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f7fa;
  width: 100vw;
  height: 100vh;
}
.logo {
  margin: 50px auto;
}
</style>
