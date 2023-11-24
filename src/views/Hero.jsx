import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero(){
  return(
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg space-y-3">
          <h1 className="text-5xl font-bold">Welcome to Game Harbour! 🎮⚓️</h1>
          <p className="py-6">Ahoy, gamers! Set sail into the world of free-to-play delights with Game Harbour, your friendly haven for all things gaming! Whether you're a seasoned player or just dipping your toes into the vast ocean of free games, you've dropped anchor at the right port.</p>
          <Link to="/about" className='btn btn-primary'>Get Started</Link>
        </div>
      </div>
    </div>
  )
}