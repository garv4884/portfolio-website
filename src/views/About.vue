<template>
  <div class="about-row">
    <div class="about-main">
      <h1 class="title">Hi👋 I'm Garv Chopra.</h1>
      <h2 class="title2">Game Developer | Unity, C# &amp; Multiplayer Systems</h2>
      <div class="about-text">
        <div>
          I'm a <strong>Unity Game Developer</strong> specialising in gameplay programming, multiplayer architecture, and game systems design — building experiences that are fast, fun, and technically solid.<br/>
        </div>
        <div style="margin-top: 20px;">
          Proficient in <strong>Unity 3D</strong>, <strong>C#</strong>, <strong>Photon PUN</strong>, and <strong>AI / pathfinding systems</strong>, I focus on writing clean game logic, scalable multiplayer code, and performant real-time gameplay.
        </div>
        <div style="margin-top: 20px;">
          My work includes a <router-link to="/game-projects">competitive multiplayer FPS</router-link>,
          an <router-link to="/game-projects">infinite runner shipped on the Play Store</router-link>, and
          <router-link to="/resume">award-winning hackathon projects</router-link> — all built around solid gameplay feel and robust systems.
        </div>
        <div style="margin-top: 20px;">
          Currently seeking <strong>Game Developer</strong> roles — gameplay programming, multiplayer, or general Unity development.<br/>
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
