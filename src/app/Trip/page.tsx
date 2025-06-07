import React from 'react';
import Header from '../Components/Header';
import Trip from '../Components/Trip';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen ">
            <Header bgColor="bg-green-900" />
            <Trip />
        </div>
    );
}