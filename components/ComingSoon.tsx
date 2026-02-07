'use client'

import { motion } from 'framer-motion'

interface ComingSoonProps {
  dayName: string
  icon: string
  date: string
}

export default function ComingSoon({ dayName, icon, date }: ComingSoonProps) {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center relative z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-9xl mb-8"
          animate={{ 
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        >
          {icon}
        </motion.div>

        <motion.h2 
          className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-rose-600 mb-4 romantic-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {dayName}
        </motion.h2>

        <motion.p 
          className="text-2xl font-script text-rose-500 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {date}
        </motion.p>

        <motion.div
          className="bg-white/70 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border-4 border-rose-300 romantic-glow"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
            }}
          >
            <h3 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
              Coming Soon...
            </h3>
          </motion.div>

          <motion.p 
            className="text-3xl md:text-4xl font-script text-rose-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            wait to krle fiddo ❤️
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl font-body text-rose-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Something beautiful is on its way...
          </motion.p>

          <div className="mt-8 flex justify-center gap-4">
            {['💕', '💖', '💗'].map((heart, index) => (
              <motion.div
                key={index}
                className="text-5xl"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                {heart}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-500"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}