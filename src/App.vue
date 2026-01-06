<template>
  <div id="app">
    
    <link rel="stylesheet" href="@/assets/projects/projects.css" type="text/css">

    <Header />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  }
});

// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([
  "img/projects/project-1-icon.png",
  "img/projects/project-2-icon.png",
  "img/projects/project-3-icon.png"
]);

</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';

html, body {
  margin: 0px;
  background-color: @bodyBgColor;
}

#app {
  background-color: @contentBgColor;
  color: @textColor;

  // 1. Keep your original font settings
  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;

  // 2. Setup for the background pattern
  position: relative; 
  min-height: 100vh;
  z-index: 1;
  overflow: hidden;
  &::before {
    content: "";
    position: fixed;
    top: -1000px;
    left: -5000px;
    width: 3000%;
    height: 3000%;
    pointer-events: none; 
    z-index: -1; // Places it behind the text
    transform: rotate(45deg);
    // Subtle Dot Pattern
    background-image: linear-gradient(
  rgba(255, 255, 255, 0) 40%, 
  rgba(255, 255, 255, 0.02) 30%
);
background-size: 100% 20px;
    // background-size: 40px 40px; 
  }
}

h1, h2, h3, h4, h5 {
  text-align: left;
}

a {
  color: @textColor;
  text-decoration: none;
  opacity: 0.5;
}
a:hover, .router-link-exact-active {
  opacity: 1;
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
}

.main {
    padding: 12px;
  }

@media only screen and (min-width: 620px){

  #app {
    text-align: left;
    line-height: 1.8em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 80px;
    line-height: 0.7em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
  .header, .footer, Header, Footer {
  position: relative; /* Allows z-index to work */
  z-index: 10;        /* Higher than the ::before's -1 */
}

.main {
  position: relative;
  z-index: 5;
  padding: 12px;
}
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
