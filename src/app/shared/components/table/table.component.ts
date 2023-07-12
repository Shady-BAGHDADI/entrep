import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IHeader } from '../../models/header';
import { CrmService } from '../../services/crm.service';
import { PopupDisplayCheckboxListComponent } from 'app/modules/clients-prospects/components/popup-display-checkbox-list/popup-display-checkbox-list.component';
import { IResultSearch } from 'shared/models/resultsearch';
import { SharedConstants } from 'shared/constants';
import { Legend } from 'shared/models/legend';
import { StrategieCommercialBannerComponent } from '../strategie-commercial-banner/strategie-commercial-banner.component';
import { LegendBannerComponent } from '../legend-banner/legend-banner.component';
import { LegendComponent } from '../legend/legend.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgClass, NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
    selector: 'shared-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    standalone: true,
    imports: [NzSelectModule, FormsModule, NgFor, NzIconModule, NzButtonModule, NzPaginationModule, NzTableModule, NgIf, NgSwitch, NgSwitchCase, NgClass, NgSwitchDefault, LegendComponent, LegendBannerComponent, StrategieCommercialBannerComponent]
})
export class TableComponent implements OnInit {
  headersForView: IHeader[] = [];

  /*
  sort page by numbers
  */
  filterCases: any[] = [];
  rowCount: any;
  isCheckboxSelected = false;

  constructor(
    private readonly crmService: CrmService,
    private readonly modalService: NzModalService
  ) {}

  ngOnInit() {
    //this.displayHeadersForView();
    this.dataToDisplayInTable();
    //ngswitch deux colonnes de mm id name

    this.filterCases = [
      {
        name: 'Afficher par 10',
        value: 10,
      },
      {
        name: 'Afficher par 25',
        value: 25,
      },
      { name: 'Afficher par 50', value: 50 },
      {
        name: 'Afficher par 100',
        value: 100,
      },
    ];
    this.rowCount = this.filterCases[0].value;
    this.getStoredForm();

    this.firstReload();
  }
  //pour afficher le banner que si synthetique
  //get is() to appeler en html sans parenthese
  get isSynthetique(): boolean {
    return this.crmService.popUpHeadersText === 'Synthétique';
  }
  get isCommercial(): boolean {
    return this.crmService.buttonActiveType === 'commercial';
  }

  toggleCheckbox() {
    this.isCheckboxSelected = this.listInputCheckBox.some(
      (checkBox) => checkBox.nativeElement.checked
    );
  }

  firstReload() {
    let newFormShapCRM: any = {
      skipFrom: 0,
      skipCount: 10,
      text: '',
      data: [
        {
          name: 'typeclient',
          value: 'C',
        },
      ],
    };
    this.crmService.storeForm(newFormShapCRM);
    this.crmService
      .sendSearchCrmForm(newFormShapCRM)
      .subscribe((resultSearch: IResultSearch) => {
        this.crmService.resultSearch(resultSearch);
      });
  }
  displayHeadersForView() {
    // this.crmService.checkBoxModel$.subscribe((headers: IHeader[]) => {
    //   this.headersForView = headers.filter((header) => header.checked);
    // });
  }
  lengthDataTable = 0;
  currentPage;
  dataTable: { columns: { name: string; value: string }[] }[] = [];

  dataTableForView: any[] = [];
  allColumns = SharedConstants.all;
  dataToDisplayInTable() {
    this.crmService.resultSearchForm$.subscribe(
      (resultSearch: IResultSearch) => {
        console.error(resultSearch);

        this.lengthDataTable = resultSearch.totalCount;
        this.currentPage = resultSearch.currentPage;
        this.dataTable = resultSearch.data?.values;

        //Handle Header
        this.crmService.checkBoxModel$.subscribe((headers: IHeader[]) => {
          this.headersForView = this.allColumns.map((c) => {
            c.checked = headers.some((h) => h.id === c.id);

            return c;
          });

          //i get the hecked "true" to display them in html
          this.headersForView = headers.filter((header) => header.checked);

          this.filterHeadersAndSortByColumn();
        });
      }
    );
  }

