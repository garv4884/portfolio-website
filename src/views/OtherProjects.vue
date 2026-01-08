<template>
  <div class="experience-page">
    <h1 class="title">Experience & Research</h1>

    <div class="intro-text">
      A deep dive into my professional journey, academic research, and technical contributions in AR/VR and AI.
    </div>
    
    <ProjectsList v-bind:projects="experienceItems" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import experienceData from "@/data/OtherProjectsData"; // Points to your new file

export default Vue.extend({
  name: "Experience",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      experienceItems: experienceData,
    };
  },
});
</script>

<style scoped>
  .title {
    font-style: oblique;
  font-weight:bold;
  font-family: Calibri, Arial, Helvetica, sans-serif;
  margin-bottom:50px;
  }
.intro-text {
  margin-bottom: 40px;
  font-size: 1em;
  opacity: 0.8;
}
</style>