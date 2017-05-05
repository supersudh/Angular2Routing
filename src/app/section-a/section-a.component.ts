import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-section-a',
  template: `
    <p>
      section-a Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class SectionAComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['a1'], { relativeTo: this.route });
    }, 2500)
  }

}
