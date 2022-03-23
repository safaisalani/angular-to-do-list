import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './menu/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import { RouterModule, Routes } from '@angular/router';
// import { LayoutComponent } from './menu/layout/layout.component';

// const routes: Routes = [
//   { path: '', component: LayoutComponent, loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })