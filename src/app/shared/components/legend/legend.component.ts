import { Component, Input } from '@angular/core';
import { Legend } from 'shared/models/legend';

@Component({
  selector: 'legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss'],
})
export class LegendComponent {
  @Input('listOfLegends') listOfLegends: Legend[];
  @Input('widthLegend') widthLegend: string;
}
