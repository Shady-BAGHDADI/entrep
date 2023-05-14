import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { SharedConstants } from '../constants';
import { IHeader } from '../models/header';
import { HttpClient } from '@angular/common/http';
import * as mockresultsearch from 'assets/mock-result-search.json';
import { IResultSearch } from 'shared/models/resultsearch';

@Injectable({
  providedIn: 'root',
})
export class CrmService {
  // baseUrl = environment.apiBasePath;
  popUpHeadersText = 'Synthétique';

  //subject to initHeaders and changes headres when i changed formModal list checkboxes
  initHeadersSynthetique: IHeader[] = SharedConstants.initHeadersSynthetique;
  private readonly checkBoxModel = new BehaviorSubject<IHeader[]>(
    this.initHeadersSynthetique
  );
  //fonction Setter
  updateCheckBoxModal(newHeaders: IHeader[]) {
    this.checkBoxModel.next(newHeaders);
  }
  //Getter:to get the value in the componet i need to subscribe to checkBoxModel$
  checkBoxModel$ = this.checkBoxModel.asObservable();

  //store data returned by sendSearchCrmForm() to display it in the table
  private readonly resultSearchForm: Subject<IResultSearch> =
    new Subject<IResultSearch>();
  //Setter
  resultSearch(resultSearchForm: IResultSearch) {
    this.resultSearchForm.next(resultSearchForm);
  }
  //Getter
  resultSearchForm$ = this.resultSearchForm.asObservable();

  constructor(private readonly http: HttpClient) {}

  sendSearchCrmForm(crmForm: any): Observable<IResultSearch> {
    //return this.http.post(this.baseUrl + '/search', crmForm)
    return of(mockresultsearch);
  }
  //
}
