import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringCardComponent } from './tutoring-card.component';

describe('TutoringCardComponent', () => {
  let component: TutoringCardComponent;
  let fixture: ComponentFixture<TutoringCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoringCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
