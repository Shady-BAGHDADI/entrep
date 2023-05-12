import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IHeader } from 'src/app/shared/models/header';
import { CrmService } from 'src/app/shared/services/crm.service';

@Component({
  selector: 'app-popup-display-checkbox-list',
  templateUrl: './popup-display-checkbox-list.component.html',
  styleUrls: ['./popup-display-checkbox-list.component.scss'],
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

  // height = '0px';
  // updateHeightPopup() {
  //   const typeOfPopup = this.crmService.popUpHeadersText;
  //   i can use global var in service and test on type of button not label

  //   switch (typeOfPopup) {
  //     case 'Synthétique':
  //       this.height = '400px';
  //       break;
  //     case 'Identité':
  //       this.height = '200px';
  //       break;
  //     default:
  //       this.height = '500px';
  //       break;
  //   }
  // }
}
