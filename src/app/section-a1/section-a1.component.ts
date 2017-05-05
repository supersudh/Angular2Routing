import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-section-a1',
  template: `
    <p>
      section-a1 Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class SectionA1Component implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['first-component'], { relativeTo: this.route });
    }, 2500)
  }

}
