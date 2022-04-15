import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenSinkRoutingModule } from './kitchen-sink-routing.module';
import { KitchenSinkComponent } from './kitchen-sink.component';
import { NgxsModule } from '@ngxs/store';
import { StateModule } from '../../shared/state/state.module';
import { UserState } from '../../shared/state/state';


@NgModule({
  declarations: [
    KitchenSinkComponent
  ],
  imports: [
    CommonModule,
    KitchenSinkRoutingModule,
    StateModule
    // NgxsModule.forFeature([UserState])
  ]
})
export class KitchenSinkModule { }
