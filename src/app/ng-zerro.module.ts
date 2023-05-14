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
import { IconDefinition } from '@ant-design/icons-angular';
import { NzModalModule } from 'ng-zorro-antd/modal';

// Import what you need. RECOMMENDED. ✔️
import {
  AccountBookFill,
  AlertFill,
  AlertOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];

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
  NzModalModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, NzIconModule.forRoot(icons)],
  exports: [...ngzerroModules],
})
export class NgZerroModule {}
