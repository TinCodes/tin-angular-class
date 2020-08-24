import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalCherryComponent } from './metal-cherry.component';

describe('MetalCherryComponent', () => {
  let component: MetalCherryComponent;
  let fixture: ComponentFixture<MetalCherryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalCherryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalCherryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
