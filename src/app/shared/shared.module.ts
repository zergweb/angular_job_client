import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NoContentPageComponent } from './components/no-content-page/no-content-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AccessDeniedPageComponent } from './components/access-denied-page/access-denied-page.component';
import { MaterialModule } from '../modules/material.module';

const items = [
  NotFoundPageComponent,
  NoContentPageComponent,
  ErrorPageComponent,
  AccessDeniedPageComponent
];

@NgModule({
  declarations: [...items],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [...items, MaterialModule]
})
export class SharedModule { }
