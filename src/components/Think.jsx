import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import Roulette from './Roulette';
import debateSubjects from '../constants/subjects';
import ThreeScene from './ThreeScene';

const Think = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  // define spinAngle state
  const [spinAngle, setSpinAngle] = useState(true);

  const handleSpin = () => {
    setIsSpinning(true);
    // Add any additional logic for spinning the roulette here

    // After 2 seconds, stop the roulette
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000);

    // After 2 seconds, log the selected subject
    setTimeout(() => {
      const subjectIndex = Math.floor(Math.random() * 10);
      const selectedSubject = debateSubjects[subjectIndex];
      console.log(
        `The chosen subject is: ${selectedSubject.subject} (${selectedSubject.category})`
      );
    }, 2000);

    // Set a random angle to spin the wheel
    const angle = Math.random() * Math.PI * 2;
    setSpinAngle(spinAngle + angle);
  };

  return (
    <div>
      <motion.canvas
        width={400}
        height={400}
        animate={{
          rotateY: isSpinning ? [0, 360] : 0,
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 1],
        }}
      >
        <ThreeScene />
      </motion.canvas>
      <button onClick={handleSpin}>Spin the Roulette</button>
      <Roulette spinAngle={spinAngle} />
    </div>
  );
};

export default Think;
