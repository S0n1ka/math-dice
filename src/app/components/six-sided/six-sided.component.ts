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

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(100, 100);
    this.container.appendChild(renderer.domElement);
    const camera = new THREE.PerspectiveCamera(
      45,
      1,
      1,
      500
      );
    camera.position.set(0,0,100);
    camera.lookAt(0,0,0);
    const scene = new THREE.Scene();

    // create a blue LineBasicMaterial
    const material = new THREE.LineBasicMaterial({color: 0x0000ff});
    const points = [];
    points.push( new THREE.Vector3(10,10,0));
    points.push( new THREE.Vector3(10,-10,0));
    points.push( new THREE.Vector3(-10,-10,0));
    points.push( new THREE.Vector3(-10,10,0));
    points.push( new THREE.Vector3(10,10,0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry,material);
    scene.add(line);
    renderer.render(scene,camera);

    // Create a green cube
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial(
    //   { color: 0x00ff00 }
    // );
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // camera.position.z = 5;
    // const animate = () => {
    //   requestAnimationFrame(animate);
    //   line.rotation.x += 0.05;
    //   line.rotation.y += 0.05;
    //   renderer.render(scene, camera);
    // };
    // animate();
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
