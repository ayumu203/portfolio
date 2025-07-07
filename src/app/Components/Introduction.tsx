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
                min-h-96 md:min-h-0
                p-4 sm:p-6 md:p-0
            ">
                <div className='
                    absolute
                    top-3 sm:top-5
                    right-3 sm:right-5
                '>
                    <Homebutton />
                </div>

                <MyIntroduction className='
                    pt-12 sm:pt-10 md:absolute md:top-10 md:left-5
                    w-full md:w-auto
                    px-0 md:px-0
                ' />
            </div>
        </div>
    );
}