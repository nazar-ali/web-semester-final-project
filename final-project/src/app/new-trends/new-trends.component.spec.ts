import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrendsComponent } from './new-trends.component';

describe('NewTrendsComponent', () => {
  let component: NewTrendsComponent;
  let fixture: ComponentFixture<NewTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTrendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
