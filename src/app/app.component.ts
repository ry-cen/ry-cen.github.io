import { Component, } from '@angular/core';
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
    }, 1000);

    window.addEventListener("scroll", this.scroll, true);

    const intersectionObserver = new IntersectionObserver((entry) => {
      
    })
  
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.scroll);
  }

  onClick() {
    const sidenav = document.querySelector('.navbar-side') as HTMLElement;

    sidenav.classList.remove('show');
  }

  scroll() {
    let element = document.querySelector('header') as HTMLElement;
    let footerElement = document.querySelector('footer') as HTMLElement;
    let home = document.querySelector('.background-top') as HTMLElement;
		if (window.scrollY >= (home.clientHeight - (12*window.innerHeight)/100)) {
      element.classList.add('black')
      footerElement.classList.add('fade-in')
		} else {
      element.classList.remove('black')
      footerElement.classList.remove('fade-in')
    }
	}
}
