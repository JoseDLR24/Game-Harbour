import React from 'react';
import { Link } from 'react-router-dom';

export default function GameCard({ games }) {
  return games ? (
    <ul className='flex flex-wrap justify-center lg:pt-20'>
      {games.map((game) => (
        <li key={game.id} className="card w-80 md:w-96 bg-base-100 shadow-xl md:py-2 m-3">
          <figure><img src={game.thumbnail} alt={game.title} className='rounded-t-lg' /></figure>
          <div className="card-body">
            <h2 className="card-title font-semibold">
              {game.title}
              <div className="h-fit text-sm rounded-lg bg-teal-400 p-1 text-white">{game.platform}</div>
            </h2>
            <p>{game.short_description}</p>
            <p>Publisher: {game.publisher}</p>
            <p>Developer: {game.developer}</p>
            <p>Release Date: {game.release_date}</p>
            <Link to={game.game_url} target="_blank" rel="noopener noreferrer" className='underline'>
              Play Game
            </Link>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{game.genre}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  ) : null;
}
