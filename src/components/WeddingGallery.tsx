import { Card } from '@/components/ui/card';
import ceremonyImg from '@/assets/wedding-ceremony.jpg';
import sangeetImg from '@/assets/sangeet-night.jpg';
import holiImg from '@/assets/phoolon-holi.jpg';

const galleryImages = [
  {
    src: ceremonyImg,
    alt: 'Wedding Ceremony Decorations',
    title: 'Sacred Union'
  },
  {
    src: sangeetImg,
    alt: 'Sangeet Night Celebrations',
    title: 'Sangeet Night'
  },
  {
    src: holiImg,
    alt: 'Phoolon Ki Holi Celebration',
    title: 'Phoolon Ki Holi'
  }
];

const WeddingGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryImages.map((image, index) => (
        <Card key={index} className="group overflow-hidden romantic-shadow hover:scale-105 transition-all duration-500 bg-card/80 backdrop-blur-sm">
          <div className="relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-serif font-semibold text-lg">
                  {image.title}
                </h3>
              </div>
            </div>
          </div>
        </Card>
      ))}
      
      {/* Placeholder for more photos */}
      <Card className="group overflow-hidden romantic-shadow bg-card/80 backdrop-blur-sm border-dashed border-2 border-wedding-rose-light">
        <div className="h-64 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-2">📸</div>
            <p className="font-serif">More beautiful moments</p>
            <p className="text-sm">Coming soon...</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WeddingGallery;