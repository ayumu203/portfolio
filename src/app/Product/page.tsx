import React from 'react';
import Header from '../Components/Header';
import Product from '../Components/Product';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header bgColor='bg-black' textColor='text-red-500' />
      <Product />
    </div>
  );
}