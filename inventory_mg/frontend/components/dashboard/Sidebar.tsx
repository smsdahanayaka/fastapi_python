'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Package, ShoppingCart, ChartBar as BarChart3, Users, Settings, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  currentPage: string;
  onPageChange: (page: string) => void;
  userRole: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, currentPage, onPageChange, userRole }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['Admin', 'Manager', 'Staff'] },
    { id: 'inventory', label: 'Inventory', icon: Package, roles: ['Admin', 'Manager', 'Staff'] },
    { id: 'orders', label: 'Orders', icon: ShoppingCart, roles: ['Admin', 'Manager'] },
    { id: 'reports', label: 'Reports', icon: BarChart3, roles: ['Admin', 'Manager'] },
    { id: 'users', label: 'Users & Permissions', icon: Users, roles: ['Admin'] },
    { id: 'profile', label: 'Profile Settings', icon: Settings, roles: ['Admin', 'Manager', 'Staff'] }
  ];

  const visibleMenuItems = menuItems.filter(item => item.roles.includes(userRole));

  return (
    <motion.aside
      initial={false}
      animate={{ width: isOpen ? 256 : 64 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 h-screen bg-gray-800 border-r border-gray-700 z-40"
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center">
            <Zap className="h-8 w-8 text-blue-400 flex-shrink-0" />
            <AnimatePresence>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl font-bold text-white ml-2"
                >
                  Codelink
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {visibleMenuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <AnimatePresence>
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="ml-3 text-sm font-medium"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-gray-500 text-center"
              >
                © 2025 Codelink International
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;