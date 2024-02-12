import * as THREE from 'three';
import { group } from './model';

const scene = new THREE.Scene();
console.log(group);
scene.add(group);

// 环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

// 平行光1
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 400, 300);
scene.add(directionalLight);
// 平行光2
var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight2.position.set(-200, -400, 300);
scene.add(directionalLight2);

const axesHelper = new THREE.AxesHelper(100);
var x = 121.49526536464691; //东方明珠经纬度坐标
var y = 31.24189350905988;
axesHelper.position.set(x, y, 0);
scene.add(axesHelper);

export { scene };
