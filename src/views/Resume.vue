<template>
  <div class="resume-row">
    <div class="resume-main">
      <h1 class="title">Resume</h1>
      <div class="resume-text">
        <div class="paragraph">
          I'm <strong>Garv Chopra</strong>, an aspiring Game Developer and AR/VR specialist skilled in Unity 3D, C#, Blender, and Flutter.<br />
          I focus on creating immersive simulations, engaging gameplay, and multiplayer experiences.<br />
          Currently pursuing a Bachelor of Engineering in Computer Engineering at Thapar Institute of Engineering and Technology with a CGPA of 8.44.<br />
          Feel free to <router-link to="/contact">contact me</router-link> about opportunities or projects.
        </div>

        <div class="full-content">
          <h2>Work Experience</h2>

          <div>
            <div class="job-title">VR Simulation Developer Intern <span>- Volga Infosys</span></div>
            <div class="job-date">March 2025 – Present</div>
            <div class="job-desc">
              Developed immersive VR simulations using Unity 3D and OpenXR for enterprise training modules.<br>
              Improved realism by 30% using physics-based interactions.
            </div>
          </div>

          <div>
            <div class="job-title">ELC Summer Intern <span>- Thapar University</span></div>
            <div class="job-date">June 2024 – July 2024</div>
            <div class="job-desc">
              Designed Unity-based cognitive games interfaced with EEG systems for ADHD and ASD detection.<br>
              Improved focus retention and data accuracy by 40%.
            </div>
          </div>

          <div>
            <div class="job-title">Technical Executive <span>- ISTE Thapar Chapter</span></div>
            <div class="job-date">August 2024 – Present</div>
            <div class="job-desc">
              Developed educational AR/VR applications using Unity and Blender.
            </div>
          </div>

          <h2>Skills</h2>
          <div class="skill-set">
            <h3>Game Development & VR/AR</h3>
            <SkillRate name="Unity 3D" :rate="5" />
            <SkillRate name="C#" :rate="5" />
            <SkillRate name="Flutter" :rate="4" />
            <SkillRate name="Blender" :rate="4" />
            <SkillRate name="OpenXR" :rate="3" />
          </div>
          <div class="skill-set">
            <h3>Other Skills</h3>
            <SkillRate name="Python" :rate="4" />
            <SkillRate name="Machine Learning" :rate="3" />
            <SkillRate name="FastAPI" :rate="3" />
          </div>
          <div style="clear:both"></div>

          <h2>Education</h2>
          <div>
            <div class="edu-title">Thapar Institute of Engineering and Technology, Patiala</div>
            <div class="job-date">July 2023 - June 2027</div>
            <div class="edu-details">
              Bachelor of Engineering in Computer Engineering, CGPA: 8.44/10
            </div>
          </div>

          <h2>Languages</h2>
          <div>
            <div class="lang-title">English, Hindi, Punjabi</div>
            <div class="lang-details">Fluent in all of them with strong communication skills.</div>
          </div>

          <h2>Interests</h2>
          <div>
            <h3>VR/AR Development</h3>
            <div class="interest-details">Developing immersive and interactive experiences for medical and tourism applications.</div>
            <h3>Game Development</h3>
            <div class="interest-details">Creating engaging multiplayer and cognitive games.</div>
            <h3>Machine Learning</h3>
            <div class="interest-details">Exploring applications in document analysis and medical simulations.</div>
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
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
  
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
