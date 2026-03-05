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

            <!-- Buttons — only rendered when showDemoButton prop is true -->
            <div v-if="showDemoButton" class="card-actions" @click.stop>

              <!-- ▶ Play Demo — live web build -->
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="card-btn btn-demo"
                title="Play live demo">
                ▶ Play Demo
              </a>

              <!-- ▶ Watch Demo — YouTube video -->
              <a
                v-if="project.youtubeUrl"
                :href="project.youtubeUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="card-btn btn-youtube"
                title="Watch demo on YouTube">
                ▶ Watch Demo
              </a>

              <!-- 📱 Play Store / Download -->
              <a
                v-if="project.storeUrl"
                :href="project.storeUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="card-btn btn-store"
                title="Download on Play Store">
                ⬇ Play Store
              </a>

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
    },
    showDemoButton: {
      type: Boolean,
      default: false
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
    },
  },
});
</script>

<style scoped>
/* ─── Card Container ─────────────────────────────────────────── */
.project-item {
  height: 350px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;
}

/* ─── Thumbnail ──────────────────────────────────────────────── */
.project-item-image {
  background-size: cover;
  background-position: center;
  flex-grow: 1;
  width: 100%;
  transition: transform 0.3s ease;
}

.project-item:hover .project-item-image {
  transform: scale(1.1);
}

.project-item:hover {
  filter: brightness(115%);
}

/* ─── Title Bar ──────────────────────────────────────────────── */
.title-bar {
  width: 100%;
  color: #000000ff;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 48px;
}

.title-text {
  padding: 14px 12px;
  font-weight: 500;
  font-size: 0.95em;
  font-family: system-ui, -apple-system, sans-serif;
  letter-spacing: 0.4px;
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ─── Button Group ───────────────────────────────────────────── */
.card-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-right: 10px;
  flex-shrink: 0;
}

/* Base pill button */
.card-btn {
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.73em;
  font-weight: 600;
  font-family: system-ui, -apple-system, sans-serif;
  letter-spacing: 0.5px;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
  border: 1.5px solid transparent;
  opacity: 1;
}

.card-btn:hover {
  transform: scale(1.07);
  opacity: 1;
}

/* ▶ Play Demo — dark semi-transparent */
.btn-demo {
  background: rgba(0, 0, 0, 0.55);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(4px);
}
.btn-demo:hover {
  background: rgba(255, 255, 255, 0.18);
  border-color: #fff;
}

/* ▶ Watch Demo — YouTube red */
.btn-youtube {
  background: #3a01015a;
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.52);
  
}
.btn-youtube:hover {
  background: #890101ff;
}

/* ⬇ Play Store — Google green */
.btn-store {
  background: #01875f;
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.35);
}
.btn-store:hover {
  background: #016b4c;
}

/* ─── Desktop Grid ───────────────────────────────────────────── */
@media only screen and (min-width: 620px) {
  .projects-list {
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    grid-auto-rows: 300px;
    margin: 0 auto;
  }

  .project-item {
    margin: 0px;
    height: 100%;
  }

  .wide { grid-column-end: span 2; }
  .high { grid-row-end: span 2; }
}

/* ─── Tiny screens: allow buttons to wrap ───────────────────── */
@media only screen and (max-width: 480px) {
  .title-bar {
    flex-wrap: wrap;
    padding-bottom: 8px;
  }
  .card-actions {
    padding-left: 12px;
    flex-wrap: wrap;
  }
}
</style>