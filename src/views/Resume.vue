<template>
  <div class="resume-row">
    <div class="resume-main">
      <h1 class="title">Resume</h1>

      <div class="resume-text">
        <div class="paragraph">
          I'm <strong>Garv Chopra</strong>, a Unity Game Developer and XR enthusiast specializing in immersive simulations, multiplayer systems, and interactive AR/VR experiences.<br />
          I build scalable gameplay systems using Unity, C#, OpenXR, and backend integrations.<br />
          Currently pursuing a Bachelor of Engineering in Computer Engineering at Thapar Institute of Engineering and Technology (CGPA: 8.44/10).<br />
          Feel free to <router-link to="/contact">contact me</router-link> for internships or collaborative projects.
        </div>

        <div class="full-content">

          <!-- Work Experience -->
          <h2>Work Experience</h2>

          <div>
            <div class="job-title">
              VR Simulation Developer Intern <span>- Volga Infosys</span>
            </div>
            <div class="job-date">March 2025 – October 2025</div>
            <div class="job-desc">
              Built enterprise-grade VR training simulations using Unity and OpenXR.<br>
              Designed physics-based interaction systems improving realism and user engagement by 30%.<br>
              Optimized performance for smooth real-time rendering in VR environments.
            </div>
          </div>

          <div>
            <div class="job-title">
              ELC Summer Intern <span>- Thapar University</span>
            </div>
            <div class="job-date">June 2024 – July 2024</div>
            <div class="job-desc">
              Developed Unity-based cognitive games integrated with EEG systems for ADHD and ASD analysis.<br>
              Improved focus retention tracking and increased data accuracy by 40%.<br>
              Collaborated with researchers to design interactive evaluation modules.
            </div>
          </div>

          <div>
            <div class="job-title">
              Technical Executive <span>- ISTE Thapar Chapter</span>
            </div>
            <div class="job-date">August 2024 – Present</div>
            <div class="job-desc">
              Built educational AR/VR applications and conducted technical workshops on Unity and immersive technologies.
            </div>
          </div>

          <!-- Skills -->
          <h2>Technical Skills</h2>

          <div class="skill-set">
            <h3>Game Development & XR</h3>
            <div class="skill-tags">
              <span>Unity (C#)</span>
              <span>Photon Multiplayer</span>
              <span>PlayFab</span>
              <span>OpenXR</span>
              <span>AR Foundation</span>
              <span>Vuforia</span>
              <span>WebGL Deployment</span>
              <span>Shader Programming</span>
              <span>Procedural Generation</span>
              <span>AI Pathfinding</span>
            </div>
          </div>

          <div class="skill-set">
            <h3>Backend & AI</h3>
            <div class="skill-tags">
              <span>Python</span>
              <span>FastAPI</span>
              <span>Flask</span>
              <span>OpenCV</span>
              <span>Machine Learning</span>
            </div>
          </div>

          <div class="skill-set">
            <h3>Tools</h3>
            <div class="skill-tags">
              <span>Blender</span>
              <span>Git</span>
              <span>Firebase</span>
              <span>VS Code</span>
            </div>
          </div>

          <!-- Education -->
          <h2>Education</h2>
          <div>
            <div class="edu-title">
              Thapar Institute of Engineering and Technology, Patiala
            </div>
            <div class="job-date">July 2023 - June 2027</div>
            <div class="edu-details">
              Bachelor of Engineering in Computer Engineering<br>
              CGPA: 8.44 / 10
            </div>
          </div>

          <!-- Languages -->
          <h2>Languages</h2>
          <div class="lang-details">
            English, Hindi, Punjabi (Fluent)
          </div>

        </div>
      </div>
    </div>

    <div class="resume-photo">
      <img src="img/avatar.png" alt="Photo of Garv Chopra" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
});
</script>

<style scoped>
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tags span {
  background: rgba(16, 217, 243, 0.15);
  color: #10d9f3;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
  border: 1px solid rgba(16, 217, 243, 0.3);
}
  
.resume-row {
  display: flex;
  align-items: flex-start;
  gap: 54px;
  margin-bottom: 80px;
  padding-top: 20px;
}

.resume-main {
  flex: 2 1 0;
}

.resume-text {
  max-width: 800px;
}

.resume-photo {
  flex: 0 0 220px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.resume-photo img {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 4px solid #10d9f3;
  object-fit: cover;
  background: #fff;
  box-shadow: 0 3px 24px rgba(16,217,243,0.12);
}

.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

h2 {
  font-size: 2.1em;
  font-weight: 700;
  margin-top: 46px;
  margin-bottom: 24px;
  line-height: 1.2;
  letter-spacing: 0.5px;
  color: #fff;
}

.job-title {
  font-size: 1.34em;
  font-weight: 700;
  margin-top: 28px;
  margin-bottom: 8px;
  color: #ffd368; /* Accent color */
  line-height: 1.1;
}

.job-title span {
  font-weight: 400;
  color: #99accd;
}

.job-date {
  font-size: 1.08em;
  font-style: italic;
  font-weight: 500;
  color: #7bb4ff;
  margin-bottom: 12px;
  margin-top: 2px;
}

.job-desc {
  font-size: 1.07em;
  color: #e7e9ea;
  margin-bottom: 18px;
  margin-top: 0;
  line-height: 1.72;
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
  color: #aad8fa;
  margin-top: 22px;
  font-size: 1.15em;
  font-weight: 600;
}

.edu-title {
  font-size: 1.15em;
  font-weight: 700;
  color: #ffd368;
  margin-top: 18px;
  margin-bottom: 6px;
}

.edu-details {
  font-size: 1em;
  color: #e7e9ea;
  margin-bottom: 18px;
}

.lang-title {
  font-size: 1.08em;
  font-weight: 700;
  color: #ffd368;
  margin-bottom: 4px;
}

.lang-details {
  font-size: 1em;
  color: #e7e9ea;
}

.interest-details {
  font-size: 1em;
  color: #d0e4fa;
  margin-bottom: 8px;
}
.title {
    font-style: oblique;
  font-weight:bold;
  font-family: Calibri, Arial, Helvetica, sans-serif;
  margin-bottom:50px;
  }

@media (max-width: 900px) {
  .resume-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }
  .resume-photo {
    align-self: center;
    margin-top: 12px;
  }
  .resume-photo img {
    width: 120px;
    height: 120px;
  }
}
</style>
