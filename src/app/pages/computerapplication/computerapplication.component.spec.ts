import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerapplicationComponent } from './computerapplication.component';

describe('ComputerapplicationComponent', () => {
  let component: ComputerapplicationComponent;
  let fixture: ComponentFixture<ComputerapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerapplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
