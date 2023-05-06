import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsProspectsComponent } from './clients-prospects.component';

describe('ClientsProspectsComponent', () => {
  let component: ClientsProspectsComponent;
  let fixture: ComponentFixture<ClientsProspectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsProspectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsProspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
