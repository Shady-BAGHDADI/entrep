import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { ListButtonsComponent } from './components/list-buttons/list-buttons.component';
import { TableComponent } from './components/table/table.component';
import { NgZerroModule } from '../ng-zerro.module';
import { LegendComponent } from './components/legend/legend.component';
import { LegendBannerComponent } from './components/legend-banner/legend-banner.component';
import { StrategieCommercialBannerComponent } from './components/strategie-commercial-banner/strategie-commercial-banner.component';
const sharedModules = [
  CommonModule,
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  NgZerroModule,
];
const sharedComponents = [
  ListButtonsComponent,
  TableComponent,
  LegendComponent,
  LegendBannerComponent,
  StrategieCommercialBannerComponent,
];
@NgModule({
    imports: [...sharedModules, ...sharedComponents],
    exports: [...sharedModules, ...sharedComponents]
})
export class SharedModule {}
