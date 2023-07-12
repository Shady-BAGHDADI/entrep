import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
    selector: 'shared-strategie-commercial-banner',
    templateUrl: './strategie-commercial-banner.component.html',
    styleUrls: ['./strategie-commercial-banner.component.scss'],
    standalone: true,
    imports: [NzIconModule, NzButtonModule]
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
