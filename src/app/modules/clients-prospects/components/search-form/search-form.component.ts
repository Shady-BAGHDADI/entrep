import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NzSelectSizeType } from 'ng-zorro-antd/select';

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
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initCrmForm();
  }
  initCrmForm() {
    this.crmForm = this.fb.group({
      text: '',
      isClient: false,
      isProspect: false,
    });
  }
  errorMessage = false;
  onSubmit() {
    if (
      !this.crmForm.get('isClient')?.value &&
      !this.crmForm.get('isProspect')?.value
    ) {
      this.errorMessage = true;
      console.log(this.crmForm.value);
    } else {
      this.errorMessage = false;
    }

    //like iwant

    //prepartion d un nouveau shape of form {} => newFormShapCRM
    let newFormShapCRM: any = {
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

    (newFormShapCRM.skipFrom = 0),
      (newFormShapCRM.skipCount = 10),
      console.log('newFormShapCRM', newFormShapCRM);
    //post(newFormShapCRM)
  }
}
