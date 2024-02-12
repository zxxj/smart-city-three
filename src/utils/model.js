import * as THREE from 'three';
import { loadGltf } from './loadGLTF';

const group = new THREE.Group();

const gltf = await loadGltf('/public/', '上海外滩.glb');
group.add(gltf.scene);

gltf.scene.getObjectByName('楼房').traverse((obj) => {
  if (obj.type === 'Mesh') {
    obj.material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
  }

  if (obj.name === '上海中心大厦') {
    obj.material = new THREE.MeshBasicMaterial({
      color: 0x996633,
    });
  }

  if (obj.name === '东方明珠') {
    obj.material = new THREE.MeshBasicMaterial({
      color: 0x996633,
    });
  }

  if (obj.name === '环球金融中心') {
    obj.material = new THREE.MeshBasicMaterial({
      color: 0x996633,
    });
  }

  if (obj.name === '金茂大厦') {
    obj.material = new THREE.MeshBasicMaterial({
      color: 0x996633,
    });
  }
});

export { group };
