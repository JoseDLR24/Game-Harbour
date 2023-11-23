import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SidePanel() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialFilters = queryParams.getAll('category');
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);

  const categories = ['action', 'battle-royale', 'fantasy', 'fighting', 'horror', 'moba', 'racing', 'shooter', 'sports', 'strategy', 'survival', 'mmo', 'anime', 'sci-fi'];

  const handleFilterChange = (category) => {
    const updatedFilters = selectedFilters.includes(category)
      ? selectedFilters.filter((filter) => filter !== category)
      : [...selectedFilters, category];
    setSelectedFilters(updatedFilters);
  };

  const applyFilters = () => {
    const query = selectedFilters.length > 0 ? `?category=${selectedFilters.join('&category=')}` : '';
    navigate(`/games${query}`);
  };

  const resetFilters = () => {
    setSelectedFilters([]);
    navigate('/games'); 
  };

  return (
    <aside className="drawer lg:drawer-open w-fit lg:sticky lg:top-0">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-3">Filter Games</label>
      <div className="drawer-side z-10 lg:z-0">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <h3 className="text-xl font-bold">Categories</h3>
          {categories.map((category, index) => (
            <li key={index} className="">
              <div>
                <input
                  type="checkbox"
                  id={category}
                  name={category}
                  value={category}
                  checked={selectedFilters.includes(category)}
                  onChange={() => handleFilterChange(category)}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            </li>
          ))}
          <button className="btn btn-outline mt-4" onClick={resetFilters}>
            Reset Filters
          </button>
          <button className="btn btn-primary mt-4" onClick={applyFilters}>
            Apply Filters
          </button>
        </ul>
      </div>
    </aside>
  );
}
