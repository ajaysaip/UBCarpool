import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportridesComponent } from './reportrides.component';

describe('ReportridesComponent', () => {
  let component: ReportridesComponent;
  let fixture: ComponentFixture<ReportridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
