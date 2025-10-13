import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Import the pizza images
import terraPizza from "@/assets/La Casa images/terra pizza.jpg";
import sausagePizza from "@/assets/La Casa images/sausage pizza.jpg";
import magaritaPizza from "@/assets/La Casa images/magarita pizza.jpg";
import prawnsPizza from "@/assets/La Casa images/prawns pizza.jpg";

// Import the special combo images
import couplePizza from "@/assets/La Casa images/couple pizza.jpg";
import coupleCombo from "@/assets/La Casa images/couple combo.jpg";
import familyCombo from "@/assets/La Casa images/family combo.jpg";

// Define types for menu items
interface MenuItem {
  name: string;
  price: string;
  description: string;
  image?: string; // Optional image property
  tags?: string[]; // Optional tags array for filtering
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const Menu = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };
  
  const menuCategories: MenuCategory[] = [
    {
      category: "Special Combos",
      items: [
        { name: "Couple Pizza", price: "Rs. 3,599", description: "Large Chicken Pizza, 2 Mocktails, 2 Desserts.", image: couplePizza },
        { name: "Couple Combo", price: "Rs. 2,499", description: "Chicken Biryani, Tandoori Style Chicken, Boiled Egg (x2), Maldives Sambol, Mint Chutney, Lemon Lassi (x2), Watalappan (x2).", image: coupleCombo },
        { name: "Family Combo", price: "Rs. 4,599", description: "Thin Seafood Fried Rice (Large), Butter Nan Roti (x4), Butter Chicken, Cucumber Salad, Lime Juice (x4), Coffee Cream Caramel.", image: familyCombo },
      ]
    },
    {
      category: "Pizza",
      items: [
        { name: "TERRA (10 Pcs)", price: "Rs. 1,800", description: "Mozzarella Cheese, Capsicum, Tomato, Onion, Oregano, Tomato Sauce", image: terraPizza },
        { name: "SAUSAGE & BACON (10 Pcs)", price: "Rs. 2,000", description: "Mozzarella Cheese, Bell pepper, Oregano, Tomato Sauce", image: sausagePizza },
        { name: "MARGHERITA (10 Pcs)", price: "Rs. 1,650", description: "Mozzarella Cheese, Oregano, Olive, Tomato Sauce", image: magaritaPizza },
        { name: "PRAWNS (10 Pcs)", price: "Rs. 2,200", description: "Mozzarella Cheese, Onion, Capsicum, Oregano, Tomato Sauce", image: prawnsPizza },
      ]
    },
    {
      category: "Appetizers",
      items: [
        { name: "Bruschetta Trio", price: "Rs. 1,200", description: "Classic tomato, mushroom, and olive tapenade on toasted bread" },
        { name: "Calamari Fritti", price: "Rs. 1,400", description: "Crispy fried calamari with lemon aioli" },
        { name: "Caprese Salad", price: "Rs. 1,300", description: "Fresh mozzarella, heirloom tomatoes, and basil" },
        { name: "Antipasto Platter", price: "Rs. 1,800", description: "Cured meats, cheeses, olives, and marinated vegetables" },
      ]
    },
    {
      category: "Main Courses",
      items: [
        { name: "Spaghetti Carbonara", price: "Rs. 2,200", description: "Classic Roman pasta with pancetta and parmesan" },
        { name: "Osso Buco", price: "Rs. 3,200", description: "Braised veal shanks with saffron risotto" },
        { name: "Branzino al Forno", price: "Rs. 2,800", description: "Whole roasted Mediterranean sea bass with herbs" },
        { name: "Bistecca alla Fiorentina", price: "Rs. 4,200", description: "Grilled T-bone steak with rosemary potatoes" },
        { name: "Risotto ai Funghi", price: "Rs. 2,400", description: "Creamy wild mushroom risotto with truffle oil" },
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Tiramisu", price: "Rs. 900", description: "Classic Italian layered dessert with espresso and mascarpone" },
        { name: "Panna Cotta", price: "Rs. 800", description: "Silky vanilla cream with berry compote" },
        { name: "Cannoli", price: "Rs. 800", description: "Crispy pastry shells filled with sweet ricotta" },
        { name: "Gelato Selection", price: "Rs. 700", description: "Three scoops of artisanal Italian gelato" },
      ]
    },
    {
      category: "Beverages",
      items: [
        { name: "House Wine", price: "Rs. 800/glass", description: "Red, white, or rosé from our curated selection" },
        { name: "Italian Coffee", price: "Rs. 400", description: "Espresso, cappuccino, or macchiato" },
        { name: "San Pellegrino", price: "Rs. 500", description: "Sparkling mineral water" },
        { name: "Fresh Lemonade", price: "Rs. 400", description: "House-made with Mediterranean lemons" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Enjoy our special combo meals, authentic pizzas, and curated selection of 
            delicious dishes made with the finest ingredients
          </p>
        </div>

        <Tabs defaultValue="Special Combos" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-6 h-auto gap-2 overflow-x-auto flex-nowrap py-1 px-1">
            {menuCategories.map((cat) => (
              <TabsTrigger 
                key={cat.category} 
                value={cat.category}
                className="text-xs sm:text-sm md:text-base py-2 md:py-3 whitespace-nowrap"
              >
                {cat.category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-6 md:mb-8 px-1 sm:px-2" data-aos="fade-up">
            <Button 
              variant={activeFilters.includes('Vegetarian') ? "default" : "outline"}
              size="sm"
              className="rounded-full text-xs md:text-sm py-1 px-2 md:px-3 h-auto"
              onClick={() => toggleFilter('Vegetarian')}
            >
              🥗 <span className="hidden xs:inline">Vegetarian</span><span className="inline xs:hidden">Veg</span>
            </Button>
            <Button 
              variant={activeFilters.includes('Gluten-Free') ? "default" : "outline"}
              size="sm"
              className="rounded-full text-xs md:text-sm py-1 px-2 md:px-3 h-auto"
              onClick={() => toggleFilter('Gluten-Free')}
            >
              🌾 <span className="hidden xs:inline">Gluten-Free</span><span className="inline xs:hidden">GF</span>
            </Button>
            <Button 
              variant={activeFilters.includes('Seafood') ? "default" : "outline"}
              size="sm"
              className="rounded-full text-xs md:text-sm py-1 px-2 md:px-3 h-auto"
              onClick={() => toggleFilter('Seafood')}
            >
              🦐 Seafood
            </Button>
            <Button 
              variant={activeFilters.includes('Popular') ? "default" : "outline"}
              size="sm"
              className="rounded-full text-xs md:text-sm py-1 px-2 md:px-3 h-auto"
              onClick={() => toggleFilter('Popular')}
            >
              🔥 Popular
            </Button>
            <Button 
              variant={activeFilters.includes('Signature') ? "default" : "outline"}
              size="sm"
              className="rounded-full text-xs md:text-sm py-1 px-2 md:px-3 h-auto"
              onClick={() => toggleFilter('Signature')}
            >
              👨‍🍳 <span className="hidden xs:inline">Signature</span><span className="inline xs:hidden">Sig</span>
            </Button>
            {activeFilters.length > 0 && (
              <Button 
                variant="ghost"
                size="sm"
                className="rounded-full text-xs md:text-sm py-1 px-2 md:px-3 h-auto text-muted-foreground"
                onClick={() => setActiveFilters([])}
              >
                Clear filters
              </Button>
            )}
          </div>

          {menuCategories.map((cat) => (
            <TabsContent key={cat.category} value={cat.category} className="animate-fade-in">
              {cat.items
                .filter(item => 
                  activeFilters.length === 0 || // Show all if no filters
                  (item.tags && item.tags.some(tag => activeFilters.includes(tag))) // Show if item has any active filter
                ).length === 0 ? (
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <div className="text-5xl mb-4">😕</div>
                    <h3 className="text-lg font-medium mb-2">No matching items</h3>
                    <p className="text-muted-foreground mb-4">
                      We couldn't find any {cat.category.toLowerCase()} that match your filters.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => setActiveFilters([])}
                    >
                      Clear all filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {cat.items
                      .filter(item => 
                        activeFilters.length === 0 || // Show all if no filters
                        (item.tags && item.tags.some(tag => activeFilters.includes(tag))) // Show if item has any active filter
                      )
                      .map((item, index) => (
                        <Card 
                          key={index} 
                          className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                            cat.category === "Special Combos" ? "border-amber-200 bg-gradient-to-br from-amber-50 to-white" : 
                            cat.category === "Pizza" ? "border-red-200 bg-gradient-to-br from-red-50 to-white" :
                            ""}`}
                          data-aos="fade-up"
                          data-aos-delay={index * 100}
                        >
                          {(cat.category === "Pizza" || cat.category === "Special Combos") && item.image && (
                            <div className="relative w-full h-36 sm:h-40 md:h-48 overflow-hidden group">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="bg-white/90 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                  <span className="font-medium text-sm">Click to view details</span>
                                </div>
                              </div>
                            </div>
                          )}
                          <CardHeader className="p-3 sm:p-4 md:p-6">
                            <div className="flex justify-between items-start">
                              <div className="flex flex-col">
                                <div className="flex items-center">
                                  <CardTitle className={`${
                                    cat.category === "Special Combos" ? "text-base sm:text-lg md:text-xl lg:text-2xl text-amber-800" : 
                                    cat.category === "Pizza" ? "text-base sm:text-lg md:text-xl text-red-700 font-bold" : 
                                    "text-base sm:text-lg md:text-xl"}`}>
                                    {item.name}
                                  </CardTitle>
                                </div>
                                
                                {/* Tags */}
                                {item.tags && (
                                  <div className="flex flex-wrap gap-1 mt-1 mb-1 md:mb-2">
                                    {item.tags.map((tag, idx) => (
                                      <span 
                                        key={idx} 
                                        className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full font-medium ${
                                          tag === 'Signature' ? 'bg-blue-100 text-blue-700' :
                                          tag === 'Popular' ? 'bg-orange-100 text-orange-700' :
                                          tag === 'Vegetarian' ? 'bg-green-100 text-green-700' :
                                          tag === 'Gluten-Free' ? 'bg-purple-100 text-purple-700' :
                                          tag === 'Seafood' ? 'bg-cyan-100 text-cyan-700' :
                                          'bg-gray-100 text-gray-700'
                                        }`}
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <span className={`${
                                cat.category === "Special Combos" ? "text-green-700 font-bold text-sm sm:text-base md:text-lg lg:text-xl" : 
                                cat.category === "Pizza" ? "text-red-600 font-bold text-sm sm:text-base md:text-lg" :
                                "text-primary font-semibold text-sm sm:text-base md:text-lg"}`}>
                                {item.price}
                              </span>
                            </div>
                            <CardDescription className={`${
                              cat.category === "Special Combos" ? "text-xs sm:text-sm md:text-base lg:text-lg text-gray-700" : 
                              cat.category === "Pizza" ? "text-xs sm:text-sm md:text-base text-gray-700" :
                              "text-xs sm:text-sm md:text-base"}`}>
                              {item.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      ))}
                  </div>
                )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
