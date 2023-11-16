import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import apiConfig from '../../../config/apiConfig';

export default function GameCard(){
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: `${apiConfig.baseUrl}${apiConfig.endpoint}`,
        headers: apiConfig.headers,
      };

      try {
        const response = await axios.request(options);
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul>
      {games.map((game) => (
          <li key={game.id} className="card w-96 bg-base-100 shadow-xl py-3">
            <figure><img src={game.thumbnail} alt={game.title} className='rounded-t-lg' /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {game.title}
                <div className="h-fit text-sm rounded-lg bg-teal-400 p-1 text-white">{game.platform}</div>
              </h2>
              <p>{game.short_description}</p>
              <p>Publisher: {game.publisher}</p>
              <p>Developer: {game.developer}</p>
              <p>Release Date: {game.release_date}</p>
              <Link to={game.game_url} target="_blank" rel="noopener noreferrer">
                Play Game
              </Link>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{game.genre}</div>
              </div>
            </div>
            
          </li>
        ))}
    </ul>
  )
}