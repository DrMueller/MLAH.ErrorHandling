import { Injectable, ErrorHandler, NgZone } from '@angular/core';

import { ErrorInformationFactoryService } from './error-information-factory.service';
import { ErrorUnwrappingService } from './error-unwrapping.service';
import { IgnoredErrorsService } from './ignored-errors.service';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { ErrorInformation } from '../models';
import { ErrorDisplayComponent } from '../components/error-display/error-display.component';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService {

  public constructor(
    private errorUnwrappingService: ErrorUnwrappingService,
    private ignoredErrorsService: IgnoredErrorsService,
    private errorInformationFactory: ErrorInformationFactoryService,
    private dialog: MatDialog,
    private ngZone: NgZone) {
  }

  public handleError(error: any): void {
    const unpackedError = this.errorUnwrappingService.unwrapError(error);
    console.log(unpackedError);

    if (this.ignoredErrorsService.isIgnoredError(unpackedError)) {
      return;
    }

    const errorInformation = this.errorInformationFactory.createFromError(unpackedError);
    this.showErrorDialog(errorInformation);
  }

  private showErrorDialog(errorInformation: ErrorInformation): void {
    const config = new MatDialogConfig();
    config.data = errorInformation;
    config.disableClose = true;

    // Zone is needed, since the ErrorHandler is called outside of the changedetection zone
    // See: https://github.com/angular/material2/issues/7550
    this.ngZone.run(() => {
      this.dialog.open(ErrorDisplayComponent, config);
    });
  }
}
