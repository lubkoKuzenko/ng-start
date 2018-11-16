import { Component } from '@angular/core';
import { LoaderService } from './core/services/loader.service';

import { fisrtName } from './formly/forms/first-name';

@Component({
  selector: 'bb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = fisrtName;

  constructor(private loader: LoaderService) {}

  onClick() {
    this.loader.display(true);

    setTimeout(() => {
      this.loader.display(false);
    }, 1000);
  }
}
