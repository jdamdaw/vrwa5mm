import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentelibrocliComponent } from './componentelibrocli.component';

describe('ComponentelibrocliComponent', () => {
  let component: ComponentelibrocliComponent;
  let fixture: ComponentFixture<ComponentelibrocliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentelibrocliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentelibrocliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
