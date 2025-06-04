import React from 'react';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Introduction from '../Components/Introduction';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Introduction />
    </div>
  );
}