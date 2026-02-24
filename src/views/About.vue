<template>
  <div class="about-row">
    <div class="about-main">
      <h1 class="title">Hi👋 I'm Garv Chopra.</h1>
      <h2 class="title2">Game Developer & XR Engineer | Unity & VR Systems</h2>
      <div class="about-text">
        <div>
          I'm <strong>Garv Chopra</strong>, a driven Game Developer and AR/VR Specialist focused on creating immersive, intelligent, and impactful digital experiences.<br/>
        </div>
        <div style="margin-top: 20px;">
          Skilled in Unity 3D, C#, Blender, and Flutter, I develop interactive simulations for medical, educational, and entertainment domains.
        </div>
        <div style="margin-top: 20px;">
          My work covers <router-link to="/game-projects">multiplayer FPS games</router-link>,
          <router-link to="/experience">VR training simulations</router-link>, and
          contributions to <router-link to="/resume">award-winning hackathon projects</router-link> and startup internships.
        </div>
        <div style="margin-top: 20px;">
          I'm currently open to opportunities in game development, VR/AR R&D, education technology, and interactive healthcare applications.<br/>
          Reach out at <a href="mailto:chopragarv0@gmail.com">chopragarv0@gmail.com</a> or <router-link to="/contact">the contact page</router-link>.
        </div>
      </div>
    </div>
    <div class="about-photo">
      <img src="img/avatar.png" alt="Avatar of Garv Chopra"/>
    </div>
  </div>
</template>

<style scoped>
.about-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 55vh;
  gap: 48px;
  margin-bottom: 80px;
  padding-top: 40px;
  
}
.title,.title2{
  font-style: oblique;
  font-weight:bold;
  font-family: Calibri, Arial, Helvetica, sans-serif;
  margin-bottom:20px;
}
.title2{
  margin-bottom:50px;
}
.about-main {
  flex: 2 1 0;
  
}

.about-text {
  max-width: 700px;
  
}

.about-photo {
  flex: 0 0 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-photo img {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 3px solid #10d9f3;
  object-fit: cover;
  background: #fff;
  box-shadow: 0 2px 18px rgba(16,217,243,0.08);
}

@media (max-width: 900px) {
  .about-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding-top: 18px;
  }
  .about-photo {
    align-self: center;
    margin-top: 12px;
  }
  .about-photo img {
    width: 110px;
    height: 110px;
  }
}
</style>
