import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Roulette = ({ spinAngle }) => {
  const containerRef = useRef();
  const wheelRef = useRef();

  useEffect(() => {
    // Create the scene and set up the camera and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create the roulette wheel mesh and add it to the scene
    const geometry = new THREE.CircleGeometry(5, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const wheel = new THREE.Mesh(geometry, material);
    scene.add(wheel);

    // Store the wheel mesh in the wheelRef
    wheelRef.current = wheel;

    // Animate the roulette wheel by updating its rotation and rendering the scene
    const animate = () => {
      requestAnimationFrame(animate);

      if (wheelRef.current) {
        // Update the rotation of the wheel using the spinAngle prop
        wheelRef.current.rotation.z += spinAngle;

        renderer.render(scene, camera);
      }
    };

    animate();
  }, [spinAngle]);

  return <div ref={containerRef} />;
};

export default Roulette;
