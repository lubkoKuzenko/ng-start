import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoaderService } from '../../../core/services/loader.service';

@Component({
  selector: 'bb-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading$: Observable<boolean> = of(false);

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loading$ = this.loaderService.status;
  }
}
