'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PackagesSection = () => {
  const packages = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with inventory management',
      features: [
        'Up to 1,000 products',
        'Basic reporting',
        'Email support',
        'Single location',
        'Mobile app access',
        '5 user accounts'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses with advanced inventory needs',
      features: [
        'Up to 10,000 products',
        'Advanced analytics',
        'Priority support',
        'Multi-location support',
        'API access',
        '25 user accounts',
        'Custom integrations',
        'Automated workflows'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$149',
      period: '/month',
      description: 'Enterprise-grade solution for large-scale operations',
      features: [
        'Unlimited products',
        'Enterprise analytics',
        '24/7 phone support',
        'Unlimited locations',
        'White-label solution',
        'Unlimited users',
        'Advanced integrations',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing plans designed to scale with your business. 
            Start with what you need today and upgrade as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                pkg.popular ? 'border-2 border-blue-400 relative' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400 ml-2">{pkg.period}</span>
                </div>
                <p className="text-gray-300 text-sm">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/auth/signup" className="block">
                <Button
                  className={`w-full py-3 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">All plans include a 14-day free trial • No setup fees • Cancel anytime</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>💳 All major cards accepted</span>
            <span>🔒 SSL secured</span>
            <span>💰 30-day money back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;