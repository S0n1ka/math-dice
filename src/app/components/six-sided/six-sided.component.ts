import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import * as THREE from 'three';

@Component({
  selector: 'app-six-sided',
  templateUrl: './six-sided.component.html',
  styleUrls: ['./six-sided.component.scss']
})
export class SixSidedComponent implements OnInit, AfterViewInit {
  @Input() value: number;

  @ViewChild('cube') cube: ElementRef;

  @ViewChild('canvas') canvas: ElementRef;

  container: any;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // this.playAnimation().play();
    // this.playAnimation().stop();
    this.playThreeDAnimation();
  }

  playThreeDAnimation() {
    this.container = this.canvas.nativeElement;
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.05;
      cube.rotation.y += 0.05;
      renderer.render(scene, camera);
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(100, 100);
    this.container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial(
      { color: 0x00ff00 }
    );
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    animate();
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
