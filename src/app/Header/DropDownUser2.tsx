import React, { useState } from 'react';
import { Settings, LogOut } from 'lucide-react'; 


interface UserInfo {
  name: string;
  role: string;
  avatar: string;
}

const DropDownUser: React.FC = () => {
  
  const [user] = useState<UserInfo>({
    name: 'Albert Mends',
    role: 'Researcher',
    avatar: '/path-to-avatar.jpg', 
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
        <span>{user.name}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg">
          <div className="p-4">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>
          <hr className="border-gray-200 dark:border-gray-700" />
          <ul>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                <Settings size={16} className="mr-2" /> Settings
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                <LogOut size={16} className="mr-2" /> Log out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownUser;
