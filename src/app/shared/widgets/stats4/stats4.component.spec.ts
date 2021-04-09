import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stats4Component } from './stats4.component';

describe('Stats4Component', () => {
  let component: Stats4Component;
  let fixture: ComponentFixture<Stats4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stats4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stats4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
