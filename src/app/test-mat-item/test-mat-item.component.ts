import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-mat-item',
  templateUrl: './test-mat-item.component.html',
  styleUrls: ['./test-mat-item.component.scss']
})
export class TestMatItemComponent implements OnInit {
@Input() number: any;
  constructor() { }

  ngOnInit() {
  }

}
