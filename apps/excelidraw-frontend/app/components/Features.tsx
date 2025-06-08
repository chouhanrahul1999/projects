import React from 'react';
import { Square, Users, Lock, Cloud, Drama as Draw, Zap, Palette, Share2 } from 'lucide-react';

const features = [
  {
    title: 'Intuitive Drawing Tools',
    description: 'Create shapes, lines, and freeform drawings with our easy-to-use toolset designed for both beginners and professionals.',
    icon: Draw,
    delay: '100'
  },
  {
    title: 'Real-time Collaboration',
    description: 'Work together with your team in real-time, seeing changes instantly as they happen.',
    icon: Users,
    delay: '200'
  },
  {
    title: 'Secure by Design',
    description: 'Your data stays private with end-to-end encryption and secure storage options.',
    icon: Lock,
    delay: '300'
  },
  {
    title: 'Cloud Sync',
    description: 'Access your diagrams from anywhere with automatic cloud synchronization.',
    icon: Cloud,
    delay: '400'
  },
  {
    title: 'Performance Optimized',
    description: 'Enjoy smooth drawing experience even with complex diagrams and multiple collaborators.',
    icon: Zap,
    delay: '500'
  },
  {
    title: 'Beautiful Styling Options',
    description: 'Customize colors, line styles, and more to create diagrams that match your aesthetic.',
    icon: Palette,
    delay: '600'
  },
  {
    title: 'Export & Share',
    description: 'Export your work in multiple formats or share with a simple link.',
    icon: Share2,
    delay: '700'
  },
  {
    title: 'Infinite Canvas',
    description: 'Never run out of space with our infinitely expandable drawing area.',
    icon: Square,
    delay: '800'
  }
];

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: string;
};

type FeatureCardProps = {
  feature: Feature;
  index: number;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-indigo-200 border border-transparent"
      data-aos="fade-up"
      data-aos-delay={feature.delay}
    >
      <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
    
  );
};

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features, Simple Interface</h2>
          <p className="text-xl text-gray-600">
            Everything you need to bring your ideas to life without the complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;