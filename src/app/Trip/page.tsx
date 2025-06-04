import React from 'react';
import Header from '../Components/Header';
import Trip from '../Components/Trip';

export default function Home() {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Header />
            <Trip />
        </div>
    );
}