import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IHeader } from '../../models/header';
import { CrmService } from '../../services/crm.service';
import { PopupDisplayCheckboxListComponent } from 'app/modules/clients-prospects/components/popup-display-checkbox-list/popup-display-checkbox-list.component';
import { IResultSearch } from 'shared/models/resultsearch';
import { SharedConstants } from 'shared/constants';

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
    //this.displayHeadersForView();
    this.dataToDisplayInTable();
  }
  displayHeadersForView() {
    // this.crmServices.checkBoxModel$.subscribe((headers: IHeader[]) => {
    //   this.headersForView = headers.filter((header) => header.checked);
    //   console.log('Headerrrrrrrrrrrrrrrrrrr', headers);
    // });
  }
  lengthDataTable = 0;
  dataTable: { columns: { name: string; value: string }[] }[] = [];

  dataTableForView: any[] = [];
  allColumns = SharedConstants.all;
  dataToDisplayInTable() {
    this.crmServices.resultSearchForm$.subscribe(
      (resultSearch: IResultSearch) => {
        console.log('from the table', resultSearch.totalCount);
        this.lengthDataTable = resultSearch.totalCount;
        this.dataTable = resultSearch.data.values;

        //Handle Header
        this.crmServices.checkBoxModel$.subscribe((headers: IHeader[]) => {
          console.log('header-constants', headers);
          this.headersForView = this.allColumns.map((c) => {
            c.checked = headers.some((h) => h.id === c.id);

            return c;
          });
          console.log('header', this.headersForView);
          //i get the hecked "true" to display them in html
          this.headersForView = headers.filter((header) => header.checked);
          console.log('header', this.headersForView);
          this.filterHeadersAndSortByColumn();
        });
      }
    );
  }

  filterHeadersAndSortByColumn() {
    this.dataTableForView = [];
    console.log('dataTable', this.dataTable);
    if (this.dataTable.length > 0) {
      this.dataTable.forEach((value) => {
        const data: any = {};
        data.columns = value.columns.filter((v: any) => {
          return this.headersForView.some((h) => h.id === v.name);
        });

        /*si il manque des colonnes dans les données il faut rajouter ces colonnes manuellement
exemple date BDF recuperé de BFF n'a pas de value donc il
faut le changer par "-"

*/
        const missedCol = this.headersForView.filter(
          (h) => !data.columns.some((d: any) => d.name === h.id)
        );
        console.log('missedCol', missedCol);
        missedCol.forEach((m) => {
          data.columns.push({
            name: m.id,
            value: '-',
          });
        });

        console.log('headerdataColumn', data.columns);
        /*Sort header for view :  i have table of object
        and i need to sort this table par rapport table of chaine
        de caracter
             const array = [
          //data.columns : bff
          { name: 'chadi', age: 32 },
          { name: 'takwa', age: 30 },
        ];
        const ordre = ['takwa', 'chadi']; //headerForView :constants
        */

        const sortArray = this.headersForView.map((h) => h.id);
        console.log('header', this.headersForView);
        data.columns.sort((a: any, b: any) => {
          const aIndex = sortArray.indexOf(a.name);
          const bIndex = sortArray.indexOf(b.name);
          return aIndex - bIndex;
        });
        console.log('data', data);
        this.dataTableForView.push(data);
      });
    }
  }
  openModalOfCheckBoxList(): void {
    this.modalService.create({
      nzContent: PopupDisplayCheckboxListComponent,
    });
  }
}
