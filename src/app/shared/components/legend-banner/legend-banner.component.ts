import { Component, Input } from '@angular/core';
import { Legend } from 'shared/models/legend';

@Component({
  selector: 'legend-banner',
  templateUrl: './legend-banner.component.html',
  styleUrls: ['./legend-banner.component.scss'],
})
export class LegendBannerComponent {
  @Input('listOfLegends') listOfLegends: Legend[];
  @Input('widthLegend') widthLegend: string;

  showBanner = true;

  close() {
    this.showBanner = false;
  }
}
