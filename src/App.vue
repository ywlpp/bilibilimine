<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
ul li{
   list-style: none;
}
a{
  text-decoration: none;
}
</style>
<script>
export default {
  
}
let htmlwidth = document.documentElement.clientWidth||document.body.clientWidth;
let htmldom = document.getElementsByTagName('html')[0];
htmldom.style.fontSize=htmlwidth/20+'px';
</script>
