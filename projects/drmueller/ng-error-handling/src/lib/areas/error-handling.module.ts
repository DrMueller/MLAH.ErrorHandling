import { CommonModule } from '@angular/common';
import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { CustomErrorHandlerService } from './services/custom-error-handler.service';
import { ErrorInformationFactoryService } from './services/error-information-factory.service';
import { ErrorUnwrappingService } from './services/error-unwrapping.service';
import { IgnoredErrorsService } from './services/ignored-errors.service';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ],
  entryComponents: [
    ErrorDisplayComponent
  ],
  declarations: [
    ErrorDisplayComponent
  ],
  exports: [
    ErrorDisplayComponent
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
