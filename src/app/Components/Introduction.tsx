"use client";
import Image from 'next/image';
import React from 'react';
import MyIntroduction from '../Module/MyIntroduction';
import Homebutton from '../Atom/Button/Homebutton';
export default function Introduction() {

    return (
        <div className="flex flex-col md:flex-row flex-grow">
            {/* 画像部分 */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <Image
                    src="/me.jpg"
                    alt="me deck view"
                    fill
                    className="object-cover"
                    quality={80}
                    style={{ objectPosition: 'right center' }}
                    priority
                />
            </div>

            {/* コンテンツ部分 */}
            <div className="
                w-full md:w-1/2 
                text-white
                relative
                bg-slate-900
                min-h-screen md:min-h-0
                pt-6 sm:pt-8 md:pt-[5vh]
                pb-4 sm:pb-6 md:pb-10
                px-4 sm:px-6 md:px-10
                flex flex-col
                justify-start
                items-start
            ">
                <div className='
                    absolute
                    top-6 sm:top-8 md:top-[5vh]
                    right-3 sm:right-5
                '>
                    <Homebutton />
                </div>

                <MyIntroduction className='
                    pt-0
                    w-full
                ' />
            </div>
        </div>
    );
}