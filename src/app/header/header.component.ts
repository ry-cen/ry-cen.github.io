import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  


  onToggleSidenav = () => {
    const sidenav = document.querySelector('.navbar-side') as HTMLElement;

    sidenav.classList.add('show');
  }

}
