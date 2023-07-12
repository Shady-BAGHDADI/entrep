import { Component } from '@angular/core';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { SharedConstants } from '../../constants';
import { CrmService } from '../../services/crm.service';
import { IButton } from '../../models/button';
import { IHeader } from '../../models/header';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'shared-list-buttons',
    templateUrl: './list-buttons.component.html',
    styleUrls: ['./list-buttons.component.scss'],
    standalone: true,
    imports: [NgFor, NzButtonModule, NzWaveModule, NgClass]
})
export class ListButtonsComponent {
  buttons: IButton[] = [
    { label: 'Synthétique', type: 'synthetique' },
    { label: 'Identité', type: 'identite' },
    { label: 'Commercial', type: 'commercial' },

    { label: 'Risque', type: 'risque' },

    { label: 'Financier', type: 'financier' },

    { label: 'Equipement', type: 'equipement' },
  ];
  size: NzSelectSizeType = 'large';

  constructor(private readonly crmService: CrmService) {}
  activeButton = 'synthetique';
  setActiveButton(button: IButton) {
    this.activeButton = button.type;
    this.crmService.buttonActiveType = button.type;
    this.crmService.popUpHeadersText = button.label;

    console.warn('button.type;', button.label);

    let headers: IHeader[];
    switch (this.activeButton) {
      case 'synthetique':
        headers = SharedConstants.initHeadersSynthetique;
        break;
      case 'identite':
        headers = SharedConstants.initHeadersIdentite;
        break;
      case 'commercial':
        headers = SharedConstants.initHeadersCommercial;
        break;
      default:
        headers = SharedConstants.initHeadersSynthetique;
        break;
    }
    this.crmService.updateCheckBoxModal(headers);
  }
}
