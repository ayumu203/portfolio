"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function SlideShow() {
    const images: string[] = ["/field.jpg", "/ship.jpg",];
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [images.length]);


    return (
        <div>
            {images.map((image: string, index: number) => (
                <div
                    key={index}
                    className={`absolute top-[20%] left-[10%] right-auto transition-opacity duration-3500 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={image}
                        alt={`Slide ${index}`}
                        width={500}
                        height={300}
                        objectFit="cover"
                        className="rounded-sm"
                    />
                </div>
            ))}
        </div>

    )
}
