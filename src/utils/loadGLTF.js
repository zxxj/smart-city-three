import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();

const loadGltf = (loadPath, gltfName) => {
  return new Promise((resolve, reject) => {
    loader.load(loadPath + gltfName, (gltf) => {
      resolve(gltf);
    });
  });
};

export { loadGltf };
