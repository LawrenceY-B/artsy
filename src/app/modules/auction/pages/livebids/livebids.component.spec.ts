import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivebidsComponent } from './livebids.component';

describe('LivebidsComponent', () => {
  let component: LivebidsComponent;
  let fixture: ComponentFixture<LivebidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivebidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivebidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
