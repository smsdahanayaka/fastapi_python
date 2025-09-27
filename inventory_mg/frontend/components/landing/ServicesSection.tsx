'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, ChartBar as BarChart3, Settings, Cloud, Shield, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: 'Inventory Management SaaS',
      description: 'Complete inventory tracking and management solution with real-time analytics and automated workflows.',
      features: ['Real-time tracking', 'Automated alerts', 'Analytics dashboard', 'Multi-location support'],
      highlight: true
    },
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'Advanced reporting and analytics tools to help you make data-driven decisions for your business.',
      features: ['Custom reports', 'Data visualization', 'Predictive analytics', 'Export capabilities']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern business requirements.',
      features: ['Cloud migration', 'Auto-scaling', 'Backup solutions', '99.9% uptime']
    },
    {
      icon: Shield,
      title: 'Security Services',
      description: 'Comprehensive security solutions to protect your business data and applications.',
      features: ['Data encryption', 'Access control', 'Security audits', 'Compliance support']
    },
    {
      icon: Settings,
      title: 'Custom Development',
      description: 'Tailored software development services to meet your specific business requirements.',
      features: ['Custom applications', 'API integration', 'Legacy modernization', 'Ongoing support']
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance for all our solutions.',
      features: ['Live chat support', 'Phone assistance', 'Remote troubleshooting', 'Knowledge base']
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 relative">
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
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive software solutions designed to transform your business operations 
            and accelerate your growth in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                service.highlight ? 'border-2 border-blue-400' : ''
              }`}
            >
              <div className="relative">
                {service.highlight && (
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                
                <service.icon className={`h-12 w-12 mb-6 ${service.highlight ? 'text-blue-400' : 'text-purple-400'}`} />
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {service.highlight && (
                  <Button
                    onClick={() => scrollToSection('packages')}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    View Packages
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;