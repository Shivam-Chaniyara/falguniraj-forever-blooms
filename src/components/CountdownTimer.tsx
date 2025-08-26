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
    <div className="flex justify-center items-center gap-6 flex-wrap">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <Card key={unit} className="relative p-8 text-center romantic-shadow bg-gradient-to-br from-wedding-rose-primary/20 to-wedding-lavender/20 backdrop-blur-sm border-wedding-rose-primary/30 overflow-hidden group hover:scale-105 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-wedding-rose-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <div className="text-5xl font-bold text-wedding-rose-primary mb-3 animate-pulse">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
              {unit}
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-wedding-rose-primary/30 rounded-full animate-ping" />
        </Card>
      ))}
    </div>
  );
};

export default CountdownTimer;