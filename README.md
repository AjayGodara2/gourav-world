# ⛏️ Gourav's World --- Interactive 3D Minecraft Portfolio

> **A playable portfolio built as an explorable Minecraft-inspired 3D
> world.**

🌐 **Live Demo:** https://gourav-world.vercel.app/\
💻 **Source Code:** https://github.com/AjayGodara2/gourav-world\
👨‍💻 **Developer:** Gourav Godara

------------------------------------------------------------------------

## 🌎 Overview

**Gourav's World** is an interactive 3D portfolio designed to make
exploring a developer's profile feel more like exploring a small game
world than browsing a traditional website.

Instead of presenting information through a collection of static pages,
the portfolio places different parts of the developer's profile inside a
Minecraft-inspired environment.

Visitors can:

-   Walk around the 3D world.
-   Explore different buildings and locations.
-   Follow custom-designed paths.
-   Interact with portfolio locations.
-   Open dedicated information panels.
-   Travel between disconnected areas using interactive portals.
-   Explore projects, achievements, personal information, and contact
    details.

The project combines **3D graphics, game-style interaction, physics,
navigation, UI design, and web development** into a single portfolio
experience.

------------------------------------------------------------------------

## ✨ Features

### 🗺️ Explorable 3D World

The portfolio is presented as a complete Minecraft-inspired environment
rather than a conventional webpage.

The world contains:

-   Buildings representing different portfolio sections.
-   Trees, grass, flowers, rocks, and environmental elements.
-   A custom waterfall/environment asset.
-   Walkable paths connecting important locations.
-   Interactive markers for discoverable areas.
-   A third-person player character and camera.

### 🧍 Third-Person Player

Visitors control a player character and move through the world using
keyboard controls.

The player system handles:

-   WASD movement.
-   Camera-relative movement.
-   Third-person camera behavior.
-   Physics-based movement.
-   Walkable path detection.
-   Interaction proximity detection.
-   Teleport transitions between separated sections.

### 🛤️ Custom Walkable Paths

The paths connecting the portfolio areas were created separately and
integrated into the 3D world.

Current path assets:

``` text
path1.glb
path2.glb
path3.glb
```

The path geometry is also used by the movement system as
navigation/reference geometry.

### 🌀 Portal & Teleport System

Some areas cannot be connected by a normal continuous path. Interactive
portals solve this without making the world unnecessarily large.

The current navigation flow includes transitions such as:

``` text
Path 1 → Path 2 → Path 3
```

When the player reaches an appropriate portal and presses `E`, the
player is moved to the next destination.

### ⭐ Interactive Location Markers

Important locations are marked using floating 3D markers.

The markers:

-   Float above the environment.
-   Rotate continuously.
-   Help visitors discover interactive areas.
-   Indicate where portfolio sections can be opened.

### 💻 Portfolio Sections

  Location                         Purpose
  -------------------------------- -----------------------------------
  🏠 About Me                      Personal introduction and profile
  🏆 Achievements & Certificates   Certificates and achievements
  💻 Projects                      Featured development projects
  🗺️ Exploration                   Additional portfolio content
  📩 Contact                       Contact and professional links

Each section opens a dedicated interface while keeping the visitor
inside the 3D experience.

### 📸 About Me

The About section includes:

-   Profile photograph.
-   Personal introduction.
-   Developer information.
-   A dedicated portfolio panel integrated into the 3D world.

### 🏆 Achievements & Certificates

The achievements area presents certificates and accomplishments through
an interactive portfolio panel.

Included certificate assets cover:

-   AI
-   Cybersecurity
-   React

### 💼 Projects Showcase

The Projects section presents selected work through project
cards/details.

Featured projects include:

-   **Gourav's World**
-   **MemoryTrail**
-   **AI Triage**
-   **SEEK**

### 📩 Contact

The Contact section provides direct professional links:

-   GitHub
-   LinkedIn
-   Email

### 🎮 Game-Style Controls

  Control           Action
  ----------------- -------------
  `W` `A` `S` `D`   Move
  `E`               Interact
  🖱️ Mouse          Look Around
  `LMB`             Move Camera

### 🐛 Developer Debug System

The project includes a developer-only debug system used during world
construction and positioning.

It can display:

-   Player X coordinate.
-   Player Y coordinate.
-   Player Z coordinate.
-   Free-movement state.
-   Saved teleport coordinates.

