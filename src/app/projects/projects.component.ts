import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [{"name": "Portfolio Site"}, {"name": "Multiplayer Shogi Game"}, {"name": "Cash Wallet"}, {"name": "L-Store Database"}, {"name": "3D Model Viewer"}, {"name" : "Rush Hour Solver"}]

  constructor() { }

  ngOnInit(): void {
  }

}
