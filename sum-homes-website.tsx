import React, { useState } from 'react';
import { Menu, Search, User, X } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-navy-900">Sum Homes</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-navy-900">Buy</a>
            <a href="#" className="text-gray-700 hover:text-navy-900">Rent</a>
            <a href="#" className="text-gray-700 hover:text-navy-900">Sell</a>
            <a href="#" className="text-gray-700 hover:text-navy-900">New Development</a>
            <a href="#" className="text-gray-700 hover:text-navy-900">Agents</a>
          </div>

          {/* Search and User */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-navy-900 hover:bg-gray-50">Buy</a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-navy-900 hover:bg-gray-50">Rent</a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-navy-900 hover:bg-gray-50">Sell</a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-navy-900 hover:bg-gray-50">New Development</a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-navy-900 hover:bg-gray-50">Agents</a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/api/placeholder/1920/1080"
          alt="Luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Discover Your Luxury Home
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12">
            Experience elegance in the heart of Abuja
          </p>
          
          {/* Search Box */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search by location, property type..."
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
                <button className="bg-navy-900 text-white px-8 py-3 rounded-md hover:bg-navy-800 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Featured Properties Component
const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Maitama",
      price: "₦850,000,000",
      location: "Maitama, Abuja",
      image: "/api/placeholder/400/300",
      beds: 5,
      baths: 6,
      sqft: 7500
    },
    {
      id: 2,
      title: "Premium Apartment in Asokoro",
      price: "₦450,000,000",
      location: "Asokoro, Abuja",
      image: "/api/placeholder/400/300",
      beds: 4,
      baths: 4,
      sqft: 4200
    },
    {
      id: 3,
      title: "Modern Penthouse in Wuse II",
      price: "₦650,000,000",
      location: "Wuse II, Abuja",
      image: "/api/placeholder/400/300",
      beds: 3,
      baths: 4,
      sqft: 3800
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h4 className="text-xl font-semibold mb-2">{property.title}</h4>
                <p className="text-2xl font-bold text-navy-900 mb-2">{property.price}</p>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between text-gray-600">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} sqft</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Lead Capture Form Component
const LeadCaptureForm = () => {
  return (
    <section className="bg-navy-900 text-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">Find Your Dream Home</h3>
          <p className="text-lg">Connect with our luxury real estate experts today</p>
        </div>
        
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
          />
          <textarea
            placeholder="Tell us what you're looking for..."
            rows={4}
            className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
          />
          <button
            type="submit"
            className="w-full bg-white text-navy-900 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact an Agent
          </button>
        </form>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16"> {/* Adjust for fixed navbar */}
        <HeroSection />
        <FeaturedProperties />
        <LeadCaptureForm />
      </main>
    </div>
  );
};

export default App;