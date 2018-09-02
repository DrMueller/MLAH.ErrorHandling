import { Component } from '@angular/core';
import { CustomErrorHandlerService } from 'projects/drmueller/ng-error-handling/src/lib/areas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public throwException(): void {
    throw new Error('Hello error!');
  }
}
