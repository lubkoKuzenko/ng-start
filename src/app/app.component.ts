import { Component } from '@angular/core';
import { LoaderService } from './core/services/loader.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'bb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: FormGroup;

  constructor(fb: FormBuilder, private loader: LoaderService) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  onClick() {
    this.loader.display(true);

    setTimeout(() => {
      this.loader.display(false);
    }, 1000);
  }
}
