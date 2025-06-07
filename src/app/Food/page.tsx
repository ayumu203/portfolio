import React from 'react';
import Header from '../Components/Header';
import Food from '../Components/Food';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header bgColor='bg-amber-800' />
      <Food />
    </div>
  )
  }