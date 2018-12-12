import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayportalComponent } from './payportal.component';

describe('PayportalComponent', () => {
  let component: PayportalComponent;
  let fixture: ComponentFixture<PayportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