Developer shortcuts:

  Key    Function
  ------ ------------------------------
  `F3`   Toggle debug information
  `F4`   Toggle free movement
  `T`    Save current player position

The debug interface is disabled by default for normal visitors.

------------------------------------------------------------------------

# 🧰 Tech Stack

## Frontend

-   **React**
-   **Vite**
-   **JavaScript / JSX**
-   **CSS**

## 3D / Game Environment

-   **Three.js**
-   **React Three Fiber**
-   **@react-three/drei**
-   **Rapier physics**

## 3D Asset Workflow

-   **Blender** --- 3D environment/path preparation
-   **GLTF / GLB** --- 3D asset format
-   **GLTF Transform** --- asset optimization
-   **Draco compression** --- geometry compression

## Development & Deployment

-   **Git**
-   **GitHub**
-   **Vercel**

------------------------------------------------------------------------

# 🏗️ Architecture

The project is organized around several cooperating systems:

``` text
React Application
│
├── 3D World
│   ├── Waterfall / Environment
│   ├── Paths
│   ├── Buildings
│   └── Environment Objects
│
├── Player System
│   ├── Movement
│   ├── Camera
│   ├── Physics
│   └── Interaction Detection
│
├── Navigation System
│   ├── Path 1
│   ├── Path 2
│   ├── Path 3
│   └── Teleport Points
│
├── Interaction System
│   ├── Location Markers
│   ├── Portal Markers
│   └── Interaction Messages
│
└── Portfolio UI
    ├── About
    ├── Achievements
    ├── Projects
    ├── Exploration
    └── Contact
```

------------------------------------------------------------------------

# 📁 Repository Structure

``` text
gourav-world/
│
├── public/
│   └── assets/
│       ├── certificates/
│       │   ├── ai.png
│       │   ├── cyber.png
│       │   └── react.png
│       │
│       ├── markers/
│       │   ├── ender-star/
│       │   └── portal/
│       │
│       ├── models/
│       │   ├── path1.glb
│       │   ├── path2.glb
│       │   └── path3.glb
│       │
│       ├── photo/
│       │   └── pic.png
│       │
│       ├── projects/
│       │   ├── ai-triage.png
│       │   ├── gouravs-world.png
│       │   ├── memorytrail.png
│       │   └── seek.png
│       │
│       ├── signs/
│       │
│       └── waterfall/
│           ├── scene.gltf
│           ├── scene.bin
│           └── textures/
│
├── src/
│   ├── data/
│   │   ├── aboutData.js
│   │   ├── contactData.js
│   │   └── projectsData.js
│   │
│   ├── debug/
│   │   └── DebugSystem.jsx
│   │
│   ├── AboutPanel.jsx
│   ├── AchievementsPanel.jsx
│   ├── App.jsx
│   ├── ContactPanel.jsx
│   ├── ControlsPanel.jsx
│   ├── ExplorationPanel.jsx
│   ├── InteractionMarker.jsx
│   ├── InteractionSystem.jsx
│   ├── Path1.jsx
│   ├── Path2.jsx
│   ├── Path3.jsx
│   ├── PathSystem.jsx
│   ├── Player.jsx
│   ├── PortalMarker.jsx
│   ├── ProjectDetailsPanel.jsx
│   ├── ProjectsPanel.jsx
│   ├── TeleportPoints.js
│   ├── WaterfallMap.jsx
│   └── ...
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

------------------------------------------------------------------------

# 🔄 Experience Flow

``` text
Open Website
     │
     ▼
Load 3D World
     │
     ▼
Spawn Player
     │
     ▼
Explore Environment
     │
     ├────────────────┐
     │                │
     ▼                ▼
Find Location      Find Portal
     │                │
     ▼                ▼
Press E           Press E
     │                │
     ▼                ▼
Open Panel        Teleport
     │                │
     └───────┬────────┘
             ▼
       Continue Exploring
