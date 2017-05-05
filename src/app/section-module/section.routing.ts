import { SectionA1FirstComponent } from './../section-a1-first/section-a1-first.component';
import { SectionA1Component } from './../section-a1/section-a1.component';
import { SectionAComponent } from './../section-a/section-a.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const section_routes: Routes = [
  {
    path: '',
    component: SectionAComponent,
    children: [
      {
        path: 'a1',
        component: SectionA1Component,
        children: [
          {
            path: 'first-component',
            component: SectionA1FirstComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(section_routes)],
  exports: [
    RouterModule
  ]
})
export class SectionRoutingModule { }