import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'kitchen-sink',
    loadChildren: () => import('./pages/kitchen-sink/kitchen-sink.module').then(m => m.KitchenSinkModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
