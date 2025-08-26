import { Card } from '@/components/ui/card';
import { Calendar, Music, Sun, Moon, Flower } from 'lucide-react';

const events = [
  {
    date: '21st November',
    title: 'A Day of Music & Celebration',
    items: [
      {
        time: 'Morning',
        name: 'Mandap Muhurat',
        description: 'A sacred beginning as we set the auspicious wedding stage.',
        icon: Sun
      },
      {
        time: 'Evening',
        name: 'Sangeet Night',
        description: 'An evening of joy, dance, and music to celebrate love.',
        icon: Music
      }
    ]
  },
  {
    date: '22nd November',
    title: 'The Grand Wedding Day',
    items: [
      {
        time: 'Morning',
        name: 'Phoolon Ki Holi',
        description: 'A colorful and vibrant ritual with flowers and laughter.',
        icon: Flower
      },
      {
        time: 'Evening',
        name: 'Wedding Ceremony',
        description: 'As the sun sets, join us for the union of Falguni & Raj, where two souls become one for eternity.',
        icon: Moon
      }
    ]
  }
];

const EventTimeline = () => {
  return (
    <div className="space-y-12">
      {events.map((day, dayIndex) => (
        <div key={dayIndex} className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-script text-wedding-rose-primary mb-2 flex items-center justify-center gap-2">
              <Calendar className="w-6 h-6" />
              {day.date}
            </h3>
            <p className="text-lg text-muted-foreground">{day.title}</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-wedding-rose-primary via-wedding-lavender to-wedding-rose-primary"></div>
            
            <div className="space-y-8">
              {day.items.map((event, eventIndex) => (
                <div key={eventIndex} className={`flex items-center gap-6 ${eventIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <Card className={`flex-1 p-6 romantic-shadow bg-card/80 backdrop-blur-sm ${eventIndex % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <event.icon className="w-5 h-5 text-wedding-rose-primary" />
                      <span className="text-sm font-medium text-wedding-gold uppercase tracking-wider">
                        {event.time}
                      </span>
                    </div>
                    <h4 className="text-xl font-serif font-semibold text-foreground mb-2">
                      {event.name}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </Card>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full wedding-gradient ring-4 ring-background"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventTimeline;