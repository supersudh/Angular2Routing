import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionA1FirstComponent } from './section-a1-first.component';

describe('SectionA1FirstComponent', () => {
  let component: SectionA1FirstComponent;
  let fixture: ComponentFixture<SectionA1FirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionA1FirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionA1FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
