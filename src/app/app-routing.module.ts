import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routes: Routes = [];

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled', 
	onSameUrlNavigation: 'reload', 
	scrollPositionRestoration: 'enabled',
	scrollOffset: [0, 64 + 16]
};


@NgModule({
	imports: [RouterModule.forRoot(routes, routerOptions)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
