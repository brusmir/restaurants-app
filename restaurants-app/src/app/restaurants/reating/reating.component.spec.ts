import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReatingComponent } from './reating.component';

describe('ReatingComponent', () => {
  let component: ReatingComponent;
  let fixture: ComponentFixture<ReatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
