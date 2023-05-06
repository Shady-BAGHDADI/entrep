import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
const ngzerroModules = [
  NzCollapseModule,
  NzSelectModule,
  NzCheckboxModule,
  NzInputModule,
  NzIconModule,
  NzEmptyModule,
  NzButtonModule,
  NzTabsModule,
  NzTableModule,
  NzDividerModule,
  NzSpinModule,
  NzRadioModule,
  NzFormModule,
  NzPaginationModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...ngzerroModules],
})
export class NgZerroModule {}
