import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDisplayCheckboxListComponent } from './popup-display-checkbox-list.component';

describe('PopupDisplayCheckboxListComponent', () => {
  let component: PopupDisplayCheckboxListComponent;
  let fixture: ComponentFixture<PopupDisplayCheckboxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PopupDisplayCheckboxListComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PopupDisplayCheckboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