  filterHeadersAndSortByColumn() {
    this.dataTableForView = [];

    if (this.dataTable?.length > 0) {
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

        missedCol.forEach((m) => {
          data.columns.push({
            name: m.id,
            value: '-',
          });
        });

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

        data.columns.sort((a: any, b: any) => {
          const aIndex = sortArray.indexOf(a.name);
          const bIndex = sortArray.indexOf(b.name);
          return aIndex - bIndex;
        });

        this.dataTableForView.push(data);
      });
    }
  }
  openModalOfCheckBoxList(): void {
    this.modalService.create({
      nzContent: PopupDisplayCheckboxListComponent,
    });
  }
  //select && deselect all from children to parent
  @ViewChildren('checkBox') listInputCheckBox: QueryList<any>; //list des inputs checkBox
  selectAllCheckBox(event: any) {
    console.error('parent', event, this.listInputCheckBox);
    //pour chaque checkbox, on trigger un click si il n'est pas checked et que checkedAll est true
    this.listInputCheckBox.toArray().forEach((elt) => {
      console.error('elt', elt);

      if (
        (!event && elt.nativeElement.checked) ||
        (event && !elt.nativeElement.checked)
      ) {
        elt.nativeElement.click();
      }
      if (event && elt.nativeElement.checked) {
        return;
      }
    });
  }

  //send the length to the child
  @Output() listCheckBoxEmitter = new EventEmitter<any[]>();
  listOfCheckBox = [];
  checkBoxClicked(result) {
    //on check s'il est deja coché
    const valueExist = this.listOfCheckBox?.some(
      (oneCheckbox) => oneCheckbox === result
    );
    if (!valueExist) {
      this.listOfCheckBox?.push(result);
    } else {
      const index = this.listOfCheckBox.indexOf(result);
      if (index > -1) {
        this.listOfCheckBox.splice(index, 1);
      }
    }
    console.log('listOfCheckBox', this.listOfCheckBox);
  }

  export() {}

  /* paginaate Table with number of rows : 10,25,50...*/

  isLoading = false;
  skipRequest: any;

  paginateTable(rowCount: any) {
    // skipFrom: numero de la page
    //skipCount: nombres des element à afficher
    this.isLoading = true;

    // this.skipRequest = {
    //   skipFrom: 0,
    //   skipCount: rowCount,
    // };
    // console.log(this.skipRequest);

    let newForm = {
      ...this.storedForm,
      skipFrom: 0,
      skipCount: rowCount,
    };

    this.crmService
      .sendSearchCrmForm(newForm)
      .subscribe((newResultSearch: IResultSearch) => {
        this.dataTable = newResultSearch.data?.values;
      });
  }
  storedForm: any;
  getStoredForm() {
    this.crmService.getStoredForm$.subscribe((oldForm: any) => {
      this.storedForm = oldForm;
      console.log('oldForm', oldForm);
    });
  }
  /* paginaate Table per pages  : 1,2,3...*/
  numberPage = 0;
  computeNumberOfPages() {
    this.numberPage = Math.ceil(this.lengthDataTable / this.rowCount);
  }
  onPageChange(page: number) {
    this.currentPage = page;

    this.isLoading = true;
    let skipFrom = (page - 1) * this.rowCount;
    let newForm = {
      ...this.storedForm,
      skipFrom,
      skipCount: this.rowCount,
    };
    this.crmService
      .sendSearchCrmForm(newForm)
      .subscribe((newResultSearch: IResultSearch) => {
        this.dataTable = newResultSearch.data?.values;
        //compute Number of page :this.computeNumberOfPages()
        this.lengthDataTable = this.dataTable.length;
        this.filterHeadersAndSortByColumn();
        this.isLoading = false;
      });
  }

  /*Display the banner in synthetique table */
  listOfLegends: Legend[] = [
    {
      text: 'Date entre 10 et 12 mois ',
      color: '#ffad13',
    },
    {
      text: 'Date de plus de 12 mois ',
      color: '#ee1A1A',
    },
  ];
}
