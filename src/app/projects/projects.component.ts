import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    { "name": "Portfolio Site", 
      "link": "https://github.com/ry-cen/portfolio-site", 
      "tools": "JavaScript / Angular",
      "desc": "Fully responsive website that displays projects, skills, and information about me.", 
      "bullets": ["Utilized Angular to create a responsive navigation bar that becomes a side menu on mobile.", 
                "Designed and implemented an easily scalable projects section using components."]}, 
    { "name": "Multiplayer Shogi Game", 
      "link": "https://github.com/ry-cen/shogi-game",
      "tools": "JavaScript / React / Node.js",
      "desc": "Full stack web app that allows two players to play Shogi against each other.", 
      "bullets": ["Implemented model-view-controller design pattern to communicate between UI and game model.", 
                  "Designed fully interactive React front-end to handle piece movement and game logic.",
                  "Created a socket based back-end to manage game instances and communicate moves between clients."]}, 
    { "name": "Cash Wallet", 
      "link": "https://github.com/ry-cen/cash-wallet",
      "tools": "C++ / Stripe API",
      "desc": "Back-end for a peer to peer payment system with thread concurrency for transactions.", 
      "bullets": ["Implemented thread safe processes for modifying user information, depositing money, and transferring money.",
                  "Utilized Stripe’s API to process payments through credit card when depositing money into an account."]}, 
    { "name": "L-Store Database", 
      "link": "https://github.com/ry-cen/lstore-database",
      "tools": "Python",
      "desc": "Web app that can display OBJ files and allows the user to move the camera, models and light sources.", 
      "bullets": ["Planned implementation of the database system and designed overall system architecture.", 
                  "Lead the group and divided work for parts of the project among group members to meet project deadlines.",
                  "Optimized run time of reading and writing records by 80% and 90% respectively during refactor."]}, 
    { "name": "3D Model Viewer", 
      "link": "https://github.com/ry-cen/3d-model-viewer",
      "tools": "JavaScript / WebGL / GLSL",
      "desc": "Web app that can display OBJ files and allows the user to move the camera, models and light sources.", 
      "bullets": ["Wrote code in GLSL for Phong and Gouraud shading in the scene with point and directional light sources.",
                  "Calculated model view projection matrix for perspective and orthographic projection based on scene properties.",
                  "Developed object based scene and implemented raycasting to select models and light sources to modify."]}, 
    { "name" : "Rush Hour Solver", 
      "link": "https://github.com/ry-cen/RushHourSolver",
      "tools": "JavaScript / React / Node.js / Python",
      "desc": "Program that uses A* search algorithm to find the optimal solution to a given Rush Hour puzzle.", 
      "bullets": ["Utilizes backtracking and A* to return every move used in order to get to the optimal solution.",
                  "Interactive front-end to configure the puzzle to solve before running the script and displaying the solution."]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
