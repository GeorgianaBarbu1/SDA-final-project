import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredSubjectsComponent } from './filtered-subjects.component';

describe('FilteredSubjectsComponent', () => {
  let component: FilteredSubjectsComponent;
  let fixture: ComponentFixture<FilteredSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
