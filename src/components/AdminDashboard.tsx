import React, { useState } from 'react';
import { PlusCircle, User, FileText, Bell } from 'lucide-react';

type UserType = {
  id: number;
  name: string;
  email: string;
  status: string;
};

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<UserType[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Onboarding' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'First Draft' },
  ]);

  const [showCreateUser, setShowCreateUser] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const handleCreateUser = () => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id, status: 'Onboarding' }]);
    setNewUser({ name: '', email: '' });
    setShowCreateUser(false);
  };

  const handleStatusUpdate = (id: number, newStatus: string) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: newStatus } : user));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 overflow-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">User Management</h2>
                <button
                  onClick={() => setShowCreateUser(true)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
                >
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create User
                </button>
              </div>
              {showCreateUser && (
                <div className="bg-white p-4 rounded-lg shadow mb-4">
                  <h3 className="text-lg font-semibold mb-2">Create New User</h3>
                  <input
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <button
                    onClick={handleCreateUser}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Create
                  </button>
                </div>
              )}
              <ul className="space-y-4">
                {users.map((user) => (
                  <li key={user.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-8 h-8 text-gray-500 mr-4" />
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <select
                        value={user.status}
                        onChange={(e) => handleStatusUpdate(user.id, e.target.value)}
                        className="mr-4 p-2 border rounded"
                      >
                        <option value="Onboarding">Onboarding</option>
                        <option value="First Draft">First Draft</option>
                        <option value="Recommendation Letters">Recommendation Letters</option>
                        <option value="Incorporation">Incorporation</option>
                      </select>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        Request Docs
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-4 right-4">
        <button className="bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition duration-300">
          <Bell className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;