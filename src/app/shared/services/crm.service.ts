import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, find, map, of, tap } from 'rxjs';
import { SharedConstants } from '../constants';
import { IHeader } from '../models/header';
import { HttpClient } from '@angular/common/http';
import * as mockresultsearch from 'assets/client-prospect.json';
import { IResultSearch } from 'shared/models/resultsearch';
import { SharedHelpers } from 'shared/helpers/helpers';

@Injectable({
  providedIn: 'root',
})
export class CrmService {
  // baseUrl = environment.apiBasePath;
  popUpHeadersText = 'Synthétique';
  buttonActiveType = 'synthetique';

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
    return of(mockresultsearch).pipe(
      tap((data: IResultSearch) => console.error(data)),
      map((resultsearch: IResultSearch) => {
        resultsearch.data?.values.map((columns: any) => {
          columns.columns.map((col: any) => {
            switch (col.name) {
              case 'principalinterlocuteur':
                {
                  // const col = columns.columns.find(
                  //   (f: any) => f.name === 'principalinterlocuteur'
                  // );

                  col.value = {
                    email: columns.columns.find(
                      (f: any) => f.name === 'principalinterlocuteuremail'
                    )?.value,
                    nom: columns.columns.find(
                      (f: any) => f.name === 'principalinterlocuteurnom'
                    )?.value,
                    prenom: columns.columns.find(
                      (f: any) => f.name === 'principalinterlocuteurprenom'
                    )?.value,

                    tel: columns.columns.find(
                      (f: any) => f.name === 'principalinterlocuteurtelephone'
                    )?.value,
                  };
                }
                break;
              case 'representantlegal':
                {
                  const dirigeant = col.value;
                  col.value = {
                    dirigeant: dirigeant,
                    nom: columns.columns.find(
                      (f: any) => f.name === 'representantlegalnom'
                    )?.value,
                    prenom: columns.columns.find(
                      (f: any) => f.name === 'representantlegalprenom'
                    )?.value,
                    type: columns.columns.find(
                      (f: any) => f.name === 'representantlegalclientprospect'
                    )?.value,
                    fonction: columns.columns.find(
                      (f: any) => f.name === 'representantlegalfonction'
                    )?.value,
                  };
                }
                break;
              case 'dirigeantclient':
                {
                  const dirigeantClientValue = columns.columns.find(
                    (f: any) => f.name === 'representantlegal'
                  )?.value.dirigeant;
                  col.dirigeant = dirigeantClientValue === 'Oui' ? true : false;
                  console.error(
                    'dirigeantClientValue',
                    col,
                    dirigeantClientValue
                  );
                }
                break;
              case 'groupecommercial':
                {
                  const leaderValue = columns.columns.find(
                    (f: any) => f.name === 'leadergroupecommercial'
                  )?.value;
                  col.leader = leaderValue === 'Oui' ? true : false;
                }
                break;
              case 'eds':
                {
                  const edsValue = col.value;
                  const agencegestionaireValue = columns.columns.find(
                    (f: any) => f.name === 'agencegestionaire'
                  )?.value;
                  //si col.value object dont change and  dont enter.. if string ok

                  col.value = {
                    eds: edsValue + ' ' + agencegestionaireValue,
                  };
                }
                break;
              case 'numeroportefeuille':
                {
                  console.warn('hello');

                  const numero = +col.value;
                  // check if value is not an object
                  col.value = {
                    numero: numero,
                    nom: columns.columns.find(
                      (f: any) => f.name === 'nomagentgestionnaireportefeuille'
                    )?.value,
                    prenom: columns.columns.find(
                      (f: any) =>
                        f.name === 'prenomagentgestionnaireportefeuille'
                    )?.value,
                    fonction: columns.columns.find(
                      (f: any) =>
                        f.name === 'fonctionagentgestionnaireportefeuille'
                    )?.value,
                  };
                  console.log('col.portfeuilkle', col.value);
                }
                break;
              case 'codemarche':
                {
                  const marcheValue = col.value;
                  switch (marcheValue) {
                    case '4':
                      col.value = {
                        codemarche: 'Entreprise',
                      };
                      break;

                    case '2':
                      col.value = {
                        codemarche: 'Promotteurs',
                      };
                      break;
                  }
                }
                break;

              case 'notationrisque':
                {
                  const date = columns.columns.find(
                    (f: any) => f.name === 'datenotationrisque'
                  )?.value;
                  col.date = date;
                }
                break;
              case 'strategierelationnelle':
                {
                  const date = columns.columns.find(
                    (f: any) => f.name === 'datemajstrategiecommercial'
                  )?.value;

                  col.date = date;
                }
                break;
              case 'tophorschamp':
                {
                  // check if value is not an object
                  col.value = {
                    motif: columns.columns.find(
                      (f: any) => f.name === 'motifhorschamp'
                    )?.value,
                    date: SharedHelpers.formatDate(
                      columns.columns.find(
                        (f: any) => f.name === 'datemajhorschamp'
                      )?.value
                    ),
                  };
                }
                break;
            }

            if (
              !Number.isInteger(+col.value) &&
              !Number.isNaN(Date.parse(col.value))
            ) {
              {
                col.value = SharedHelpers.formatDate(col.value);
              }
            }
          });
        });

        return resultsearch;
      }),
      tap((data: IResultSearch) => console.warn(data))
    );
  }
  /*
  i need to store the serach Form when i paginate with select
  */
  private readonly storeSeachForm = new BehaviorSubject(null);
  //Getter:to get the value in the componet i need to subscribe to checkBoxModel$
  getStoredForm$ = this.storeSeachForm.asObservable();

  //fonction Setter
  storeForm(form: any) {
    this.storeSeachForm.next(form);
  }
}
