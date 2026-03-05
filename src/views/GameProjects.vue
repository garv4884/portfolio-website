<template>
  <div>
    <h1 class="title">Projects</h1>

    <div style="margin-bottom: 10px;">
      A selection of games and tools I've built — from shipped mobile titles to multiplayer systems and AI-driven prototypes.
    </div>

    <ProjectsList v-bind:projects="projects" :showDemoButton="true" />

    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
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
</style>