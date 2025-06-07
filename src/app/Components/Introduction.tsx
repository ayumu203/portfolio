"use client";
import Image from 'next/image';
import React from 'react';
import MyIntroduction from '../Module/MyIntroduction';
import Homebutton from '../Atom/Button/Homebutton';
export default function Introduction() {


    return (
        <div className="flex flex-grow">
            <div className="w-1/2 relative">
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
                <div className="
                    w-1/2 
                    text-white
                    relative
                    bg-slate-900
                "
                    // style={{
                    //     backgroundColor: "#061d33"
                    // }}
                    >
                    <div className='
                        absolute
                        top-5
                        right-5
                    '>
                        <Homebutton />
                    </div>

                    <MyIntroduction className='
                        absolute 
                        top-10 
                        left-5' 
                    />
                </div>
            </>
        </div>
    );
}