import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ListButtonsComponent } from './list-buttons.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { IButton } from 'shared/models/button';
import { CrmService } from 'shared/services/crm.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';

// Positive test case for ListButtonsComponent class
describe('ListButtonsComponent', () => {
  let component: ListButtonsComponent;
  let fixture: ComponentFixture<ListButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [CrmService],
    imports: [
        NzSelectModule,
        NzIconModule,
        HttpClientTestingModule,
        HttpClientModule,
        NzButtonModule,
        ListButtonsComponent
    ]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  // Positive test case for setActiveButton method
  fit('should set active button and update checkbox modal', () => {
    const button: IButton = { label: 'Synthétique', type: 'synthetique' };

    spyOn(CrmService, 'updateCheckBoxModal'); // Spy on the updateCheckBoxModal method
    component.setActiveButton(button);
    expect(component.activeButton).toEqual(button.type);
    expect(component['crmService'].buttonActiveType).toEqual(button.type);
    expect(component['crmService'].popUpHeadersText).toEqual(button.label);
    expect(component['crmService'].updateCheckBoxModal).toHaveBeenCalled(); // Check if the spy has been called
  });

  // Edge test case for buttons array length
  fit('should have 6 buttons', () => {
    expect(component.buttons.length).toEqual(6);
  });

  // Negative test case for setActiveButton method with invalid button type
  fit('should not set active button and update checkbox modal with invalid button type', () => {
    const button: IButton = { label: 'Invalid', type: 'invalid' };
    component.setActiveButton(button);
    expect(component.activeButton).not.toEqual(button.type);
    expect(component['crmService'].buttonActiveType).not.toEqual(button.type);
    expect(component['crmService'].popUpHeadersText).not.toEqual(button.label);
    expect(component['crmService'].updateCheckBoxModal).not.toHaveBeenCalled();
  });
});
