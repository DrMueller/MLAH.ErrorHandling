import { NgZone } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material';

import { provideMock, spyOnClass } from '@drmueller/testing';

import { ErrorInformationFactoryService, ErrorUnwrappingService, IgnoredErrorsService } from './';
import { CustomErrorHandlerService } from './custom-error-handler.service';

describe('CustomErrorHandlerService', () => {
  const zoneMock = spyOnClass(NgZone);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMock(ErrorUnwrappingService),
        provideMock(IgnoredErrorsService),
        provideMock(ErrorInformationFactoryService),
        provideMock(MatDialog),
        zoneMock,
        CustomErrorHandlerService
      ]
    });
  });

  it('should be created', inject([CustomErrorHandlerService], (service: CustomErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
