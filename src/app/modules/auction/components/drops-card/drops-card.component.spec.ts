import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropsCardComponent } from './drops-card.component';

describe('DropsCardComponent', () => {
  let component: DropsCardComponent;
  let fixture: ComponentFixture<DropsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
