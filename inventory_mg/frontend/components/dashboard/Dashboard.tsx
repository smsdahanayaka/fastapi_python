'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Mock user data - replace with actual authentication
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar 
        isOpen={sidebarOpen} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        userRole={user.role}
      />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <TopBar 
          onToggleSidebar={toggleSidebar} 
          user={user}
          sidebarOpen={sidebarOpen}
        />
        
        <main className="flex-1 p-6 overflow-auto">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DashboardContent currentPage={currentPage} user={user} />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;