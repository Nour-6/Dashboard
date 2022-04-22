import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulerCandidatureComponent } from './postuler-candidature.component';

describe('PostulerCandidatureComponent', () => {
  let component: PostulerCandidatureComponent;
  let fixture: ComponentFixture<PostulerCandidatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulerCandidatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulerCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
