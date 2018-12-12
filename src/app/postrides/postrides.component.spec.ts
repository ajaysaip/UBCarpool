import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostridesComponent } from './postrides.component';

describe('PostridesComponent', () => {
  let component: PostridesComponent;
  let fixture: ComponentFixture<PostridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
