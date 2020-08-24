import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowCherryComponent } from './glow-cherry.component';

describe('GlowCherryComponent', () => {
  let component: GlowCherryComponent;
  let fixture: ComponentFixture<GlowCherryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlowCherryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowCherryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
