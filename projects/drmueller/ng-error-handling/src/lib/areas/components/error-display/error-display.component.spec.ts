import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { provideMock, spyOnClass } from '@drmueller/testing';

import { ErrorDisplayComponent } from './error-display.component';
import { ErrorInformation } from '../../models';

describe('ErrorDisplayComponent', () => {
  let component: ErrorDisplayComponent;
  let fixture: ComponentFixture<ErrorDisplayComponent>;

  const errorInformationMock = spyOnClass(ErrorInformation);
  const dialogRefMock = spyOnClass(MatDialogRef);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorDisplayComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: errorInformationMock
        },
        {
          provide: MatDialogRef,
          useValue: dialogRefMock
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeFalsy();
  });
});
