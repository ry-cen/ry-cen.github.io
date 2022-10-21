import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'portfolio-site';

  constructor (private spinner: NgxSpinnerService) {}

  
  
  
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
        this.spinner.hide();
    }, 2000);

    window.addEventListener('scroll', this.scroll , true)
  }

  scroll() {
    let content = document.querySelector('mat-sidenav-content') as HTMLElement;
    let element = document.querySelector('header') as HTMLElement;
    let home = document.querySelector('.background-top') as HTMLElement;
		if (content.scrollTop >= (home.clientHeight - window.innerHeight/10)) {
      element.classList.add('navbar-black')
		} else {
      element.classList.remove('navbar-black')
    }
	}
}
