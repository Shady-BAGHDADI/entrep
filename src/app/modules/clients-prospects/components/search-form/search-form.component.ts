import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { IResultSearch } from 'shared/models/resultsearch';
import { CrmService } from 'shared/services/crm.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  listOfOption: Array<{ label: string; value: string }> = [];
  tagValue = ['a10', 'c12', 'tag'];
  size: NzSelectSizeType = 'large';
  checked = true;
  crmForm!: FormGroup;
  /**
   *
   */
  constructor(
    private fb: FormBuilder,
    private readonly crmService: CrmService
  ) {}
  ngOnInit(): void {
    this.initCrmForm();
  }
  initCrmForm() {
    this.crmForm = this.fb.group({
      text: '',
      isClient: true,
      isProspect: false,
    });
  }
  onSubmit() {
    console.log(this.crmForm.valid);

    //select au minimum un client ou un prospect
    this.requiredOneTypeClient();

    //prepartion d un nouveau shape of crm form => newFormShapCRM

    const newFormShapCRM = this.changeShapeCrmForm();

    console.log('CALL API', newFormShapCRM);

    //post(newFormShapCRM)
    // Service.method(newFormShapCRM).......
    this.crmService
      .sendSearchCrmForm(newFormShapCRM)
      .subscribe((resultSearch: IResultSearch) => {
        console.log(resultSearch);
        this.crmService.resultSearch(resultSearch);
      });
  }

  errorMessage = false;
  requiredOneTypeClient() {
    if (
      !this.crmForm.get('isClient')?.value &&
      !this.crmForm.get('isProspect')?.value
    ) {
      this.errorMessage = true;
    } else {
      this.errorMessage = false;
    }
  }

  changeShapeCrmForm() {
    let newFormShapCRM: any = {
      skipFrom: 0,
      skipCount: 10,
      text: this.crmForm.get('text')?.value,
      data: [
        {
          name: 'typeclient',
          value: [
            this.crmForm.get('isClient')?.value,
            this.crmForm.get('isProspect')?.value,
          ], // arry
        },
      ],
    };
    const isClient = this.crmForm.get('isClient')?.value;
    const isProspect = this.crmForm.get('isProspect')?.value;
    if (isClient && isProspect) {
      newFormShapCRM.data[0].value = ['C', 'P'];
    } else if (isClient) {
      newFormShapCRM.data[0].value = 'C';
    } else if (isProspect) {
      newFormShapCRM.data[0].value = 'P';
    } else {
      newFormShapCRM.data[0].value = '';
    }

    return newFormShapCRM;
  }
}