```

The 3D environment acts as the navigation layer rather than simply being
a decorative background.

------------------------------------------------------------------------

# 🧩 Technical Systems

## Player Movement

The player is implemented as a physics-based entity.

Movement combines:

-   Keyboard input.
-   Player physics.
-   Movement vectors.
-   Camera orientation.
-   Ground/path detection.
-   Interaction checks.

The player is guided by the designed walkable surfaces instead of freely
traversing the entire scene.

------------------------------------------------------------------------

## Path Detection

The custom path meshes are loaded from GLB files.

The path geometry can be kept available to the movement system for
raycasting/surface calculations while being hidden from final rendering
when appropriate.

This separates **visual geometry** from **navigation geometry**.

------------------------------------------------------------------------

## Teleport Coordinates

Teleport destinations are centralized in:

``` text
src/TeleportPoints.js
```

Example structure:

``` js
export const TELEPORT_POINTS = {
  path1Exit: [...],
  path2Start: [...],
  path2Exit: [...],
  path3Start: [...],
};
```

Centralizing these coordinates makes world-position adjustments much
easier.

------------------------------------------------------------------------

## Interaction Detection

Important locations are associated with world coordinates and
interaction radii.

Conceptually:

``` text
Player
  │
  ▼
Check distance to interaction point
  │
  ├── Outside radius → Nothing
  │
  └── Inside radius
          │
          ▼
     Show interaction
          │
          ▼
        Press E
          │
          ▼
   Open section / teleport
```

------------------------------------------------------------------------

# 🗜️ 3D Asset Optimization

A major deployment challenge was the size of the waterfall environment.

The original waterfall asset contained:

``` text
scene.bin ≈ 142 MB
```

which exceeded GitHub's standard **100 MB per-file limit**.

Rather than removing the environment, the model was optimized using
**GLTF Transform** with **Draco compression**.

The original GLTF output was approximately:

``` text
~150 MB
```

while the optimized GLTF output was approximately:

``` text
~5.8 MB
```

with the resulting binary around:

``` text
~4.6 MB
```

The optimized asset was then tested in the application before
deployment.

### Optimization command

``` bash
npx @gltf-transform/cli draco   "public/assets/waterfall/scene.gltf"   "public/assets/waterfall/scene-optimized.gltf"
```

This optimization was important both for source-control compatibility
and for making the 3D asset considerably more practical for web
delivery.

------------------------------------------------------------------------

# 🚀 Local Development

## Prerequisites

Make sure you have:

-   Node.js
-   npm
-   Git

## 1. Clone

``` bash
git clone https://github.com/AjayGodara2/gourav-world.git
cd gourav-world
```

## 2. Install dependencies

``` bash
npm install
```

## 3. Start development server

``` bash
npm run dev
```

Vite will provide a local URL, typically:

``` text
http://localhost:5173
```

## 4. Build for production

``` bash
npm run build
```

The production build is generated in:

``` text
dist/
```

------------------------------------------------------------------------

# 🌐 Deployment

The production site is deployed with **Vercel**.

### Deployment pipeline

``` text
Local Development
       │
       ▼
      Git
       │
       ▼
    GitHub
       │
       ▼
    Vercel
       │
       ▼
Production Website
```

After making changes:

``` bash
git add .
git commit -m "Update portfolio"
git push
```

The connected Vercel project can then build and deploy the updated
`main` branch.

------------------------------------------------------------------------

# 🎮 How to Explore

1.  Open the [live portfolio](https://gourav-world.vercel.app/).
2.  Use `W`, `A`, `S`, and `D` to move.
3.  Use the mouse to look around.
4.  Find the floating interaction markers.
5.  Press `E` when an interaction prompt appears.
6.  Explore the different portfolio buildings.
7.  Use the portals to reach separated areas.
8.  Continue exploring the world.

------------------------------------------------------------------------

# 🎨 Design Philosophy

The core idea behind Gourav's World was:

> **Why should a portfolio feel like a document when it can feel like a
> place?**

Traditional portfolios are designed around:

``` text
Pages → Sections → Cards
```

Gourav's World experiments with:

``` text
World → Exploration → Interaction → Discovery
```

The visitor does not simply select **About**, **Projects**, or
**Contact** from a navigation bar.

Instead, the visitor discovers those sections as locations inside the
world.

The 3D environment therefore becomes part of the portfolio's navigation
and storytelling.

------------------------------------------------------------------------

# 🧠 What I Learned

Building this project provided hands-on experience across multiple areas
of software and 3D development.

## React + 3D

Working with React Three Fiber provided experience with:

-   Three.js scenes inside React.
-   GLTF/GLB loading.
-   Scene traversal.
-   Mesh manipulation.
-   Materials.
-   Camera control.
-   Frame-based animation.
-   Reusable 3D components.

## Physics & Movement

The player system required practical work with:

-   Physics bodies.
-   Collision behavior.
-   Movement vectors.
-   Raycasting.
-   Ground detection.
-   Position tolerances.
-   Interaction distance checks.

## 3D Asset Pipeline

The workflow involved:

``` text
Blender
   ↓
