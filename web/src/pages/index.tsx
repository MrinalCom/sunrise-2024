import React from 'react';
import TaskList from '@/components/taskList';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <header className="bg-white shadow-lg py-6 px-8 mb-12">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Task Board
          </h1>
        </div>
      </header>
      <main className="bg-white rounded-lg shadow-lg p-8 max-w-screen-xl mx-auto">
        <TaskList />
      </main>
      <footer className="bg-white text-center py-4 mt-12">
        <p className="text-gray-600">Created By @Mrinal</p>
      </footer>
    </div>
  );
};

export default Home;
