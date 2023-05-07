import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsProspectsComponent } from './modules/clients-prospects/clients-prospects.component';

const routes: Routes = [{ path: '', component: ClientsProspectsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
