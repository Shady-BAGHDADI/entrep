import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CrmService } from '../../services/crm.service';
import { IHeader } from '../../models/header';
import { of } from 'rxjs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SettingFill } from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let mockCrmService: jasmine.SpyObj<CrmService>;
  let mockNzModalService: jasmine.SpyObj<NzModalService>;

  beforeEach(async () => {
    mockCrmService = jasmine.createSpyObj(['checkBoxModel$']);
    mockNzModalService = jasmine.createSpyObj(['create']);
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      providers: [
        { provide: CrmService, useValue: mockCrmService },
        { provide: NzModalService, useValue: mockNzModalService },
        {
          provide: NZ_ICONS,
          useValue: [SettingFill],
        },
      ],
      imports: [NzTableModule, NzIconModule], // Ajouter NzTableModule ici
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    // Ajouter un mock pour la méthode checkBoxModel$
    mockCrmService.checkBoxModel$ = of([
      { id: '1', name: 'Header 1', checked: true },
      { id: '2', name: 'Header 2', checked: false },
      { id: '3', name: 'Header 3', checked: true },
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display headers for view', () => {
    // Vérifier que headersForView est initialisé avec les headers filtrés
    component.displayHeadersForView();
    expect(component.headersForView.length).toBe(2);
    expect(component.headersForView[0].name).toBe('Header 1');
    expect(component.headersForView[1].name).toBe('Header 3');
  });
  it('should get checked headers and assign them to headersForView', () => {
    const mockHeaders: IHeader[] = [
      { id: '1', name: 'Header1', checked: true, canBeSort: true },
      { id: '2', name: 'Header2', checked: false },
      { id: '3', name: 'Header3', checked: true },
    ];
    mockCrmService.checkBoxModel$ = of(mockHeaders);

    component.ngOnInit();

    expect(component.headersForView).toEqual([
      { id: '1', name: 'Header1', checked: true, canBeSort: true },
      { id: '3', name: 'Header3', checked: true },
    ]);
  });

  it('should open modal when openModalOfCheckBoxList() is called', () => {
    component.openModalOfCheckBoxList();

    expect(mockNzModalService.create).toHaveBeenCalled();
  });
});
