import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { SharedModule } from './app/shared/shared.module';
import { NgZerroModule } from './app/ng-zerro.module';
import { ClientsProspectsModule } from './app/modules/clients-prospects/clients-prospects.module';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(ClientsProspectsModule, NgZerroModule, SharedModule),
        { provide: NZ_I18N, useValue: en_US }
    ]
})
  .catch(err => console.error(err));
