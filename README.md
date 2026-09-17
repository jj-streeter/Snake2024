# Project Overview:
This project was completed from January to May of 2024 for CSCI 2510 Introduction to Game Programming at University of Nebraska at Omaha.
The game engine was built from scratch over the semester as the core focus of the course, and Snake was chosen as a specific game
to recreate for the final project. The structure and function of the engine is modeled after the Unity Game Engine, and was written using JavaScript.
The game is built to run on a web browser using a local server to access the HTML file.

# Intructions for running this game:
1. Download or clone the Snake2024 project
2. Start a local web server from the project folder
3. Open the game in a browser at:
   
      http://localhost:8000/snake/
   
      or, if the project is served from its parent folder:

   http://localhost:8000/Snake2024/snake/

# Topics and skills developed:
### Game engine architecture
   Built a lightweight game engine with a render loop, scene management, and lifecycle updates in Engine.js, Scene.js, and GameObject.js
### Component-based design
   Implemented reusable systems using GameObjects and Components in Component.js and Transform.js
### Input handling and controls
   Processed keyboard and mouse events for gameplay interaction in Input.js and KeyboardComponent.js
### Collision detection
   Created geometric and point-based collision logic for gameplay boundaries and object interaction in Collisions.js and CollisionsGeometric.js
### Canvas rendering and UI
   Built game visuals and HUD-style elements using the browser canvas and custom drawable components in index.html and Rectangle.js
### Gameplay systems design
   Implemented snake movement, scoring, food collection, death logic, and scene transitions in MainScene.js, DeathScene.js, and the components
### Math and vector logic
   Used coordinate math, transforms, and geometry to manage movement and positioning in Vector2.js
### JavaScript project organization
   Structured a modular codebase with separate engine, prefabs, scenes, and gameplay components for maintainability
