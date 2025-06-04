import React from 'react';
import Header from '../Components/Header';
import Introduction from '../Components/Introduction';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Introduction />
    </div>
  );
}