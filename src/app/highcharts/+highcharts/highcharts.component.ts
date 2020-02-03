import { BehaviorSubject, combineLatest } from 'rxjs';
import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bb-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent {
  value$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  data$: BehaviorSubject<Array<{ name: string }>> = new BehaviorSubject([
    { name: 'first' },
    { name: 'second' }
  ]);
  products$ = combineLatest(this.value$, this.data$).pipe(
    map(([values, names]) => console.log(values, names))
  );
  constructor() {}

  onInputChange(event: MatSliderChange) {
    this.value$.next(event.value);
  }
}
