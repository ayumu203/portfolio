"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import MyTrip from '../Module/MyTirp';

export default function Trip() {
    const images = [
        "/abasiri.jpg",
        "/field.jpg",
        "/hashi.jpg",
        "/makurazaki.jpg",
        "/pengin.jpg",
        "/misen.jpg",
        "/kumamoto.jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % images.length
            );
        }, 4000); 

        return () => clearInterval(timer); 
    }, [images.length]); 

    return (
        <div className="flex flex-grow h-screen"> 
            <div className="w-1/2 relative">
                {images.map((src, index) => (
                    <Image
                        key={src} 
                        src={src}
                        alt={`Slide ${index + 1}`} 
                        layout="fill"
                        objectFit="cover"
                        quality={80}
                        style={{ objectPosition: 'right center' }}
                        className={`
                            absolute inset-0
                            transition-opacity duration-1000 ease-in-out
                            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
                        `}
                    />
                ))}
            </div>
            
            <>              
                <div className="w-1/2 bg-green-700 p-6 md:p-10 flex flex-col justify-center items-start text-white">
                    <MyTrip />
                </div>
            </>
        </div>
    );
}