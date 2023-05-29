import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendBannerComponent } from './legend-banner.component';

describe('LegendBannerComponent', () => {
  let component: LegendBannerComponent;
  let fixture: ComponentFixture<LegendBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegendBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
