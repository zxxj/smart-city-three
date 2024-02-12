import * as THREE from 'three';
import { group } from './model';

const scene = new THREE.Scene();
console.log(group);
scene.add(group);

// 环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

export { scene };
