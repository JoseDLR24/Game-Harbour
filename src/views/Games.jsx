import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import apiConfig from '../config/apiConfig';
import GameCard from '../components/ui/gameCard';
import SidePanel from '../components/ui/sidePanel';

export default function Games() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedFilters = queryParams.getAll('category');

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Adjust the URL based on whether filters are present
      const url = selectedFilters.length
        ? `${apiConfig.baseUrl}${apiConfig.endpoint}?category=${selectedFilters.join('&category=')}`
        : `${apiConfig.baseUrl}${apiConfig.endpoint}`;

      const options = {
        method: 'GET',
        url,
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
  }, [selectedFilters]);

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl lg:text-4xl font-bold py-5 lg:py-8 lg:absolute lg:top-16 lg:ml-80 lg:z-10'>FREE-TO-PLAY GAMES</h1>
      <div className='flex flex-col items-center lg:items-start lg:flex-row'>
        <SidePanel />
        <GameCard games={games} />
      </div>
    </div>
  );
}
