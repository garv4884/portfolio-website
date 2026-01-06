<template>
  <transition name="modal-animate">
    <div v-if="visible" class="modal-wrapper">
      <div class="overlay" @click="$emit('close')"></div>
      
      <div class="dialog" :style="{ 'background-color': color }">
        <h1 class="dialog-title">{{ title }}</h1>
        <div @click="$emit('close')" class="dialog-close">
          <i class="fa fa-times fa-lg fa-fw"></i>
        </div>
        
        <div class="dialog-content">
          <div v-html="htmlContent"></div>
          <div class="dialog-bottom">
            <a @click="$emit('close')" class="dialog-close-button">Close</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProjectDetailsOverlay",
  props: {
    visible: Boolean,
    color: String,
    title: String,
    htmlContent: String,
  }
});
</script>

<style scoped>
/* 1. Wrapper to manage the stacking context */
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  overflow-y: auto; /* Allows the dialog to scroll if it's long */
}

.overlay {
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.dialog {
  position: relative;
  z-index: 101;
  margin: 40px 20px;
  width: 100%;
  height: fit-content;
  color: white;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

/* 2. THE SMOOTH ANIMATION LOGIC */

/* Entrance/Exit Duration */
.modal-animate-enter-active,
.modal-animate-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* The Background Fade */
.modal-animate-enter-active .overlay,
.modal-animate-leave-active .overlay {
  transition: opacity 0.4s ease;
}

/* The Dialog Slide/Scale */
.modal-animate-enter-active .dialog,
.modal-animate-leave-active .dialog {
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.3s ease;
}

/* Initial/Final States (HIDDEN) */
.modal-animate-enter, .modal-animate-leave-to {
  opacity: 0;
}

.modal-animate-enter .dialog,
.modal-animate-leave-to .dialog {
  transform: translateY(30px) scale(0.95);
  opacity: 0;
}

/* --- Keep your existing content styling below --- */

h1.dialog-title {
  text-align: center;
  font-size: 1.3em;
  margin: 0px;
  padding: 22px;
}

.dialog-content {
  padding: 20px;
  background-color: #fcfcfc;
  color: #333; /* Darker for better readability */
}

.dialog-close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

@media only screen and (min-width: 620px) {
  .dialog {
    margin-top: 150px;
    margin-bottom: 80px;
    max-width: 900px;
  }
}
</style>