import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { ItemData, Setting } from 'src/app/person.interface';
import { CrmService } from '../../services/crm.service';
import { IHeader } from '../../models/header';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ListButtonsComponent } from '../list-buttons/list-buttons.component';
import { PopupDisplayCheckboxListComponent } from 'src/app/modules/clients-prospects/components/popup-display-checkbox-list/popup-display-checkbox-list.component';

@Component({
  selector: 'shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  headersForView: IHeader[] = [];
  constructor(
    private readonly crmServices: CrmService,
    private readonly modalService: NzModalService
  ) {}
  ngOnInit(): void {
    this.displayHeadersForView();
  }
  displayHeadersForView() {
    this.crmServices.checkBoxModel$.subscribe((headers: IHeader[]) => {
      this.headersForView = headers.filter((header) => header.checked);
      console.log('Headerrrrrrrrrrrrrrrrrrr', headers);
    });
  }

  openModalOfCheckBoxList(): void {
    this.modalService.create({
      nzContent: PopupDisplayCheckboxListComponent,
    });
  }
}
