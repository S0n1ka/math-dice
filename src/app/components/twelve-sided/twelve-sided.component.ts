import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twelve-sided',
  templateUrl: './twelve-sided.component.html',
  styleUrls: ['./twelve-sided.component.scss'],
})
export class TwelveSidedComponent implements OnInit {
  @Input() value;

  constructor() { }

  ngOnInit() {}

}
