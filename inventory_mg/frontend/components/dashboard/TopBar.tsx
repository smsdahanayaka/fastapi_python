'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  ChevronDown,
  User,
  Settings,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

interface TopBarProps {
  onToggleSidebar: () => void;
  user: any;
  sidebarOpen: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ onToggleSidebar, user, sidebarOpen }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const notifications = [
    { id: 1, title: 'Low Stock Alert', message: 'Product XYZ is running low', time: '2m ago' },
    { id: 2, title: 'New Order', message: 'Order #12345 received', time: '5m ago' },
    { id: 3, title: 'System Update', message: 'Scheduled maintenance tonight', time: '1h ago' }
  ];

  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search products, orders..."
              className="bg-gray-700 border-gray-600 text-white pl-10 w-64"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-300 hover:text-white hover:bg-gray-700"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Notifications */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-gray-300 hover:text-white hover:bg-gray-700 relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-12 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50"
                >
                  <div className="p-4 border-b border-gray-700">
                    <h3 className="text-white font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 border-b border-gray-700 hover:bg-gray-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-white text-sm font-medium">{notification.title}</h4>
                            <p className="text-gray-300 text-xs mt-1">{notification.message}</p>
                          </div>
                          <span className="text-gray-400 text-xs">{notification.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-3 text-gray-300 hover:text-white"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="text-sm font-medium">{user.name}</div>
                <div className="text-xs text-gray-400">{user.role}</div>
              </div>
              <ChevronDown className="h-4 w-4" />
            </button>

            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-12 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50"
                >
                  <div className="py-2">
                    <button className="w-full flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                      <User className="h-4 w-4 mr-3" />
                      Profile
                    </button>
                    <button className="w-full flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                      <Settings className="h-4 w-4 mr-3" />
                      Settings
                    </button>
                    <hr className="border-gray-700 my-2" />
                    <Link href="/" className="w-full flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                      <LogOut className="h-4 w-4 mr-3" />
                      Logout
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;