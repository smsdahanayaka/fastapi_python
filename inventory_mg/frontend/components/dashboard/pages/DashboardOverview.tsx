'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Package, ShoppingCart, Users, TriangleAlert as AlertTriangle, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardOverview = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$24,500',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign
    },
    {
      title: 'Total Products',
      value: '1,247',
      change: '+3.2%',
      changeType: 'positive',
      icon: Package
    },
    {
      title: 'Total Orders',
      value: '342',
      change: '+8.1%',
      changeType: 'positive',
      icon: ShoppingCart
    },
    {
      title: 'Low Stock Items',
      value: '23',
      change: '-5.4%',
      changeType: 'negative',
      icon: AlertTriangle
    }
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Smith', amount: '$234.50', status: 'Completed', date: '2025-01-15' },
    { id: '#ORD-002', customer: 'Sarah Johnson', amount: '$567.80', status: 'Processing', date: '2025-01-15' },
    { id: '#ORD-003', customer: 'Mike Davis', amount: '$123.45', status: 'Shipped', date: '2025-01-14' },
    { id: '#ORD-004', customer: 'Emily Brown', amount: '$789.12', status: 'Pending', date: '2025-01-14' }
  ];

  const lowStockItems = [
    { name: 'Wireless Headphones', sku: 'WH-001', stock: 5, threshold: 20 },
    { name: 'Bluetooth Speaker', sku: 'BS-002', stock: 3, threshold: 15 },
    { name: 'Phone Case', sku: 'PC-003', stock: 2, threshold: 10 },
    { name: 'USB Cable', sku: 'UC-004', stock: 8, threshold: 25 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-400 bg-green-900/20';
      case 'Processing':
        return 'text-yellow-400 bg-yellow-900/20';
      case 'Shipped':
        return 'text-blue-400 bg-blue-900/20';
      case 'Pending':
        return 'text-orange-400 bg-orange-900/20';
      default:
        return 'text-gray-400 bg-gray-900/20';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className={`text-xs ${stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Orders</CardTitle>
              <CardDescription className="text-gray-400">
                Latest customer orders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">{order.id}</span>
                        <span className="text-gray-300 text-sm">{order.date}</span>
                      </div>
                      <div className="text-gray-400 text-sm">{order.customer}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{order.amount}</div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Low Stock Alert */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
                Low Stock Alert
              </CardTitle>
              <CardDescription className="text-gray-400">
                Items that need restocking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lowStockItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                    <div className="flex-1">
                      <div className="text-white font-medium">{item.name}</div>
                      <div className="text-gray-400 text-sm">SKU: {item.sku}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-red-400 font-semibold">{item.stock} left</div>
                      <div className="text-gray-400 text-sm">Min: {item.threshold}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
            <CardDescription className="text-gray-400">
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors">
                Add New Product
              </button>
              <button className="p-4 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors">
                Process Orders
              </button>
              <button className="p-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors">
                Generate Report
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DashboardOverview;