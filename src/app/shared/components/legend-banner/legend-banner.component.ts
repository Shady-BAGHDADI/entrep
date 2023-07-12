import { Component, Input } from '@angular/core';
import { Legend } from 'shared/models/legend';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'legend-banner',
    templateUrl: './legend-banner.component.html',
    styleUrls: ['./legend-banner.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, NgClass, NgStyle, NzIconModule, NzButtonModule]
})
export class LegendBannerComponent {
  @Input('listOfLegends') listOfLegends: Legend[];
  @Input('widthLegend') widthLegend: string;

  showBanner = true;

  close() {
    this.showBanner = false;
  }
}
