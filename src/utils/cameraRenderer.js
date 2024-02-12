import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { scene } from './scene';

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  5000
);
camera.position.set(-1740.99, 758.622, 1467.851);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

render();

const controls = new OrbitControls(camera, renderer.domElement);

export { camera, renderer };
