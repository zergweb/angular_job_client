import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './components/init/init.component';
import { InitRoutingModule } from './init.module.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InitComponent],
  imports: [
    CommonModule,
    InitRoutingModule,
    SharedModule
  ]
})
export class InitModule { }
