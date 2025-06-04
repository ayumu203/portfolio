"use client";
import Image from 'next/image';
import React from 'react';
import MyIntroduction from '../Module/MyIntroduction';
export default function Introduction() {

    return (
        <div className="flex flex-grow">
            <div className="w-1/4 relative">
                <Image
                    src="/me.jpg"
                    alt="me deck view"
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                    style={{ objectPosition: 'right center' }} 
                />
            </div>

            <>            
                <div className="w-3/4 bg-green-700 p-6 md:p-10 flex flex-col justify-center items-start text-white">
                    <MyIntroduction />
                </div>
            </>
        </div>
    );
}