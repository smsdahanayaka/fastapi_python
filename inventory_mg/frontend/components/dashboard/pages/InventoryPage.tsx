'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Filter, Download, CreditCard as Edit, Trash2, Eye, X, Upload, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Product {
  id: number;
  sku: string;
  name: string;
  category: string;
  stock: number;
  price: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
  description?: string;
  lastUpdated: string;
}

const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [newProduct, setNewProduct] = useState({
    name: '',
    sku: '',
    category: '',
    stock: '',
    price: '',
    description: '',
    image: ''
  });

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      sku: 'WH-001',
      name: 'Wireless Headphones Pro',
      category: 'Electronics',
      stock: 45,
      price: 129.99,
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop',
      description: 'High-quality wireless headphones with noise cancellation',
      lastUpdated: '2025-01-15'
    },
    {
      id: 2,
      sku: 'BS-002',
      name: 'Bluetooth Speaker',
      category: 'Electronics',
      stock: 3,
      price: 79.99,
      status: 'Low Stock',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop',
      description: 'Portable bluetooth speaker with 12-hour battery life',
      lastUpdated: '2025-01-14'
    },
    {
      id: 3,
      sku: 'PC-003',
      name: 'Phone Case Premium',
      category: 'Accessories',
      stock: 0,
      price: 24.99,
      status: 'Out of Stock',
      image: 'https://images.unsplash.com/photo-1601275539551-4a2c2e4d3689?w=150&h=150&fit=crop',
      description: 'Premium protective case with wireless charging support',
      lastUpdated: '2025-01-13'
    },
    {
      id: 4,
      sku: 'UC-004',
      name: 'USB-C Cable 2m',
      category: 'Accessories',
      stock: 8,
      price: 19.99,
      status: 'Low Stock',
      image: 'https://images.unsplash.com/photo-1609613142457-5bb31997b5b0?w=150&h=150&fit=crop',
      description: 'High-speed USB-C charging cable, 2 meter length',
      lastUpdated: '2025-01-12'
    },
    {
      id: 5,
      sku: 'LT-005',
      name: 'Gaming Laptop Stand',
      category: 'Accessories',
      stock: 67,
      price: 89.99,
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150&h=150&fit=crop',
      description: 'Adjustable aluminum laptop stand for gaming setups',
      lastUpdated: '2025-01-11'
    }
  ]);

  const categories = ['all', 'Electronics', 'Accessories', 'Clothing', 'Books'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-900/20 text-green-400 border-green-400/20';
      case 'Low Stock':
        return 'bg-yellow-900/20 text-yellow-400 border-yellow-400/20';
      case 'Out of Stock':
        return 'bg-red-900/20 text-red-400 border-red-400/20';
      default:
        return 'bg-gray-900/20 text-gray-400 border-gray-400/20';
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleAddProduct = () => {
    const product: Product = {
      id: products.length + 1,
      sku: newProduct.sku,
      name: newProduct.name,
      category: newProduct.category,
      stock: parseInt(newProduct.stock),
      price: parseFloat(newProduct.price),
      status: parseInt(newProduct.stock) > 20 ? 'In Stock' : parseInt(newProduct.stock) > 0 ? 'Low Stock' : 'Out of Stock',
      image: newProduct.image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop',
      description: newProduct.description,
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    setProducts([...products, product]);
    setNewProduct({ name: '', sku: '', category: '', stock: '', price: '', description: '', image: '' });
    setShowAddDialog(false);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setShowViewDialog(true);
  };

  const exportToCSV = () => {
    const headers = ['SKU', 'Name', 'Category', 'Stock', 'Price', 'Status'];
    const csvContent = [
      headers.join(','),
      ...filteredProducts.map(product => [
        product.sku,
        `"${product.name}"`,
        product.category,
        product.stock,
        product.price,
        product.status
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inventory.csv';
    a.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Inventory Management</h1>
          <p className="text-gray-400">Manage your products and track stock levels</p>
        </div>
        
        <div className="flex space-x-3">
          <Button
            onClick={exportToCSV}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
          
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 border-gray-700 text-white">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Create a new product in your inventory
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Product Name</Label>
                  <Input
                    id="name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Enter product name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="sku" className="text-gray-300">SKU</Label>
                  <Input
                    id="sku"
                    value={newProduct.sku}
                    onChange={(e) => setNewProduct({...newProduct, sku: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Enter SKU"
                  />
                </div>
                
                <div>
                  <Label htmlFor="category" className="text-gray-300">Category</Label>
                  <Select value={newProduct.category} onValueChange={(value) => setNewProduct({...newProduct, category: value})}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      {categories.filter(cat => cat !== 'all').map(category => (
                        <SelectItem key={category} value={category} className="text-white hover:bg-gray-600">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="stock" className="text-gray-300">Stock Quantity</Label>
                  <Input
                    id="stock"
                    type="number"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Enter stock quantity"
                  />
                </div>
                
                <div className="col-span-2">
                  <Label htmlFor="price" className="text-gray-300">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Enter price"
                  />
                </div>
                
                <div className="col-span-2">
                  <Label htmlFor="description" className="text-gray-300">Description</Label>
                  <Textarea
                    id="description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Enter product description"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setShowAddDialog(false)} className="border-gray-600 text-gray-300">
                  Cancel
                </Button>
                <Button onClick={handleAddProduct} className="bg-blue-600 hover:bg-blue-700">
                  Add Product
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white pl-10"
                />
              </div>
            </div>
            
            <div className="w-full md:w-48">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  {categories.map(category => (
                    <SelectItem key={category} value={category} className="text-white hover:bg-gray-600">
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {paginatedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-white font-semibold">{product.name}</h3>
                        <p className="text-gray-400 text-sm">SKU: {product.sku}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(product.status)}>
                      {product.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white">{product.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Stock:</span>
                      <span className={`${product.stock > 20 ? 'text-green-400' : product.stock > 0 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {product.stock} units
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-semibold">${product.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleViewProduct(product)}
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDeleteProduct(product.id)}
                      className="border-red-600 text-red-400 hover:bg-red-900/20"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? "bg-blue-600 hover:bg-blue-700" : "border-gray-600 text-gray-300 hover:bg-gray-700"}
            >
              {page}
            </Button>
          ))}
        </div>
      )}

      {/* View Product Dialog */}
      <Dialog open={showViewDialog} onOpenChange={setShowViewDialog}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-3">
                  <Package className="h-6 w-6 text-blue-400" />
                  Product Details
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-48 rounded-lg object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedProduct.name}</h3>
                    <Badge className={getStatusColor(selectedProduct.status)}>
                      {selectedProduct.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">SKU:</span>
                      <span className="text-white font-medium">{selectedProduct.sku}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white">{selectedProduct.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stock:</span>
                      <span className={`font-medium ${selectedProduct.stock > 20 ? 'text-green-400' : selectedProduct.stock > 0 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {selectedProduct.stock} units
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-bold text-lg">${selectedProduct.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Updated:</span>
                      <span className="text-white">{selectedProduct.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {selectedProduct.description && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                  <p className="text-gray-300">{selectedProduct.description}</p>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InventoryPage;