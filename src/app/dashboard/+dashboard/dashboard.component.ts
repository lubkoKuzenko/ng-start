import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'bb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  propertyToProvide = ['one', 'two', 'three'];
  firstLevel = 'first';
  secondLevel = 'second';
  thirdLevel = 'third';

  form = new FormGroup({
    firstName: new FormControl('', []),
    lastName: new FormControl('', [])
  });

  constructor() {}

  ngOnInit() {}
}
