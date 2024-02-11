import { camera, renderer } from './cameraRenderer';

const resize = () => {
  window.onresize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  };
};

resize();

export { renderer };