GLTF / GLB
   ↓
Optimization
   ↓
React Three Fiber
   ↓
Browser
```

## Debugging

Development involved solving real-world problems including:

-   Incorrect world scale.
-   Incorrect path placement.
-   Path visibility versus collision/navigation usage.
-   Teleport coordinates.
-   Interaction radii.
-   Camera positioning.
-   Large 3D assets.
-   Production deployment constraints.

## Deployment

The project also provided experience with:

-   Git.
-   GitHub.
-   Git history management.
-   Large asset optimization.
-   Vercel.
-   Production testing.

------------------------------------------------------------------------

# 🧪 Major Development Challenges

### 1. Large 3D Asset

The waterfall asset exceeded GitHub's file-size limit.

**Solution:** Draco compression using GLTF Transform.

### 2. Path Placement

The custom paths needed to align with the existing world.

Small coordinate differences could cause:

-   Floating paths.
-   Paths appearing underground.
-   Incorrect player movement.
-   Broken transitions.

The paths were therefore positioned and tested directly inside the 3D
scene.

### 3. Walkable Surface Detection

The visual path and gameplay navigation needed to work together.

Navigation/reference meshes are used to help keep the player aligned
with intended walkable surfaces.

### 4. Disconnected Areas

Not every building could be connected naturally without making the world
unnecessarily large.

**Solution:** interactive teleport portals.

This keeps the environment compact while still providing multiple
explorable areas.

------------------------------------------------------------------------

# 📈 Future Improvements

The current version focuses on delivering a complete and functional
portfolio experience.

Possible future improvements include:

-   Mobile/touch controls.
-   Improved loading screens.
-   Further asset optimization.
-   More advanced character animation.
-   Sound effects and ambient audio.
-   Background music.
-   More environmental interactions.
-   NPCs or interactive characters.
-   Day/night cycle.
-   More detailed building interiors.
-   Minimap/navigation system.
-   Saveable player progress.
-   More advanced portal effects.
-   Accessibility improvements.
-   Better low-end-device performance.
-   WebGL/mobile performance optimizations.

These are potential extensions rather than requirements for the current
release.

------------------------------------------------------------------------

# 📌 Project Status

  Component               Status
  ----------------------- -------------
  3D World                ✅ Complete
  Player Movement         ✅ Complete
  Third-Person Camera     ✅ Complete
  Walkable Paths          ✅ Complete
  Interaction System      ✅ Complete
  Portfolio Panels        ✅ Complete
  Teleport System         ✅ Complete
  About Section           ✅ Complete
  Achievements Section    ✅ Complete
  Projects Section        ✅ Complete
  Exploration Section     ✅ Complete
  Contact Section         ✅ Complete
  Debug Tools             ✅ Complete
  Asset Optimization      ✅ Complete
  GitHub Repository       ✅ Complete
  Production Deployment   ✅ Complete

------------------------------------------------------------------------

# 🔗 Links

### 🌐 Live Portfolio

https://gourav-world.vercel.app/

### 💻 Source Code

https://github.com/AjayGodara2/gourav-world

### 👨‍💻 GitHub

https://github.com/AjayGodara2

### 💼 LinkedIn

https://www.linkedin.com/in/gourav-godara/

### 📧 Email

godaragourav963@gmail.com

------------------------------------------------------------------------

# 📜 Credits & Asset Attribution

This project uses third-party 3D assets/resources where applicable.

License and attribution information is retained in the repository
alongside the relevant assets:

``` text
public/assets/waterfall/license.txt
public/assets/markers/ender-star/license.txt
public/assets/markers/portal/license.txt
public/assets/signs/license.txt
```

Please review the individual license files before redistributing or
reusing third-party assets.

------------------------------------------------------------------------

# 📄 License

The source code of this project is provided for portfolio and
educational purposes.

Third-party assets included in the repository may have their own
licenses and attribution requirements. Their respective license files
take precedence over the project's source-code usage terms.

------------------------------------------------------------------------

# ⭐ Final Note

Gourav's World was built around one idea:

> **A developer portfolio does not have to be a webpage. It can be an
> experience.**

Welcome to **Gourav's World.** ⛏️🌎
