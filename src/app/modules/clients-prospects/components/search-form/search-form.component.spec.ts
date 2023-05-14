import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { By } from '@angular/platform-browser';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFormComponent],
      providers: [FormBuilder],
      imports: [
        NzCollapseModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],

      //
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('should display error message when no client or prospect is selected', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBe(false); // button should be enabled initially
    component.requiredOneTypeClient();
    fixture.detectChanges();
    expect(component.errorMessage).toBe(true);
    expect(button.nativeElement.disabled).toBe(true); // button should be disabled when there is an error
  });
});
