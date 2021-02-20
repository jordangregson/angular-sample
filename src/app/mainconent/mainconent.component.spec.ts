import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainconentComponent } from './mainconent.component';

describe('MainconentComponent', () => {
  let component: MainconentComponent;
  let fixture: ComponentFixture<MainconentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainconentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainconentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
