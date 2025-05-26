"use client"
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';

export default function Home() {
  return (
        <div className="min-h-screen bg-[#FAFAFA]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      <Navbar />
      <Hero />
      <Features/>
      <Footer />
    </div>
  );
}
