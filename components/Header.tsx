'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface HeaderProps {
  activeDay: string
  onDayChange: (day: string) => void
}

const valentineDays = [
  { id: 'rose', name: 'Rose Day', icon: '🌹', date: 'Feb 7' },
  { id: 'propose', name: 'Propose Day', icon: '💍', date: 'Feb 8' },
  { id: 'chocolate', name: 'Chocolate Day', icon: '🍫', date: 'Feb 9' },
  { id: 'teddy', name: 'Teddy Day', icon: '🧸', date: 'Feb 10' },
  { id: 'promise', name: 'Promise Day', icon: '🤝', date: 'Feb 11' },
  { id: 'hug', name: 'Hug Day', icon: '🤗', date: 'Feb 12' },
  { id: 'kiss', name: 'Kiss Day', icon: '💋', date: 'Feb 13' },
]

export default function Header({ activeDay, onDayChange }: HeaderProps) {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b-2 border-rose-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent romantic-text mb-2">
            Valentine Week 2026
          </h1>
          <p className="text-rose-600 font-script text-xl md:text-2xl">
            Seven Days of Love & Romance ❤️
          </p>
        </motion.div>

        <nav className="pb-4 overflow-x-auto">
          <div className="flex gap-2 md:gap-3 min-w-max md:justify-center">
            {valentineDays.map((day, index) => (
              <motion.button
                key={day.id}
                onClick={() => onDayChange(day.id)}
                onMouseEnter={() => setHoveredDay(day.id)}
                onMouseLeave={() => setHoveredDay(null)}
                className={`relative px-4 py-3 rounded-2xl font-body font-semibold transition-all duration-300 ${
                  activeDay === day.id
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-xl scale-105'
                    : 'bg-white/70 text-rose-700 hover:bg-rose-50 hover:scale-105'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl">{day.icon}</span>
                  <span className="text-sm whitespace-nowrap">{day.name}</span>
                  <span className="text-xs opacity-70">{day.date}</span>
                </div>
                
                {activeDay === day.id && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-rose-500 rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {hoveredDay === day.id && activeDay !== day.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
