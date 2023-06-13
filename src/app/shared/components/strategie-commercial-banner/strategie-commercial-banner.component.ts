import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-strategie-commercial-banner',
  templateUrl: './strategie-commercial-banner.component.html',
  styleUrls: ['./strategie-commercial-banner.component.scss'],
})
export class StrategieCommercialBannerComponent {
  /* i need to tell the parent that i will checkAll checkbox */

  isAllChecked = true;
  @Output() selectAllCheckBoxEmitter = new EventEmitter<boolean>();

  selectAll() {
    this.selectAllCheckBoxEmitter.emit(this.isAllChecked);
    this.isAllChecked = !this.isAllChecked;
  }
  @Input('lengthCheckbox') lengthCheckbox = 0;

  updateStrategies() {}
}
