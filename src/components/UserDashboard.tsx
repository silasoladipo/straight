import React, { useState } from 'react';
import { CheckCircle, Clock, Upload, Bell } from 'lucide-react';

type Status = 'Onboarding' | 'First Draft' | 'Recommendation Letters' | 'Incorporation';

const UserDashboard: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState<Status>('Onboarding');
  const [documents, setDocuments] = useState([
    { name: 'Resume', due: '2024-04-01', uploaded: false },
    { name: 'Cover Letter', due: '2024-04-05', uploaded: false },
    { name: 'Recommendation Letter 1', due: '2024-04-10', uploaded: false },
  ]);

  const handleUpload = (index: number) => {
    const newDocuments = [...documents];
    newDocuments[index].uploaded = true;
    setDocuments(newDocuments);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
              <h2 className="text-2xl font-semibold mb-4">Application Status</h2>
              <div className="flex items-center mb-8">
                {['Onboarding', 'First Draft', 'Recommendation Letters', 'Incorporation'].map((status, index) => (
                  <React.Fragment key={status}>
                    <div className={`flex items-center ${currentStatus === status ? 'text-blue-600' : 'text-gray-400'}`}>
                      <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-blue-600 flex items-center justify-center">
                        {currentStatus === status ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <Clock className="w-6 h-6" />
                        )}
                      </div>
                      <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase">
                        {status}
                      </div>
                    </div>
                    {index < 3 && (
                      <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                        index < ['Onboarding', 'First Draft', 'Recommendation Letters', 'Incorporation'].indexOf(currentStatus)
                          ? 'border-blue-600'
                          : 'border-gray-300'
                      }`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <h2 className="text-2xl font-semibold mb-4">Document Uploads</h2>
              <ul className="space-y-4">
                {documents.map((doc, index) => (
                  <li key={doc.name} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                    <div>
                      <p className="font-semibold">{doc.name}</p>
                      <p className="text-sm text-gray-500">Due: {doc.due}</p>
                    </div>
                    {doc.uploaded ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <button
                        onClick={() => handleUpload(index)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          <Bell className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;