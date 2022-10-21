import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router, RouterEvent, Scroll, Event } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter, delay, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'portfolio-site';

  constructor (private spinner: NgxSpinnerService, private router: Router) {}

  
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
        this.spinner.hide();
    }, 2000);

    window.addEventListener("scroll", this.scroll, true);
  
    this.router.events
        .pipe(

          //take only scroll events that have an anchor specified
          filter((e: any) => e instanceof Scroll && !!e.anchor),

          //wait for the DOM to resolve. It worked with 10, but it was a small test case
          //so I used 100 just in case
          delay(1000),

          //take the element that the anchor points to
          map((e: Scroll) => document.getElementById(String(e.anchor))),

          //ignore if no element was found
          filter(el => !!el)
        )
        .subscribe(el => 
            document.scrollingElement!
                 .scroll(
                     0, 
                     window.scrollY + el!.getBoundingClientRect().top - (64 + 16)
                 ));
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.scroll);
  }

  scroll() {
    let content = document.querySelector('mat-sidenav-content') as HTMLElement;
    let element = document.querySelector('header') as HTMLElement;
    let footerElement = document.querySelector('footer') as HTMLElement;
    let home = document.querySelector('.background-top') as HTMLElement;
		if (content.scrollTop >= (home.clientHeight - window.innerHeight/10)) {
      element.classList.add('black')
      footerElement.classList.add('fade-in')
		} else {
      element.classList.remove('black')
      footerElement.classList.remove('fade-in')
    }
	}
}
