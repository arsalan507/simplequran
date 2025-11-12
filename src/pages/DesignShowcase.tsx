import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductPage from './ProductPage';
import { Check } from 'lucide-react';

type DesignVariation = 'minimalist' | 'bold' | 'warm' | 'classic' | 'magazine';

const DesignShowcase = () => {
  const [selectedDesign, setSelectedDesign] = useState<DesignVariation | null>(null);

  const designs: { id: DesignVariation; name: string; description: string; style: string }[] = [
    {
      id: 'minimalist',
      name: 'Minimalist Premium',
      description: 'Clean, spacious design with elegant typography. Perfect for a modern, sophisticated feel.',
      style: 'Modern • Elegant • Spacious',
    },
    {
      id: 'bold',
      name: 'Modern Bold',
      description: 'Vibrant colors and strong typography. Energetic design that grabs attention immediately.',
      style: 'Vibrant • Energetic • Eye-catching',
    },
    {
      id: 'warm',
      name: 'Warm & Trustworthy',
      description: 'Soft amber tones create a welcoming, friendly atmosphere. Builds trust and connection.',
      style: 'Friendly • Warm • Trustworthy',
    },
    {
      id: 'classic',
      name: 'Classic E-commerce',
      description: 'Traditional Amazon/Flipkart style. Familiar layout that users know and trust.',
      style: 'Familiar • Professional • Conversion-focused',
    },
    {
      id: 'magazine',
      name: 'Contemporary Magazine',
      description: 'Editorial, sophisticated design with serif fonts. Premium, high-end aesthetic.',
      style: 'Editorial • Sophisticated • Premium',
    },
  ];

  if (selectedDesign) {
    return (
      <div>
        <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Preview: {designs.find((d) => d.id === selectedDesign)?.name}
              </h2>
              <p className="text-sm text-gray-600">
                {designs.find((d) => d.id === selectedDesign)?.style}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSelectedDesign(null)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Options
              </button>
              <button
                onClick={() => {
                  alert(`Selected: ${designs.find((d) => d.id === selectedDesign)?.name}\n\nI'll now implement this design for your product page!`);
                }}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <Check className="w-5 h-5" />
                <span>Choose This Design</span>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-24">
          <ProductPage variant={selectedDesign} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Product Page Design
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select one of these 5 professionally crafted designs for your Simple Quran product page
          </p>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, idx) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedDesign(design.id)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105"
            >
              {/* Preview Thumbnail */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden group">
                {/* Thumbnail Preview */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  {design.id === 'minimalist' && (
                    <div className="w-full h-full bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between">
                      <div>
                        <div className="h-3 bg-gray-900 w-1/2 rounded mb-2"></div>
                        <div className="h-2 bg-gray-300 w-1/3 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                      </div>
                      <div className="h-8 bg-gray-900 rounded-full"></div>
                    </div>
                  )}
                  {design.id === 'bold' && (
                    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl shadow-xl p-6 flex flex-col justify-between">
                      <div className="bg-green-600 text-white text-xs px-3 py-1 rounded-full w-fit">
                        BESTSELLER
                      </div>
                      <div>
                        <div className="h-4 bg-gray-900 w-3/4 rounded mb-2"></div>
                        <div className="h-2 bg-amber-400 w-1/3 rounded"></div>
                      </div>
                      <div className="h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl"></div>
                    </div>
                  )}
                  {design.id === 'warm' && (
                    <div className="w-full h-full bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl shadow-xl p-6 flex flex-col justify-between">
                      <div>
                        <div className="h-3 bg-amber-600 w-2/3 rounded mb-2"></div>
                        <div className="flex space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-amber-50 rounded-xl p-3 space-y-1">
                        <div className="h-2 bg-amber-200 rounded"></div>
                        <div className="h-2 bg-amber-200 rounded w-4/5"></div>
                      </div>
                      <div className="h-9 bg-gradient-to-r from-green-600 to-green-700 rounded-xl"></div>
                    </div>
                  )}
                  {design.id === 'classic' && (
                    <div className="w-full h-full bg-white rounded-lg shadow-xl p-6 flex flex-col justify-between border border-gray-200">
                      <div>
                        <div className="h-3 bg-gray-900 w-full rounded mb-2"></div>
                        <div className="flex items-center space-x-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          ))}
                        </div>
                        <div className="h-4 bg-red-600 w-1/3 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <div className="h-2 bg-gray-200 rounded flex-1"></div>
                          </div>
                        ))}
                      </div>
                      <div className="h-8 bg-amber-400 rounded-lg"></div>
                    </div>
                  )}
                  {design.id === 'magazine' && (
                    <div className="w-full h-full bg-white p-6 flex flex-col justify-between">
                      <div className="border border-gray-300 px-3 py-1 rounded-full w-fit text-xs">
                        COLLECTION
                      </div>
                      <div>
                        <div className="h-6 bg-gray-900 w-3/4 rounded mb-2 font-serif"></div>
                        <div className="h-2 bg-gray-300 w-full rounded"></div>
                      </div>
                      <div className="border-t border-b border-gray-300 py-3">
                        <div className="h-5 bg-gray-900 w-1/3 rounded"></div>
                      </div>
                      <div className="h-8 bg-gray-900 rounded"></div>
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-lg font-bold mb-2">Preview Full Design</p>
                    <p className="text-sm opacity-80">Click to see the complete layout</p>
                  </div>
                </div>
              </div>

              {/* Design Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{design.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{design.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">{design.style}</span>
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                    View →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            💡 <strong>Tip:</strong> Click any design card to see the full product page in action
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignShowcase;
