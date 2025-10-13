import { ChefHat, Heart, Utensils } from "lucide-react";
import foodSpread from "@/assets/food-spread.jpg";

const About = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Authentic Recipes",
      description: "Traditional Mediterranean recipes passed down through generations"
    },
    {
      icon: Heart,
      title: "Fresh Ingredients",
      description: "Locally sourced, seasonal ingredients for the finest flavors"
    },
    {
      icon: Utensils,
      title: "Warm Hospitality",
      description: "Every guest is treated like family in our welcoming atmosphere"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1" data-aos="fade-right" data-aos-delay="100">
            <img
              src={foodSpread}
              alt="Mediterranean Cuisine"
              className="rounded-lg shadow-2xl w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Since 2018, La Casa has been serving authentic Mediterranean cuisine to our beloved community. 
              Our passion for food and dedication to quality has made us a cherished destination for those 
              seeking genuine flavors and warm hospitality.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every dish tells a story of tradition, crafted with recipes that have been perfected over 
              decades. We believe in the power of good food to bring people together and create lasting memories.
            </p>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 items-start group"
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 100)}
                >
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
