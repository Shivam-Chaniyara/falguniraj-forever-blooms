import { useEffect, useState } from 'react';

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const createPetals = () => {
      const newPetals = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10
      }));
      setPetals(newPetals);
    };

    createPetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute text-2xl petal-fall opacity-70"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            color: '#f8b4cb'
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;