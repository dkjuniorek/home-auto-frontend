import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'/status', pathMatch: 'full'},
  {
    path: 'drive',
    loadChildren: ()=> import('./modules/drive/drive.module').then(m => m.DriveModule) 
  },
  {
    path: 'io',
    loadChildren: ()=> import('./modules/i-o/i-o.module').then(m => m.IOModule) 
  },
  {
    path: 'status',
    loadChildren: ()=> import('./modules/status/status.module').then(m => m.StatusModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
