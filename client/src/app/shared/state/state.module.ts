import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxsModule, Store } from "@ngxs/store";
import { ApiModule } from "../api/api.module";
import { UserState } from "./state";


@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([UserState]),
    ApiModule
  ],
  providers: [

  ]
})
export class StateModule { }
