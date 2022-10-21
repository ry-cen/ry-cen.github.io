import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ProjectsComponent,
		AboutComponent,
		ContactComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatButtonModule,
		MatCardModule,
		MatSidenavModule,
		MatIconModule,
		BrowserAnimationsModule,
		RouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
