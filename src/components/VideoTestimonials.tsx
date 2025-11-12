import { motion } from 'framer-motion';
import { Play, Star, Heart } from 'lucide-react';
import { useState } from 'react';

interface VideoTestimonial {
  id: number;
  name: string;
  location: string;
  videoUrl: string;
  thumbnailUrl: string;
  quote: string;
  rating: number;
  verified: boolean;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: 'Sister Aisha Rahman',
    location: 'Mumbai, India',
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1',
    thumbnailUrl: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_1/maxresdefault.jpg',
    quote: 'This changed how I connect with the Quran. My children finally understand Allah\'s beautiful message.',
    rating: 5,
    verified: true,
  },
  {
    id: 2,
    name: 'Brother Mohammed Farooq',
    location: 'Delhi, India',
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2',
    thumbnailUrl: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_2/maxresdefault.jpg',
    quote: 'After years of struggle, this guide helped me truly understand the Quran. Alhamdulillah!',
    rating: 5,
    verified: true,
  },
  {
    id: 3,
    name: 'Sister Fatima Khan',
    location: 'Bangalore, India',
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3',
    thumbnailUrl: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_3/maxresdefault.jpg',
    quote: 'The illustrations brought the Quran to life. Now my family reads together every night.',
    rating: 5,
    verified: true,
  },
];

const VideoTestimonials: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? 'text-amber-400 fill-amber-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 fill-white" />
            <span className="font-bold text-sm uppercase tracking-wider">Real Stories • Real Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Brothers & Sisters</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These heartfelt testimonials from our Muslim community show how Simple Quran
            has transformed their understanding and connection with Allah's words
          </p>
        </motion.div>

        {/* Video Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  {activeVideo === testimonial.id ? (
                    <iframe
                      className="w-full h-full"
                      src={testimonial.videoUrl}
                      title={`${testimonial.name} testimonial`}
                      style={{ border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      {/* Placeholder for thumbnail - replace with actual video thumbnail */}
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-emerald-900/40 flex items-center justify-center">
                        <div className="text-center text-white p-6">
                          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl font-bold">
                              {testimonial.name.split(' ')[1]?.charAt(0) || 'U'}
                            </span>
                          </div>
                          <p className="text-sm italic line-clamp-2">"{testimonial.quote}"</p>
                        </div>
                      </div>

                      {/* Play Button Overlay */}
                      <button
                        onClick={() => setActiveVideo(testimonial.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors group"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-emerald-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </button>

                      {/* Verified Badge */}
                      {testimonial.verified && (
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Verified</span>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Testimonial Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 mb-4 italic line-clamp-3 text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">
                        {testimonial.name.split(' ')[0]?.charAt(0)}
                        {testimonial.name.split(' ')[1]?.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emotional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-8 sm:p-12 border-2 border-primary/20 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Join Thousands of Muslims Transforming Their Lives
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Don't let another day pass without truly understanding the Quran.
              Your journey to a deeper connection with Allah starts today.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold">5000+ Happy Readers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="font-semibold">100% Satisfaction</span>
              </div>
            </div>
            <p className="text-base text-emerald-800 italic font-medium">
              "رَبِّ زِدْنِي عِلْمًا" - "O my Lord, increase me in knowledge" (Quran 20:114)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
