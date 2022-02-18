import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-twelve-sided',
  templateUrl: './twelve-sided.component.html',
  styleUrls: ['./twelve-sided.component.scss'],
})
export class TwelveSidedComponent implements OnInit, AfterViewInit {
  @Input() value: number;

  @ViewChild('cube') cube: ElementRef;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.playAnimation();
  }

  async playAnimation() {
    await this.animationCtrl.create()
      .addElement(this.cube.nativeElement)
      .duration(1000)
      .keyframes([
        {offset: 0, transform: `rotate(0deg)`},
        {offset: 0.50, transform: `rotateY(${this.getRandom()}deg) rotateX(${this.getRandom()}deg) rotateZ(${this.getRandom()}deg)`},
        {offset: 1, transform: `rotate(0deg)`}
      ]).play();
  }

  getRandom() {
    return Math.floor(Math.random() * 50) * 90;
  }
}
