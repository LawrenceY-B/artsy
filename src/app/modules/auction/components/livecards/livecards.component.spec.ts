import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivecardsComponent } from './livecards.component';

describe('LivecardsComponent', () => {
  let component: LivecardsComponent;
  let fixture: ComponentFixture<LivecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivecardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
