import { Component } from '@angular/core';
import { TableComponent } from '../../shared/components/table/table.component';
import { ListButtonsComponent } from '../../shared/components/list-buttons/list-buttons.component';
import { NgFor } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { SearchFormComponent } from './components/search-form/search-form.component';

@Component({
    selector: 'app-clients-prospects',
    templateUrl: './clients-prospects.component.html',
    styleUrls: ['./clients-prospects.component.scss'],
    standalone: true,
    imports: [SearchFormComponent, NzTabsModule, NgFor, ListButtonsComponent, TableComponent]
})
export class ClientsProspectsComponent {
  singleValue = 'a10';
  multipleValue = ['a10', 'c12'];
  tabs = [
    'Tableau de bord',
    'Connaissance clients',
    'Gestion des actions',
    'Gestion des affaires',
    'Plan de relation clients',
    'Modification en masse',
  ];

  selectedTabIndex: number = 1;
  selectedButtonIndex: number = 0;

  showButtons: boolean = false;
  //declaration table start
  //declaration data table fin
  onTabClick() {
    this.selectedTabIndex = 1; // Mettre à jour l'index du tab sélectionné
    this.showButtons = true; // Afficher les boutons
  }
  table1Visible: boolean = false;
  table2Visible: boolean = false;
  table3Visible: boolean = false;
  loading: boolean = false;
}
