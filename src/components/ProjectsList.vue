<template>
  <div>
    <div class="projects-list">
      <template v-for="project in projects">
        <div
          :key="project.id"
          @click="showDetails(project)"
          class="project-item"
          :class="{ 'wide': project.isWide, 'high': project.isHigh }">
          
          <div 
            class="project-item-image" 
            :style="{ 'background-image': 'url(' + project.iconUrl + ')' }">
          </div>

          <div class="title-bar" :style="{ 'background-color': project.accentColor }">
            <div class="title-text">
              {{ project.name }}
            </div>
          </div>
        </div>
      </template>
    </div>

    <ProjectDetailsOverlay
      v-on:close="showPopup = false"
      :visible="showPopup"
      :title="popupTitle"
      :htmlContent="popupContent"
      :color="popupColor"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: ""
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.showPopup = true;
      // Ensures the overlay is viewed from the top
      // window.scrollTo(0, 0);
    },
  },
});
</script>

<style scoped>
/* Main Card Container */
.project-item {
  height: 350px; /* Adjusted height for mobile visibility */
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column; /* Stacks image and bar vertically */
  transition: transform 0.2s ease-in-out;
}

/* Image takes up all available space above the bar */
.project-item-image {
  background-size: cover;
  background-position: center;
  flex-grow: 1; /* Pushes the title bar to the bottom */
  width: 100%;
  transition: transform 0.3s ease;
}

/* Zoom effect on image when the parent card is hovered */
.project-item:hover .project-item-image {
  transform: scale(1.1);
}

/* Brightness effect for the whole card on hover */
.project-item:hover {
  filter: brightness(115%);
}

/* Solid Title Bar with no transparency */
.title-bar {
  width: 100%;
  color: #000000ff; /* White text for contrast against accent colors */
  z-index: 2; /* Ensures it stays on top visually */
}

.title-text {
  padding: 15px;
  font-weight: normal;
  text-transform: normal;
  font-size: 0.95em;
  /* letter-spacing: 0.8px; */
  /* font-style: oblique; */
  /* font-weight:bold; */
  font-family:  system-ui, -apple-system, sans-serif;
  font-weight: 500;
  letter-spacing: 0.4px;
  /* margin-bottom:20px; */
}

/* Grid Layout for Desktop */
@media only screen and (min-width: 620px) {
  .projects-list {
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    grid-auto-rows: 300px; /* Keeps grid items uniform */
    margin: 0 auto;
  }

  .project-item {
    margin: 0px;
    height: 100%;
  }

  .wide { grid-column-end: span 2; }
  .high { grid-row-end: span 2; }
}
</style>