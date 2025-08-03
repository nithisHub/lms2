import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Masterbrain University
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your gateway to advanced learning and knowledge
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lectures</h3>
              <p className="text-gray-600">Access comprehensive lecture materials and resources.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Courses</h3>
              <p className="text-gray-600">Explore our wide range of courses and programs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Achievements</h3>
              <p className="text-gray-600">Track your progress and celebrate your milestones.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
