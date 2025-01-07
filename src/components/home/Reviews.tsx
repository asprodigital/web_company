import React, { useEffect, useState, useRef } from 'react';
import { Star } from 'lucide-react';
import { reviews } from '../../data/reviews';

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  return (
    <section id="reviews" className="py-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light">What Our Users Say</h2>
          <p className="text-gray-600 mt-4">Reviews from our app users</p>
        </div>

        <div className="overflow-hidden relative">
          <div 
            ref={scrollRef}
            className="flex transition-transform duration-1000 ease-out"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full flex-shrink-0 px-4 md:px-12"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic">"{review.text}"</p>
                    <div className="flex flex-col">
                      <span className="font-medium">{review.userName}</span>
                      <span className="text-sm text-gray-600">{review.appName}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-black w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;