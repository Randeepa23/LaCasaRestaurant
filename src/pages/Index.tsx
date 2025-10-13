import { Suspense, lazy } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

// Lazy load components that aren't needed on initial load
const About = lazy(() => import("@/components/About"));
const Menu = lazy(() => import("@/components/Menu"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Simple loading component
const LoadingComponent = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Suspense fallback={<LoadingComponent />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <Menu />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
