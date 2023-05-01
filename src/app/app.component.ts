import { Component, HostBinding, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  FormControl,
} from '@angular/forms';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { ItemData, Setting } from './person.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class.no-transition') noTransition = true;

  checked = true;
  listOfOption: Array<{ label: string; value: string }> = [];
  size: NzSelectSizeType = 'large';
  singleValue = 'a10';
  multipleValue = ['a10', 'c12'];
  tagValue = ['a10', 'c12', 'tag'];
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
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
    //On Init data table start
  }
  //On Init data  table fin
}
