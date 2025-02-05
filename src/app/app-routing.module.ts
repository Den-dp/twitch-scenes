import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'chat', loadChildren: () => import('./routes/chat/chat.module').then(m => m.ChatModule)},
  { path: 'overlay', loadChildren: () => import('./routes/overlay/overlay.module').then(m => m.OverlayModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
