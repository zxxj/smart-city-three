import * as THREE from 'three';
import { mesh } from './model';

const scene = new THREE.Scene();
scene.add(mesh);

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
export { scene };
