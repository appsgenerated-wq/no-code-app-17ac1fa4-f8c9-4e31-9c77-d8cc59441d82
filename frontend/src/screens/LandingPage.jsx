import React, { useState } from 'react';
import config from '../constants.js';

const LandingPage = ({ onLogin, onSignup }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoginView) {
      onLogin(email, password);
    } else {
      onSignup(name, email, password);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="p-4 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-orange-600">FlavorFind</h1>
        <a 
          href={`${config.BACKEND_URL}/admin`} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Admin Panel
        </a>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around p-8">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Discover Your Next Favorite Meal.</h2>
            <p className="text-lg text-gray-600 mb-6">Browse local restaurants, explore menus, and share your culinary experiences. All powered by a secure and scalable backend.</p>
            <button 
              onClick={() => onLogin('diner@manifest.build', 'password')}
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-transform hover:scale-105"
            >
              Try Demo User
            </button>
          </div>
          <div className="lg:w-1/3 w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-6">{isLoginView ? 'Welcome Back' : 'Create Account'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLoginView && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
              <button type="submit" className="w-full bg-orange-600 text-white p-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                {isLoginView ? 'Log In' : 'Sign Up'}
              </button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-6">
              {isLoginView ? "Don't have an account?" : 'Already have an account?'}
              <button onClick={() => setIsLoginView(!isLoginView)} className="font-semibold text-orange-600 hover:underline ml-1">
                {isLoginView ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
