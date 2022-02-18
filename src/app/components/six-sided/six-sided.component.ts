import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-six-sided',
  templateUrl: './six-sided.component.html',
  styleUrls: ['./six-sided.component.scss']
})
export class SixSidedComponent implements OnInit, AfterViewInit {
  @Input() value: number;

  @ViewChild('cube') cube: ElementRef;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.playAnimation().play();
    this.playAnimation().stop();
  }

  playAnimation() {
    return this.animationCtrl.create()
      .addElement(this.cube.nativeElement)
      .duration(1000)
      .keyframes([
        {offset: 0, transform: `rotateY(0deg) rotateX(0deg)`},
        {offset: 0.50, transform: `rotateY(${this.getRandom()}deg) rotateX(${this.getRandom()}deg)`},
        {offset: 1, transform: `rotateY(0deg) rotateX(0deg)`}
      ]);
  }

  getRandom() {
    return Math.floor(Math.random() * 50) * 90;
  }
}
