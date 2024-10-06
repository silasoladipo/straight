import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircle, Users } from 'lucide-react';

const InitialScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome</h1>
        <div className="space-y-4">
          <Link
            to="/user-login"
            className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            <UserCircle className="mr-2" />
            User Login
          </Link>
          <Link
            to="/admin-login"
            className="flex items-center justify-center w-full py-3 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
          >
            <Users className="mr-2" />
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InitialScreen;