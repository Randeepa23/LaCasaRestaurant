import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
// New gallery images
import gallery1 from "@/assets/La Casa images/gallery 1.jpg";
import gallery2 from "@/assets/La Casa images/gallery 2.jpg";
import gallery3 from "@/assets/La Casa images/gallery 3.jpg";
import gallery4 from "@/assets/La Casa images/gallery 4.jpg";
import gallery5 from "@/assets/La Casa images/gallery 5.jpg";
import gallery6 from "@/assets/La Casa images/gallery 6.jpg";
import iceCoffee from "@/assets/La Casa images/ice coffee.jpg";
import foodImage1 from "@/assets/La Casa images/image.jpg";
import foodImage2 from "@/assets/La Casa images/image 2.jpg";
import foodImage3 from "@/assets/La Casa images/image 3.jpg";
import foodImage4 from "@/assets/La Casa images/image 4.jpg";
import foodImage6 from "@/assets/La Casa images/image 6.jpg";
import logo3 from "@/assets/La Casa images/la casa logo 3.jpg";
import specialDrinks from "@/assets/La Casa images/la casa special drinks.jpg";
import pizzamania from "@/assets/La Casa images/pizzamania.jpg";
import porkPizza from "@/assets/La Casa images/plack pork pizza.jpg";
import assetGallery1 from "@/assets/gallery-1.jpg";
import assetGallery2 from "@/assets/gallery-2.jpg";
import assetGallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  // Initialize with all images set to invisible initially
  const [visibleImages, setVisibleImages] = useState<boolean[]>(
    Array(18).fill(false) // 18 is the number of gallery images
  );

  // Setup intersection observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { 
        rootMargin: '100px',
        threshold: 0.1 
      }
    );

    if (galleryRef.current) {
      const imageElements = galleryRef.current.querySelectorAll('.gallery-item');
      imageElements.forEach(img => observer.observe(img));
    }

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    { src: gallery1, alt: "La Casa Restaurant Gallery" },
    { src: gallery2, alt: "La Casa Restaurant Interior" },
    { src: gallery3, alt: "La Casa Restaurant View" },
    { src: gallery4, alt: "La Casa Restaurant Dining Area" },
    { src: gallery5, alt: "La Casa Restaurant Setup" },
    { src: gallery6, alt: "La Casa Restaurant Design" },
    { src: iceCoffee, alt: "Refreshing Ice Coffee" },
    { src: foodImage1, alt: "La Casa Special Dish" },
    { src: foodImage2, alt: "Gourmet Meal Preparation" },
    { src: foodImage3, alt: "Delicious Entree" },
    { src: foodImage4, alt: "Specialty Dish" },
    { src: foodImage6, alt: "Chef's Creation" },
    { src: specialDrinks, alt: "La Casa Special Drinks" },
    { src: pizzamania, alt: "Pizzamania Special" },
    { src: porkPizza, alt: "Black Pork Pizza" },
    { src: assetGallery1, alt: "Restaurant Ambiance" },
    { src: assetGallery2, alt: "Culinary Presentation" },
    { src: assetGallery4, alt: "Gourmet Experience" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Explore the culinary artistry, vibrant atmosphere, and signature dishes that make La Casa a special dining destination
          </p>
        </div>

        {/* Masonry Grid */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6 animate-fade-in"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-index={index}
              className={`gallery-item group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-400 
                ${index % 3 === 0 ? 'h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]' : 
                  index % 5 === 0 ? 'h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px]' : 
                  'h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px]'}`}
              onClick={() => setSelectedImage(image.src)}
              style={{ 
                animationDelay: `${(index % 8) * 0.1}s`
              }}
            >
              {visibleImages[index] ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-background font-medium">{image.alt}</p>
                </div>
              </div>
              {/* Golden glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none shadow-[0_0_40px_rgba(212,163,115,0.5)]"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-accent transition-colors p-2"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
