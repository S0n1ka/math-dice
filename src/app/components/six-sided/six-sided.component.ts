import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-six-sided',
  templateUrl: './six-sided.component.html',
  styleUrls: ['./six-sided.component.scss'],
})
export class SixSidedComponent implements OnInit {
  @Input() value: number;

  constructor() { }

  ngOnInit() {}
}
