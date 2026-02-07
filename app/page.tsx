'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import RoseDay from '@/components/RoseDay'
import ComingSoon from '@/components/ComingSoon'
import Background from '@/components/Background'

const valentineDays = [
  { id: 'rose', name: 'Rose Day', icon: '🌹', date: 'February 7, 2026' },
  { id: 'propose', name: 'Propose Day', icon: '💍', date: 'February 8, 2026' },
  { id: 'chocolate', name: 'Chocolate Day', icon: '🍫', date: 'February 9, 2026' },
  { id: 'teddy', name: 'Teddy Day', icon: '🧸', date: 'February 10, 2026' },
  { id: 'promise', name: 'Promise Day', icon: '🤝', date: 'February 11, 2026' },
  { id: 'hug', name: 'Hug Day', icon: '🤗', date: 'February 12, 2026' },
  { id: 'kiss', name: 'Kiss Day', icon: '💋', date: 'February 13, 2026' },
]

export default function Home() {
  const [activeDay, setActiveDay] = useState('rose')

  const renderContent = () => {
    if (activeDay === 'rose') {
      return <RoseDay />
    }
    
    const dayInfo = valentineDays.find(day => day.id === activeDay)
    if (dayInfo) {
      return <ComingSoon dayName={dayInfo.name} icon={dayInfo.icon} date={dayInfo.date} />
    }
    
    return null
  }

  return (
    <main className="min-h-screen relative">
      <Background />
      <div className="relative z-10">
        <Header activeDay={activeDay} onDayChange={setActiveDay} />
        {renderContent()}
      </div>
    </main>
  )
}
