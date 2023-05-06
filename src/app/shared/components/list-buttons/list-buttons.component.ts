import { Component } from '@angular/core';
import { NzSelectSizeType } from 'ng-zorro-antd/select';

@Component({
  selector: 'shared-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.scss'],
})
export class ListButtonsComponent {
  buttons = [
    'Synthétique',
    'Identité',
    'Commercial',
    'Risque',
    'Financier',
    'Equipement',
  ];
  selectedButtonIndex: number = 0;
  table1Visible: boolean = false;
  table2Visible: boolean = false;
  table3Visible: boolean = false;
  loading: boolean = false;
  selectedTabIndex: number = 1;
  showButtons: boolean = false;
  size: NzSelectSizeType = 'large';

  onTabClick() {
    this.selectedTabIndex = 1; // Mettre à jour l'index du tab sélectionné
    this.showButtons = true; // Afficher les boutons
  }

  onButtonClick(buttonIndex: number): void {
    this.selectedButtonIndex = buttonIndex;
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
    // Mettez à jour la visibilité des tableaux
    this.table1Visible = buttonIndex === 0;
    this.table2Visible = buttonIndex === 1;
    this.table3Visible = buttonIndex === 2;
    // ... mettez à jour la visibilité des autres tableaux en fonction de l'index
  }
}
