import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmrideComponent } from './confirmride.component';

describe('ConfirmrideComponent', () => {
  let component: ConfirmrideComponent;
  let fixture: ComponentFixture<ConfirmrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
