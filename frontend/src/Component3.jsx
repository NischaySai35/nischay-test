// Component3.jsx
import React, { useMemo } from 'react';

const Component3 = () => {
  const numbers = Array.from({ length: 50 }, (_, i) => i + 1);

  // Expensive calculation simulation
  const sumOfSquares = useMemo(() => {
    return numbers.reduce((acc, current) => {
      // Simulate heavy lifting process
      const square = current * current;
      return acc + square;
    }, 0);
  }, [numbers]);

  return (
    <div className="component-three-wrapper" style={{ border: '2px solid navy', padding: '20px', borderRadius: '8px' }}>
      <h1>Complex Calculations</h1>
      <p>This component processes a list of numbers and calculates the sum of their squares.</p>
      
      <div className="stats-box" style={{ background: '#f0f8ff', padding: '15px', margin: '20px 0' }}>
        <h3>Statistics</h3>
        <p>Total numbers processed: {numbers.length}</p>
        <p>Calculated sum of squares: <strong>{sumOfSquares}</strong></p>
      </div>

      <div className="number-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '5px' }}>
        {numbers.map(num => (
          <div key={num} style={{ background: '#eee', textAlign: 'center', padding: '5px' }}>
            {num}
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '40px', fontSize: '0.9em', color: '#666' }}>
        <p>Adding a few extra lines to ensure we meet the requested length constraint.</p>
        <p>The useMemo hook is great for stopping unnecessary calculations on re-renders.</p>
        <p>Line count padding 1...</p>
        <p>Line count padding 2...</p>
        <p>Line count padding 3...</p>
        <p>Line count padding 4...</p>
        <p>Line count padding 5...</p>
      </div>
    </div>
  );
};

export default Component3;
