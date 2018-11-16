import { Component, OnInit } from '@angular/core';
import { LoaderService } from './core/services/loader.service';

import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'binck';

  constructor(
    private store: Store<any>,
    private loaderService: LoaderService,
    private permissionsService: NgxPermissionsService
  ) {}

  ngOnInit() {
    this.store
      .select('authorization')
      .subscribe(
        data => this.permissionsService.addPermission(data.permission),
        error => console.log('permission', error)
      );
  }

  onClick() {
    this.loaderService.display(true);

    setTimeout(() => {
      this.loaderService.display(false);
    }, 1000);
  }
}
