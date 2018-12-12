import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewridesComponent } from './viewrides.component';

describe('ViewridesComponent', () => {
  let component: ViewridesComponent;
  let fixture: ComponentFixture<ViewridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
