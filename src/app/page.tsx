import Header from "./Components/Header";
import Main from "./Components/Main";
import React from 'react';

export default function Home() {
  return (
    <div className="
      flex 
      flex-col 
      min-h-screen
    ">
      <Header bgColor="
        bg-rose-400
      "/>
      <Main />
    </div>
  );
}