import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-11-21T10:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <Card key={unit} className="p-6 text-center romantic-shadow bg-card/80 backdrop-blur-sm">
          <div className="text-3xl font-bold text-wedding-rose-primary mb-2">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-muted-foreground uppercase tracking-wider">
            {unit}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CountdownTimer;