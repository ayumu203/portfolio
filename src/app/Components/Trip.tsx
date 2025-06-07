"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import MyTrip from '../Module/MyTirp';
import Homebutton from '../Atom/Button/Homebutton';

export default function Trip() {
    const images = [
        "/trip/makurazaki.jpg",
        "/trip/nakatugawa.jpg",
        "/trip/abasiri.jpg",
        "/trip/pengin.jpg",
        "/trip/field.jpg",
        "/trip/kumamoto.jpg",
        "/trip/misen.jpg",
        "/trip/sakurajima.jpg",
        "/trip/gake.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % images.length
            );
        }, 3000); 

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
            
            <div className="
                w-1/2 
                bg-black 
                relative
                " 
            style={{
                backgroundColor: "#330016"
            }}>
                <div className='
                    absolute 
                    top-5 
                    right-5'
                >
                    <Homebutton />
                </div>
                <MyTrip />
            </div>
        </div>
    );
}