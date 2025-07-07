"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Homebutton from '../Atom/Button/Homebutton';
import MyFood from '../Module/MyFood';

export default function Food() {
    const images = [
        "/mesi/ittoku.jpg",
        "/mesi/niku.jpg",
        "/mesi/kumamoto.jpeg",
        "/mesi/beer.jpg",
        "/mesi/hukuyama.jpg",
        "/mesi/natural.jpg",
        "/mesi/soup.jpg",
        "/mesi/katuo.jpg",
        "/mesi/sushi.jpg",
        "/mesi/tan.jpg"
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
        <div className="flex flex-col md:flex-row flex-grow min-h-screen"> 
            {/* 画像スライダー部分 */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                {images.map((src, index) => (
                    <Image
                        key={src} 
                        src={src}
                        alt={`Slide ${index + 1}`} 
                        fill
                        className={`
                            object-cover
                            absolute inset-0
                            transition-opacity duration-1000 ease-in-out
                            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
                        `}
                        quality={80}
                        priority={index === 0}
                    />
                ))}
            </div>
            
            {/* コンテンツ部分 */}
            <div className="
                w-full md:w-1/2 
                bg-slate-700
                relative
                p-4 sm:p-6 md:p-0
                flex flex-col
                justify-start
                items-start
                min-h-screen md:min-h-0
            ">
                <div className='
                    absolute 
                    top-3 sm:top-5
                    right-3 sm:right-5'
                >
                    <Homebutton color='text-white focus:ring-white' />
                </div>
                <div className="pt-0">
                    <MyFood />
                </div>
            </div>
        </div>
    );
}