import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenSinkComponent } from './kitchen-sink.component';

const routes: Routes = [{
  path: '',
  component: KitchenSinkComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenSinkRoutingModule { }
