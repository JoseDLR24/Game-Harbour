import React, { useEffect, useState } from 'react';
import GameCard from '../components/ui/gameCard';
import SidePanel from '../components/ui/sidePanel';

import axios from 'axios';
import apiConfig from '../config/apiConfig';

export default function Games() {
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
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl lg:text-4xl font-bold py-5 lg:py-8 lg:absolute lg:top-16 lg:ml-80 lg:z-10'>FREE-TO-PLAY GAMES</h1>
      <div className='flex flex-col items-center lg:items-start lg:flex-row'>
        <SidePanel/>
        <GameCard games={games}/>
      </div>
    </div>
    
  );
};