import * as THREE from 'three';

// 创建一个组对象
const group = new THREE.Group();

const loader = new THREE.FileLoader(); // 文件加载器
loader.setResponseType('json'); // 设置返回类型

loader.load('/public/黄浦江.json', (data) => {
  const buildGroup = new THREE.Group();
  data.features.forEach((build) => {
    buildGroup.add(shapeMesh(build.geometry.coordinates));
  });

  group.add(buildGroup);
});

loader.load('/public/上海外滩.json', (data) => {
  const buildGroup = new THREE.Group();
  data.features.forEach((build) => {
    buildGroup.add(shapeMesh(build.geometry.coordinates));
  });

  group.add(buildGroup);
});

const shapeMesh = (pointsArray) => {
  const vector2Array = [];
  // 转化为二维向量构成的顶点数组
  pointsArray[0].forEach((e) => {
    vector2Array.push(new THREE.Vector2(e[0], e[1]));
  });

  const shape = new THREE.Shape(vector2Array);
  const geometry = new THREE.ShapeGeometry(shape);
  const material = new THREE.MeshLambertMaterial({
    color: 0x0099ff,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
};

export { group };
