import { Component, Input } from '@angular/core';
import { Legend } from 'shared/models/legend';
import { NgFor, NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'legend',
    templateUrl: './legend.component.html',
    styleUrls: ['./legend.component.scss'],
    standalone: true,
    imports: [NgFor, NgClass, NgStyle]
})
export class LegendComponent {
  @Input('listOfLegends') listOfLegends: Legend[];
  @Input('widthLegend') widthLegend: string;
}
