import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(50, 50, 50);
const materila = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, materila);

export { mesh };
