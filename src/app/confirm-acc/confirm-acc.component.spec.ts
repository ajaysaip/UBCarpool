import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAccComponent } from './confirm-acc.component';

describe('ConfirmAccComponent', () => {
  let component: ConfirmAccComponent;
  let fixture: ComponentFixture<ConfirmAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
