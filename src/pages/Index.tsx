import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Phone, Calendar, Clock, Users } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import EventTimeline from '@/components/EventTimeline';
import WeddingGallery from '@/components/WeddingGallery';
import FloatingPetals from '@/components/FloatingPetals';
import heroImage from '@/assets/wedding-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingPetals />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 fade-in">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-script text-white mb-4 floating-animation">
              Falguni <Heart className="inline w-8 h-8 md:w-12 md:h-12 text-wedding-rose-primary mx-2" /> Raj
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-white/90 mb-6">
              ✨ "Two Souls, One Journey" ✨
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              With the blessings of Almighty and our beloved family, we invite you to join us 
              as we celebrate the sacred union of our dear Falguni & Raj. Your presence will 
              make these moments even more special.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-white/90 text-lg">
              <Calendar className="w-5 h-5" />
              <span className="font-serif">21st & 22nd November 2025</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90 text-lg">
              <MapPin className="w-5 h-5" />
              <span className="font-serif">Mota Varachha, Surat</span>
            </div>
          </div>
          
          <Button 
            className="mt-8 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white font-serif px-8 py-3 text-lg"
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
          >
            RSVP Now
          </Button>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-20 soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script text-wedding-rose-primary mb-4">
              Wedding Details
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
              Join us in this beautiful celebration filled with traditions, music, and love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center romantic-shadow bg-card/80 backdrop-blur-sm">
              <Calendar className="w-12 h-12 text-wedding-rose-primary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">Date</h3>
              <p className="text-muted-foreground">21st & 22nd November 2025</p>
            </Card>
            
            <Card className="p-6 text-center romantic-shadow bg-card/80 backdrop-blur-sm">
              <MapPin className="w-12 h-12 text-wedding-rose-primary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">Venue</h3>
              <p className="text-muted-foreground">Mota Varachha, Surat</p>
            </Card>
            
            <Card className="p-6 text-center romantic-shadow bg-card/80 backdrop-blur-sm">
              <Clock className="w-12 h-12 text-wedding-rose-primary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">Time</h3>
              <p className="text-muted-foreground">Morning & Evening Events</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script text-wedding-rose-primary mb-4">
              Events & Schedule
            </h2>
            <p className="text-xl text-muted-foreground font-serif">
              A celebration across two beautiful days
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <EventTimeline />
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-20 sunset-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-script text-wedding-rose-primary mb-4">
            Countdown
          </h2>
          <p className="text-xl text-muted-foreground font-serif mb-12">
            ✨ Only a few days left until Falguni & Raj begin their forever journey! ✨
          </p>
          
          <CountdownTimer />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-script text-wedding-rose-primary mb-4">
              Gallery
            </h2>
            <p className="text-xl text-muted-foreground font-serif">
              💍 Our Memories Together
            </p>
            <p className="text-muted-foreground mt-2">
              A collection of pre-wedding and family moments, capturing the love and joy that lead us to this day.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <WeddingGallery />
          </div>
        </div>
      </section>

      {/* Venue Location */}
      <section className="py-20 soft-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-script text-wedding-rose-primary mb-4">
              Venue Location
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-wedding-rose-primary" />
              <p className="text-xl font-serif">Mota Varachha, Surat</p>
            </div>
            <p className="text-muted-foreground mb-8">
              Easily accessible and surrounded by the warmth of loved ones.
            </p>
            
            <Card className="p-6 romantic-shadow bg-card/80 backdrop-blur-sm">
              <div className="h-64 bg-wedding-lavender/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-wedding-rose-primary" />
                  <p className="font-serif">Google Maps integration will be added here</p>
                  <p className="text-sm mt-2">Mota Varachha, Surat, Gujarat</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-20 wedding-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-script mb-4">
            RSVP
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We'd love to have you with us on this special day.
          </p>
          <p className="text-lg mb-8 opacity-80">
            Kindly confirm your presence by reaching out:
          </p>
          
          <Card className="max-w-md mx-auto p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                <span className="font-serif">Brother Shivam</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+919724466051" className="font-serif hover:underline">
                  +91 9724466051
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-wedding-rose-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-script mb-4">
            🌸 Floral Elegance 🌸
          </h3>
          <p className="text-white/80 font-serif">
            The invitation website carries a graceful floral theme with pastel colors, 
            soft textures, and delicate flower accents – symbolizing love, purity, and new beginnings.
          </p>
          <div className="mt-6">
            <p className="text-white/60 text-sm">
              With love, Falguni & Raj
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;