'use client';

import React from 'react';
import DashboardOverview from './pages/DashboardOverview';
import InventoryPage from './pages/InventoryPage';
import OrdersPage from './pages/OrdersPage';
import ReportsPage from './pages/ReportsPage';
import UsersPage from './pages/UsersPage';
import ProfilePage from './pages/ProfilePage';

interface DashboardContentProps {
  currentPage: string;
  user: any;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ currentPage, user }) => {
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'inventory':
        return <InventoryPage />;
      case 'orders':
        return <OrdersPage />;
      case 'reports':
        return <ReportsPage />;
      case 'users':
        return <UsersPage />;
      case 'profile':
        return <ProfilePage user={user} />;
      default:
        return <DashboardOverview />;
    }
  };

  return <div className="space-y-6">{renderPage()}</div>;
};

export default DashboardContent;