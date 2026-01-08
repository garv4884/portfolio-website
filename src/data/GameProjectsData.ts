import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("project-1", "FPS Multiplayer CTF Portal Demo", "img/projects/project-1-icon.png", 
    `
    <div class="paragraph">
        <strong>FPS Multiplayer CTF Portal Demo</strong> is a competitive first-person Capture-The-Flag game designed for large-scale technical events and hackathons.
    </div>
    <div class="paragraph">
        Implements isolated team rooms, real-time score synchronization, and competitive FPS mechanics using authoritative multiplayer logic.
    </div>
    <div class="paragraph">
        Built with Unity 3D (C#), Photon PUN, Firebase, and modular scene architecture to support scalable CTF deployments.
    </div>
    <div class="paragraph">
        <div class="notice">
            Source code available on <a href="https://github.com/Ishan1923/Colloquium11-CTF" target="_blank">GitHub</a>.
        </div>
    </div>
    <div class="paragraph">
        <div class="notice">
            Play the live demo at <a href="https://fps-ctf.vercel.app" target="_blank">fps-ctf.vercel.app</a>.
        </div>
    </div>
    `, "#23bd69", false,true),

    new ProjectData("project-2", "CubeVerse Infinite Cube Runner", "img/projects/project-2-icon.png", `
    <div class="paragraph">
        <strong>CubeVerse Infinite Cube Runner</strong> is a published Android game focused on reflex enhancement and progressive difficulty scaling.
    </div>
    <div class="paragraph">
        Features procedural obstacle generation, adaptive speed curves, and performance optimization for low-end mobile devices.
    </div>
    <div class="paragraph">
        Developed using Unity 3D (C#), Blender for asset creation, and Android SDK with memory-efficient gameplay systems.
    </div>
    <div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=com.GC_Games.CubeVerse" target="_blank">
            <img src="img/projects/play-store-logo.png" alt="Play Store badge" />
        </a>
    </div>
    `, "#5a78af"),

    new ProjectData("project-4", "VITALS – AI-Assisted VR Surgical Training", "img/projects/project-4-icon.png", `
    <div class="paragraph">
        <strong>VITALS</strong> is an AI-assisted VR surgical training system developed during the Israeli–Indian Hackathon (Hack4Help 2025).
    </div>
    <div class="paragraph">
        Provides real-time procedural guidance, AI mentorship, and mistake detection inside a simulated operating room.
    </div>
    <div class="paragraph">
        Built with Unity 3D, OpenAI GPT, LangChain, and NLP pipelines to enable interactive medical training workflows.
    </div>
    <div class="paragraph">
        Awarded <strong>2nd Place</strong> after live jury evaluation and technical pitch.
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/project-4-icon.png" alt="VITALS VR Screenshot" />
        <img class="pc-screenshot" src="img/projects/project-4-icon2.png" alt="VITALS VR Screenshot" />
    </div>
    `, "#e80fb7"),

    new ProjectData("project-3", "V.I.A. – Virtual Interview Assistant (VR)", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        <strong>V.I.A. (Virtual Interview Assistant)</strong> is an immersive VR interview simulation platform designed to replicate real-world technical and HR interview scenarios.
    </div>
    <div class="paragraph">
        Integrates conversational AI, speech-to-text pipelines, and contextual response generation for realistic interviewer behavior.
    </div>
    <div class="paragraph">
        Built using Unity, ConvAI, GPT-based LLMs, LangChain, and computer vision modules for gesture and behavioral analysis.
    </div>
    <div class="paragraph">
        <div class="notice">
            Demo available on <a href="https://youtu.be/EcUWAxo20l8?si=CDIlTCGYfjZR61ej" target="_blank">YouTube</a> 
            and source code on <a href="https://github.com/garv4884/VIA_Crazy_Winners" target="_blank">GitHub</a>.
        </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/project-3-icon2.png" alt="VITALS VR Screenshot" />
        <img class="pc-screenshot" src="img/projects/project-3-icon.png" alt="VITALS VR Screenshot" />
    </div>
    `, "#5d5d5dff",false,true),

    new ProjectData(
    "project-elc-eeg",
    "HCI Application for EEG detection for ADHD/Autism (ELC Summer Internship)",
    "img/projects/project-6-icon.png",
    `
    <div class="paragraph">
        <strong>EEG Attention Training Game Suite</strong> is a set of purpose-built Unity games developed during my Summer Internship at ELC to help maintain attention levels in children undergoing EEG-based detection for ADHD and Autism.
    </div>

    <div class="paragraph">
        The software was designed to keep participants cognitively engaged during EEG recording sessions using simple, controlled, and repeatable gameplay mechanics.
    </div>

    <div class="paragraph">
        The suite consists of four games:
        <ul>
            <li><strong>Flappy Bird–style focus game</strong> for sustained attention and rhythm control</li>
            <li><strong>Maze navigation game</strong> with a continuously moving enemy to induce cognitive pressure</li>
            <li><strong>Tower of Hanoi puzzle</strong> to assess logical thinking and planning ability</li>
            <li><strong>Quiz runner game</strong> where players pass through correct answer doors in minimum time</li>
        </ul>
    </div>

    <div class="paragraph">
        Each game records metrics such as time taken, accuracy, score, and movement behavior, which are later correlated with EEG signal analysis.
    </div>

    <div class="paragraph">
        Developed using Unity (C#) with a focus on cognitive load control, minimal distraction, and consistent interaction patterns suitable for neurodevelopmental assessment.
    </div>

    <div class="paragraph">
        <div class="notice">
            Demonstrates serious-game design, cognitive engagement mechanics, and Unity development for health and research applications.
        </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/project-6-icon1.jpeg" alt="project-6-icon1.jpeg" />
        <img class="pc-screenshot" src="img/projects/project-6-icon2.jpeg" alt="project-6-icon2.jpeg" />
        <img class="pc-screenshot" src="img/projects/project-6-icon3.jpeg" alt="project-6-icon3.jpeg" />
        <img class="pc-screenshot" src="img/projects/project-6-icon4.jpeg" alt="project-6-icon4.jpeg" />
    </div>
    `,
    "#4c9aff",
    false,true
    ),

    new ProjectData("project-5", "AI Maze Game with Intelligent Enemy Pathfinding", "img/projects/project-5-icon.png", `
    <div class="paragraph">
        Developed an AI-driven maze game featuring multiple enemy agents with distinct behaviors inspired by classic Pac-Man AI.
    </div>
    <div class="paragraph">
        Implemented pathfinding algorithms including A*, Greedy Best-First Search, and DFS, with dynamic maze generation and increasing difficulty.
    </div>
    <div class="paragraph">
        Integrated a Python backend for AI decision-making and path computation, communicating with Unity via HTTP.
    </div>
    <div class="paragraph">
        <div class="notice">
            Project demonstrates applied AI concepts, algorithm comparison, and real-time game-agent behavior.
        </div>
    </div>
    `, "#e48246")



];
