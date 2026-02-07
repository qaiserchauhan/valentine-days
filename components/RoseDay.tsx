'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const roseQuotes = [
  {
    quote: "A rose speaks of love silently, in a language known only to the heart.",
    author: "Unknown"
  },
  {
    quote: "Love planted a rose, and the world turned sweet.",
    author: "Katharine Lee Bates"
  },
  {
    quote: "The rose is a flower of love. The world has acclaimed it for centuries.",
    author: "Unknown"
  },
  {
    quote: "A single rose can be my garden... a single friend, my world.",
    author: "Leo Buscaglia"
  },
  {
    quote: "But he that dares not grasp the thorn should never crave the rose.",
    author: "Anne Brontë"
  },
  {
    quote: "Love is much like a wild rose, beautiful and calm, but willing to draw blood in its defense.",
    author: "Mark Overby"
  }
]

const roseImages = [
  {
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    alt: "Beautiful red roses"
  },
  {
    url: "https://images.unsplash.com/photo-1455659817273-f96807779a2a",
    alt: "Pink rose close-up"
  },
  {
    url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    alt: "Rose bouquet"
  },
  {
    url: "https://images.unsplash.com/photo-1561334801-1b5e0c4a7c0a",
    alt: "White roses"
  },
  {
    url: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11",
    alt: "Red rose with dew"
  },
  {
    url: "https://images.unsplash.com/photo-1464297162577-f5295c892194",
    alt: "Pink roses garden"
  }
]

export default function RoseDay() {
  const [selectedQuote, setSelectedQuote] = useState(0)

  return (
    <div className="min-h-screen py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-rose-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block text-8xl mb-4"
          >
            🌹
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-rose-600 mb-4 romantic-text">
            Happy Rose Day Akku 🌹
          </h2>
          <p className="text-xl md:text-2xl font-script text-rose-500">
            Where love begins with a single rose
          </p>
          <motion.div
            className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-body text-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            February 7, 2026
          </motion.div>
        </motion.div>

        <motion.div 
          className="mb-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-rose-200 romantic-glow"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-rose-600 mb-8 text-center">
            Romantic Rose Quotes
          </h3>
          
          <motion.div 
            className="mb-8 p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border-l-4 border-rose-500"
            key={selectedQuote}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl md:text-3xl font-script text-rose-700 mb-4 italic leading-relaxed">
              "{roseQuotes[selectedQuote].quote}"
            </p>
            <p className="text-lg font-body text-rose-500 text-right">
              — {roseQuotes[selectedQuote].author}
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {roseQuotes.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedQuote(index)}
                className={`w-12 h-12 rounded-full font-semibold transition-all ${
                  selectedQuote === index
                    ? 'bg-gradient-to-br from-rose-500 to-pink-600 text-white scale-110 shadow-lg'
                    : 'bg-rose-100 text-rose-600 hover:bg-rose-200'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-rose-600 mb-8 text-center">
            Beautiful Rose Gallery
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roseImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-body text-lg">{image.alt}</p>
                </div>
                <motion.div
                  className="absolute top-4 right-4 text-4xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  🌹
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.p 
            className="text-2xl md:text-3xl font-script text-rose-500 mb-4"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
            }}
          >
            Every rose speaks of love ❤️
          </motion.p>
          <p className="text-lg font-body text-rose-400">
            Make this Rose Day special with someone you cherish
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
