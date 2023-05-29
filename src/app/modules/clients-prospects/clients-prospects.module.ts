import { NgModule } from '@angular/core';

import { SearchFormComponent } from './components/search-form/search-form.component';
import { PopupDisplayCheckboxListComponent } from './components/popup-display-checkbox-list/popup-display-checkbox-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { NgZerroModule } from 'app/ng-zerro.module';
import { SharedModule } from 'shared/shared.module';
import { CrmService } from 'shared/services/crm.service';

@NgModule({
  declarations: [SearchFormComponent, PopupDisplayCheckboxListComponent],
  imports: [
    NgZerroModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  exports: [SearchFormComponent, PopupDisplayCheckboxListComponent],
  providers: [CrmService],
})
export class ClientsProspectsModule {}
