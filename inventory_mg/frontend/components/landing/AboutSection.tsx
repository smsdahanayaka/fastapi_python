'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with 10+ years of experience'
    },
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Quick setup and deployment for immediate results'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Solutions designed to meet your specific business needs'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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
              About Codelink International
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading software solutions provider, dedicated to empowering businesses 
            with cutting-edge technology and innovative solutions that drive growth and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To revolutionize business operations through innovative software solutions 
                that streamline processes, increase productivity, and drive sustainable growth 
                for our clients worldwide.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the global leader in SaaS solutions, empowering businesses of all 
                sizes to achieve their full potential through technology-driven transformation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <feature.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;