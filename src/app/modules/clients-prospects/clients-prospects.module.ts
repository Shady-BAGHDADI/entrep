import { NgModule } from '@angular/core';
import { NgZerroModule } from 'src/app/ng-zerro.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { PopupDisplayCheckboxListComponent } from './components/popup-display-checkbox-list/popup-display-checkbox-list.component';

@NgModule({
  declarations: [SearchFormComponent, PopupDisplayCheckboxListComponent],
  imports: [NgZerroModule, SharedModule],
  exports: [SearchFormComponent, PopupDisplayCheckboxListComponent],
})
export class ClientsProspectsModule {}
