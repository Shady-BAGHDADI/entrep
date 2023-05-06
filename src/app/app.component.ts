import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class.no-transition') noTransition = true;

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

  ngOnInit(): void {
    //On Init data table start
  }
  //On Init data  table fin
}
