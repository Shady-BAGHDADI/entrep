import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IHeader } from 'shared/models/header';
import { CrmService } from 'shared/services/crm.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-popup-display-checkbox-list',
    templateUrl: './popup-display-checkbox-list.component.html',
    styleUrls: ['./popup-display-checkbox-list.component.scss'],
    standalone: true,
    imports: [NgFor, NzIconModule, NzButtonModule]
})
export class PopupDisplayCheckboxListComponent implements OnInit {
  listOfCheckBox: IHeader[] = [];
  lengthSelected = 0;
  popupHeadersText = '';

  constructor(
    private readonly modalService: NzModalService,
    private readonly crmService: CrmService
  ) {}
  ngOnInit() {
    this.getListOfCheckbox();
    this.popupHeadersText = this.crmService.popUpHeadersText;
    //this.updateHeightPopup();
  }
  isVisible = false;
  isConfirmLoading = false;

  getListOfCheckbox() {
    this.crmService.checkBoxModel$.subscribe((initHeaders) => {
      this.listOfCheckBox = initHeaders;
      this.lengthSelected = this.listOfCheckBox.filter(
        (input) => input.checked
      ).length;
    });
  }
  condition = false;
  add(): void {
    this.condition = this.lengthSelected > 9 || this.lengthSelected < 2;
    if (this.condition) {
      return;
    }
    this.crmService.updateCheckBoxModal(this.listOfCheckBox);
    this.close();
  }
  change(d: IHeader) {
    d.checked = !d.checked;

    this.lengthSelected = this.listOfCheckBox.filter(
      (input) => input.checked
    ).length;
  }

  close(): void {
    this.modalService.closeAll();
  }

  //if i check Relation commerciale Siren devient unchecked and the else of that

  /*    <input type="checkbox" [checked]="d.checked || d.id==='strategierelationnelle'" (change)="change(d)"
  [disabled]="setDisabled(d)">
  */

  /*
  setDisabled(column: IHeader) {
    let relationCommerciale = this.listOfCheckBox.find((rc) => {
      return rc.id === 'groupecommercial';
    });
    let representantlegal = this.listOfCheckBox.find((rc) => {
      return rc.id === 'representantlegal';
    });
    // il faut selectionner au minumum deux colone (checked + disabled)
    //j'ai fait le checked de strategierelationnelle de html avec proprietes binding [checked]
    if (column.id === 'siren' || column.id === 'strategierelationnelle') {
      return true;
    }
    //si l'une est check" l'autre uncheck
    if (
      (column.id === relationCommerciale?.id && representantlegal?.checked) ||
      (column.id === representantlegal?.id && relationCommerciale?.checked)
    ) {
      return true;
    }
    return false;
  } */

  //x=2 //afectation : danx x il y a 2
  //x==2 // comparaison :est ce que x egale à 2 ?
  //x===2//comparaison :est ce que x egale à 2 ? et type de x est un nombre comme type de 2

  /*
  height = '0px';
  updateHeightPopup() {
    const typeOfPopup = this.crmService.popUpHeadersText;
    i can use global var in service and test on type of button not label

    switch (typeOfPopup) {
      case 'Synthétique':
        this.height = '400px';
        break;
      case 'Identité':
        this.height = '200px';
        break;
      default:
        this.height = '500px';
        break;
    }
  }
  */
}
