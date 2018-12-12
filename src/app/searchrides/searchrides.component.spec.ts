import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchridesComponent } from './searchrides.component';

describe('SearchridesComponent', () => {
  let component: SearchridesComponent;
  let fixture: ComponentFixture<SearchridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
