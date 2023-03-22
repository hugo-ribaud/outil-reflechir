import React, { useState } from 'react';
import Roulette from './Roulette';

const debateSubjects = [
  { subject: 'The benefits of a vegan diet', category: 'health' },
  { subject: 'The benefits of a meat diet', category: 'health' },
  {
    subject: 'The benefits of a vegetarian diet',
    category: 'health',
  },
  {
    subject: 'The benefits of a pescatarian diet',
    category: 'health',
  },
  { subject: 'The benefits of a keto diet', category: 'health' },
  { subject: 'The benefits of a paleo diet', category: 'health' },
  {
    subject: 'The benefits of a gluten-free diet',
    category: 'health',
  },
  {
    subject: 'The benefits of a dairy-free diet',
    category: 'health',
  },
  { subject: 'The benefits of a low-carb diet', category: 'health' },
  { subject: 'The benefits of a low-fat diet', category: 'health' },
];

const DebateRoulette = () => {
  const [spinAngle, setSpinAngle] = useState(0);
  const [subject, setSubject] = useState(null);

  const spinRoulette = () => {
    setSpinAngle(spinAngle + 0.1);
  };

  const handleSpin = () => {
    spinRoulette();
    const subjectIndex = Math.floor(
      Math.random() * debateSubjects.length
    );
    const selectedSubject = debateSubjects[subjectIndex];
    console.log(
      `The chosen subject is: ${selectedSubject.subject} (${selectedSubject.category})`
    );
    setSubject(selectedSubject);
  };

  return (
    <div>
      <Roulette spinRoulette={spinRoulette} spinAngle={spinAngle} />
      <button onClick={handleSpin}>Spin the roulette</button>
      {subject && (
        <div>
          <h2>Selected Subject :</h2>
          <p>
            <strong>Subject:</strong> {subject.subject}
          </p>
          <p>
            <strong>Category:</strong> {subject.category}
          </p>
        </div>
      )}
    </div>
  );
};

export default DebateRoulette;
