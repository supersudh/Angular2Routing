import { SectionA1FirstComponent } from './../section-a1-first/section-a1-first.component';
import { SectionA1Component } from './../section-a1/section-a1.component';
import { SectionA2Component } from './../section-a2/section-a2.component';
import { SectionRoutingModule } from './section.routing';
import { SectionAComponent } from './../section-a/section-a.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SectionRoutingModule
  ],
  declarations: [
    SectionAComponent,
    SectionA2Component,
    SectionA1Component,
    SectionA1FirstComponent
  ]
})
export class SectionModuleModule { }
