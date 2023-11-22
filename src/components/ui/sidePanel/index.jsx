import React, { useState } from 'react';

export default function SidePanel({ onFilterChange }) {
  const categories = ['action', 'battle-royale', 'fantasy', 'fighting', 'horror', 'moba', 'racing', 'shooter', 'sports', 'strategy', 'survival', 'mmo', 'anime', 'sci-fi'];

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
                />
                <label htmlFor={category}>{category}</label>
              </div>
            </li>
          ))}
          <button className="btn btn-outline mt-4">
            Reset Filters
          </button>
          <button className="btn btn-primary mt-4">
            Apply Filters
          </button>
        </ul>
      </div>
    </aside>
  );
}
