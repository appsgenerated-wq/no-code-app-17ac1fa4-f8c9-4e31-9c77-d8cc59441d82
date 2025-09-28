import React, { useEffect, useState } from 'react';
import config from '../constants.js';

const DashboardPage = ({ user, restaurants, onLogout, onLoadRestaurants, onCreateRestaurant }) => {
  const [newRestaurant, setNewRestaurant] = useState({ name: '', description: '', address: '', cuisine: 'Other' });

  useEffect(() => {
    onLoadRestaurants();
  }, [onLoadRestaurants]);

  const handleCreateRestaurant = (e) => {
    e.preventDefault();
    onCreateRestaurant(newRestaurant);
    setNewRestaurant({ name: '', description: '', address: '', cuisine: 'Other' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
             <h1 className="text-2xl font-bold text-orange-600">FlavorFind</h1>
             <p className="text-sm text-gray-500">Welcome back, {user?.name || 'User'}!</p>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`${config.BACKEND_URL}/admin`} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
            >
              Admin
            </a>
            <button 
              onClick={onLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Create Restaurant Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Add Your Restaurant</h2>
              <form onSubmit={handleCreateRestaurant} className="space-y-4">
                <input
                  type="text"
                  placeholder="Restaurant Name"
                  value={newRestaurant.name}
                  onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={newRestaurant.description}
                  onChange={(e) => setNewRestaurant({ ...newRestaurant, description: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  rows="3"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={newRestaurant.address}
                  onChange={(e) => setNewRestaurant({ ...newRestaurant, address: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <select
                   value={newRestaurant.cuisine}
                   onChange={(e) => setNewRestaurant({ ...newRestaurant, cuisine: e.target.value })}
                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                >
                    <option>Italian</option>
                    <option>Mexican</option>
                    <option>Chinese</option>
                    <option>Indian</option>
                    <option>American</option>
                    <option>Other</option>
                </select>
                <button type="submit" className="w-full bg-orange-600 text-white p-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Add Restaurant
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Restaurants List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Restaurants</h2>
            {restaurants.length === 0 ? (
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <p className="text-gray-500">No restaurants found. Be the first to add one!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {restaurants.map(restaurant => (
                  <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-xl">
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                         <div>
                            <h3 className="text-lg font-bold text-gray-800">{restaurant.name}</h3>
                            <p className="text-sm text-gray-500 mb-1">{restaurant.address}</p>
                            <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{restaurant.cuisine}</span>
                         </div>
                         <p className="text-xs text-gray-400">By {restaurant.owner?.name || 'Unknown'}</p>
                      </div>
                      <p className="text-gray-600 mt-3 text-sm">{restaurant.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
