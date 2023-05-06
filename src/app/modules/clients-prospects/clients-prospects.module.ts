import { NgModule } from '@angular/core';
import { NgZerroModule } from 'src/app/ng-zerro.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [SearchFormComponent],
  imports: [NgZerroModule, SharedModule],
  exports: [SearchFormComponent],
})
export class ClientsProspectsModule {}
