import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedConstants } from '../constants';
import { IHeader } from '../models/header';

@Injectable({
  providedIn: 'root',
})
export class CrmService {
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

  constructor() {}
}
