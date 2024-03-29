import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { AppComponent } from './app.component';
import { ClientsProspectsComponent } from './modules/clients-prospects/clients-prospects.component';
import { ClientsProspectsModule } from './modules/clients-prospects/clients-prospects.module';
import { NgZerroModule } from './ng-zerro.module';
import { SharedModule } from './shared/shared.module';
import { SettingFill } from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, ClientsProspectsComponent],
  imports: [ClientsProspectsModule, NgZerroModule, SharedModule],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    // {
    //   provide: NZ_ICONS,
    //   useValue: [SettingFill],
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
