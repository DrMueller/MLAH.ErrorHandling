import { ModuleWithProviders, NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import * as components from './components';
import { CustomErrorHandlerService } from './services/custom-error-handler.service';
import { IgnoredErrorsService } from './services/ignored-errors.service';
import { ErrorUnwrappingService } from './services/error-unwrapping.service';
import { ErrorInformationFactoryService } from './services/error-information-factory.service';

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ],
  entryComponents: [
    components.ErrorDisplayComponent
  ],
  declarations: [
    components.ErrorDisplayComponent
  ],
  exports: [
    components.ErrorDisplayComponent
  ]
})

export class ErrorHandlingModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ErrorHandlingModule,
      providers: [
        { provide: ErrorHandler, useClass: CustomErrorHandlerService },
        ErrorUnwrappingService,
        IgnoredErrorsService,
        ErrorInformationFactoryService
      ]
    };
  }
}
