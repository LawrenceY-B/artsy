import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorcardComponent } from './creatorcard.component';

describe('CreatorcardComponent', () => {
  let component: CreatorcardComponent;
  let fixture: ComponentFixture<CreatorcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
