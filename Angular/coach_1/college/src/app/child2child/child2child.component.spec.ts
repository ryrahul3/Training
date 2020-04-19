import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2childComponent } from './child2child.component';

describe('Child2childComponent', () => {
  let component: Child2childComponent;
  let fixture: ComponentFixture<Child2childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
