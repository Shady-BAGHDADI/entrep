import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategieCommercialBannerComponent } from './strategie-commercial-banner.component';

describe('StrategieCommercialBannerComponent', () => {
  let component: StrategieCommercialBannerComponent;
  let fixture: ComponentFixture<StrategieCommercialBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategieCommercialBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategieCommercialBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
