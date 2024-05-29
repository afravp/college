import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtmComponent } from './ttm.component';

describe('TtmComponent', () => {
  let component: TtmComponent;
  let fixture: ComponentFixture<TtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TtmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
