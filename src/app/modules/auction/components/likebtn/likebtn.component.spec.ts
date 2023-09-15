import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikebtnComponent } from './likebtn.component';

describe('LikebtnComponent', () => {
  let component: LikebtnComponent;
  let fixture: ComponentFixture<LikebtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikebtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
