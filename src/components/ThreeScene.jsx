import React, { useState, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const [renderer, setRenderer] = useState();
  const [camera, setCamera] = useState();
  const [scene, setScene] = useState();

  const canvasRef = React.useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(400, 400);
    setRenderer(renderer);

    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.width / canvas.height,
      0.1,
      1000
    );
    camera.position.set(0, 0, 3);
    setCamera(camera);

    const scene = new THREE.Scene();
    setScene(scene);

    const segments = 8;
    const radius = 1;
    const height = 0.5;

    const cylinder = new THREE.Object3D();
    for (let i = 0; i < segments; i++) {
      const angle = (i * Math.PI * 2) / segments;
      const material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        side: THREE.DoubleSide,
        wireframe: false,
      });
      const geometry = new THREE.CylinderGeometry(
        radius,
        radius,
        height,
        segments
      );
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.y = -height / 2;
      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.z = Math.sin(angle) * radius;
      cylinder.add(mesh);

      // Add border
      const borderMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        side: THREE.DoubleSide,
        wireframe: false,
      });
      const borderGeometry = new THREE.CylinderGeometry(
        radius + 0.05,
        radius + 0.05,
        height + 0.01,
        segments
      );
      const borderMesh = new THREE.Mesh(
        borderGeometry,
        borderMaterial
      );
      borderMesh.rotation.x = -Math.PI / 2;
      borderMesh.position.y = -height / 2;
      borderMesh.position.x = Math.cos(angle) * radius;
      borderMesh.position.z = Math.sin(angle) * radius;
      cylinder.add(borderMesh);
    }

    scene.add(cylinder);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ThreeScene;
