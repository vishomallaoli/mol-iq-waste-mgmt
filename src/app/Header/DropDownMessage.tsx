import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
}

const DropDownMessage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages] = useState<Message[]>([
    { id: 1, sender: 'Albert', content: "That's awesome. I think we are making pretty good progress.", time: '11:46' },
    
  ]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <MessageCircle size={20} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Messages</h3>
            {messages.map((message) => (
              <div key={message.id} className="mb-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <p className="font-semibold">{message.sender}</p>
                <p>{message.content}</p>
                <p className="text-sm text-gray-500">{message.time}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMessage;
