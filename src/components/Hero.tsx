import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ProgressBar } from "@/components/ui/progress-bar";
import { useIsMobile } from "@/hooks/use-mobile";
import '../carousel-fix.css';
import '../components/embla.css';
import './zoom-fix.css';

// Import hero images with correct paths
import heroImage1 from "../assets/La Casa images/lacasa homepage.jpg";
import heroImage2 from "../assets/La Casa images/la casa homepage 3.jpg";
import heroImage3 from "../assets/La Casa images/la casq homepage 4.jpg"; 
import heroImage4 from "../assets/La Casa images/la casa homepage 5.jpg";

const Hero = () => {
  // Premium professional carousel configuration
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    skipSnaps: false,
    align: "center",
    containScroll: "keepSnaps" // Ensures proper alignment at ends
  });
  
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loaded, setLoaded] = useState<boolean[]>(Array(4).fill(false));
  const isMobile = useIsMobile();
  
  // Carousel images
  const carouselImages = [
    { src: heroImage1, alt: "La Casa Restaurant" },
    { src: heroImage2, alt: "La Casa Restaurant" },
    { src: heroImage3, alt: "La Casa Restaurant" },
    { src: heroImage4, alt: "La Casa Restaurant" },
  ];

  // Image load handler
  const handleImageLoad = (index: number) => {
    const newLoaded = [...loaded];
    newLoaded[index] = true;
    setLoaded(newLoaded);
  };
  
  // Preload images to ensure they're ready
  useEffect(() => {
    carouselImages.forEach((image, index) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => handleImageLoad(index);
      img.onerror = (e) => console.error(`Failed to load image: ${image.src}`);
    });
  }, []);

  // Update current slide index when the carousel scrolls
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    onSelect(); // Set initial slide index
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Handle auto-scrolling with progress bar
  useEffect(() => {
    if (!emblaApi || !autoPlay || isTransitioning) return;
    
    let timeoutId: NodeJS.Timeout;
    const slideDuration = 6000; // 6 seconds between slides
    
    // Reset progress and start it from 0
    setProgress(0);
    let startTime = Date.now();
    
    const updateProgress = () => {
      if (!autoPlay) return;
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsed / slideDuration) * 100);
      setProgress(newProgress);
      
      if (elapsed < slideDuration && autoPlay) {
        requestAnimationFrame(updateProgress);
      }
    };
    
    // Start updating progress
    requestAnimationFrame(updateProgress);
    
    // Set timeout to scroll to next slide with cinematic transitions
    timeoutId = setTimeout(() => {
      if (autoPlay && emblaApi) {
        setIsTransitioning(true);
        
        // Professional handling of loop transitions
        const isLastSlide = emblaApi.selectedScrollSnap() === emblaApi.scrollSnapList().length - 1;
        
        if (isLastSlide) {
          // When looping from last to first slide, use special timing
          // First pre-fade the current slide slightly before transition
          document.querySelectorAll('.embla__slide').forEach(slide => {
            (slide as HTMLElement).style.transition = 'opacity 1.5s cubic-bezier(0.22, 1, 0.36, 1)';
          });
          
          // Smoothly advance to next (first) slide with perfect timing
          setTimeout(() => emblaApi.scrollNext(), 100);
        } else {
          // Normal slide transition
          emblaApi.scrollNext();
        }
        
        // Allow generous time for premium transition to complete
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1800); // Extended professional transition time
      }
    }, slideDuration);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [emblaApi, autoPlay, current, isTransitioning]);
  
  // Professional scroll handler for premium transitions
  const handleScroll = useCallback((direction: 'prev' | 'next') => {
    if (emblaApi && !isTransitioning) {
      setAutoPlay(false);
      setIsTransitioning(true);
      setProgress(0);
      
      // Prepare slides for premium transition
      const slides = document.querySelectorAll('.embla__slide');
      const currentIndex = emblaApi.selectedScrollSnap();
      const isLooping = 
        (direction === 'prev' && currentIndex === 0) || 
        (direction === 'next' && currentIndex === emblaApi.scrollSnapList().length - 1);
      
      // Apply premium transition timing
      slides.forEach(slide => {
        (slide as HTMLElement).style.transition = isLooping 
          ? 'opacity 1.5s cubic-bezier(0.22, 1, 0.36, 1), transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)' 
          : 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
      });
      
      // Execute scroll with slight timing adjustment for loop transitions
      if (isLooping) {
        setTimeout(() => {
          if (direction === 'prev') {
            emblaApi.scrollPrev();
          } else {
            emblaApi.scrollNext();
          }
        }, 50);
      } else {
        if (direction === 'prev') {
          emblaApi.scrollPrev();
        } else {
          emblaApi.scrollNext();
        }
      }
      
      // Re-enable autoplay after professional transition completes
      setTimeout(() => {
        setIsTransitioning(false);
        setAutoPlay(true);
      }, 1800); // Professional transition timing
    }
  }, [emblaApi, isTransitioning]);

  // Handle dot navigation
  const scrollToSlide = useCallback((index: number) => {
    if (emblaApi && !isTransitioning) {
      setIsTransitioning(true);
      setAutoPlay(false);
      emblaApi.scrollTo(index);
      
      setTimeout(() => {
        setIsTransitioning(false);
        setAutoPlay(true);
      }, 1000);
    }
  }, [emblaApi, isTransitioning]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Carousel */}
      <div className="absolute inset-0 z-0">
        <div className="embla w-full h-full" ref={emblaRef}>
          <div className="embla__container h-screen">
            {carouselImages.map((image, index) => (
              <div key={index} className="embla__slide relative h-full min-w-0 flex-[0_0_100%]">
                <div className="relative h-full w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="eager"
                    onLoad={() => handleImageLoad(index)}
                    className={`slide-image zoomed-out-image ${loaded[index] ? 'loaded' : ''}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
                      opacity: 1,
                      transform: 'none', /* No scaling to fill the whole page */
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Navigation Dots with Progress - White theme for visibility */}
          <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-2 sm:space-y-4">
            <div className="flex space-x-2 sm:space-x-3 bg-white/90 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full backdrop-blur-lg border border-gray-200 shadow-2xl">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`relative rounded-full transition-all duration-500 ${
                    current === index 
                      ? "w-8 sm:w-10 md:w-12 h-2 sm:h-3 bg-gradient-to-r from-amber-500 to-orange-600" 
                      : "w-2 sm:w-3 h-2 sm:h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => scrollToSlide(index)}
                  disabled={isTransitioning}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {current === index && (
                    <span className="absolute inset-0 bg-amber-300/30 rounded-full animate-pulse"></span>
                  )}
                </button>
              ))}
            </div>
            {current !== undefined && !isTransitioning && (
              <div className="w-32 sm:w-40 md:w-48 h-1 bg-white/80 rounded-full overflow-hidden backdrop-blur-sm shadow-lg border border-gray-200">
                <ProgressBar progress={progress} className="bg-gradient-to-r from-amber-500 to-orange-600" />
              </div>
            )}
          </div>
          
          {/* Enhanced Navigation Buttons - White theme */}
          <button 
            type="button"
            onClick={() => handleScroll('prev')}
            disabled={isTransitioning}
            className={`absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-200 hover:border-gray-300 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 backdrop-blur-md group ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 group-hover:-translate-x-0.5 transition-transform">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button 
            type="button"
            onClick={() => handleScroll('next')}
            disabled={isTransitioning}
            className={`absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-200 hover:border-gray-300 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 backdrop-blur-md group ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 group-hover:translate-x-0.5 transition-transform">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;