import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { scene } from './scene';

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.001,
  3000
);
camera.position.set(292, 223, 185);
camera.lookAt(0, 0, 0); //根据黄浦江几何中心坐标或附近某个经纬度坐标设置

var x = 121.49526536464691; //东方明珠经纬度坐标
var y = 31.24189350905988;
camera.position.set(x + 0.02, y + 0.02, 0.02); //0.02是根据黄浦江尺寸范围设置  数量级对应即可 具体数值不用精准
camera.lookAt(x, y, 0); //根据黄浦江几何中心坐标或附近某个经纬度坐标设置

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

render();

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(x, y, 0);
controls.update(); //update()函数内会执行camera.lookAt(controls.targe)

export { camera, renderer };
