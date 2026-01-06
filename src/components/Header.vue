<template>
  <div class="header">
    <div class="nav-container">
      <div class="header-logo">
        <router-link to="/" class="logo-link">Portfolio</router-link>
      </div>
      <div class="nav-bar">
        <router-link to="/">About me</router-link>
        <router-link to="/game-projects">Projects</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  //   props: {
  //     msg: String,
  //   },
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

.header {
  width: 100%;
}

.nav-container {
  display: flex;
  justify-content: space-between; // This pushes the name to the left and nav to the right
  align-items: center; // Centers items vertically
  padding: 20px 40px; // Adjusted padding to match your layout
}

.header-logo {
  font-size: 1.7em;
  font-weight: bold;
  font-family: Calibri, Arial, Helvetica, sans-serif;
  font-style: oblique;
  letter-spacing: 1px;
  padding-top: 10px;
  padding-bottom: 14px;
  border: 0px solid @textColor;
  border-bottom-width: 2.5px;
  .logo-link {
    margin: 0;
    opacity: 1; // Keep the logo fully visible
    text-decoration: none;
    border: none;
    text-transform: none; // Keeps the casing as written
    
  font-size: 1.1em;
  }
}

.nav-bar {
  text-align: right;
  line-height: 3em;
}

a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
  font-size: 0.9em;
}

.router-link-exact-active {
  border: 0px solid @textColor;
  border-bottom-width: 2px;
  font-size: 1.1em;
}

/* Mobile Responsiveness */
@media only screen and (max-width: 768px) {
  .nav-container {
    flex-direction: column; // Stacks name and nav on small screens
    padding: 20px;
  }
  
  .header-logo {
    margin-bottom: 10px;
  }

  .nav-bar {
    line-height: 2em;
    text-align: center;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }
}
</style>