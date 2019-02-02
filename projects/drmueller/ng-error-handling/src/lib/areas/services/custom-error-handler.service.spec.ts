import { inject, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material';

import { provideMock } from '@drmueller/testing';

import { CustomErrorHandlerService } from './custom-error-handler.service';
import { ErrorUnwrappingService } from './error-unwrapping.service';
import { IgnoredErrorsService } from './ignored-errors.service';
import { ErrorInformationFactoryService } from './error-information-factory.service';

describe('CustomErrorHandlerService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMock(ErrorUnwrappingService),
        provideMock(IgnoredErrorsService),
        provideMock(ErrorInformationFactoryService),
        provideMock(MatDialog),
        CustomErrorHandlerService
      ]
    });
  });

  it('should be created', inject([CustomErrorHandlerService], (service: CustomErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
