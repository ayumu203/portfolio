import React from 'react'
import { useRouter } from 'next/navigation';
import MenuItem from '../Atom/Item/MenuItem';

import { Edu_NSW_ACT_Foundation } from 'next/font/google';

const edu = Edu_NSW_ACT_Foundation({ subsets: ['latin'], weight: '400', display: 'swap' });

export default function MenuPanel() {
    const router = useRouter();

    return (
        <div className="w-full">
            <div className="">
                <p className={`
                    ${edu.className} 
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                    mb-3 sm:mb-4 md:mb-5
                `}>
                    Contents
                </p>

                {/* 白線 */}
                 <div className="
                    w-full
                    h-px 
                    bg-white 
                    mb-4 sm:mb-6 md:mb-8
                 "></div>


                <div className="
                    ml-4 sm:ml-6 md:ml-8
                    space-y-2 sm:space-y-3 md:space-y-4
                ">
                    <MenuItem
                        text="Self Introduction"
                        fontClass={edu.className}
                        onClick={() => {
                            router.push('/Introduction');
                        }}
                    />
                    <MenuItem 
                        text="Product" 
                        fontClass={edu.className} 
                        onClick={() => {
                            router.push('/Product');
                        }}
                    />
                    <MenuItem 
                        text="Travel" 
                        fontClass={edu.className}
                        onClick={() => {
                            router.push('/Trip');
                        }}    
                    />
                    <MenuItem 
                        text="Food" 
                        fontClass={edu.className}
                        onClick={() => {
                            router.push('/Food');
                        }}  
                    />
                </div>
            </div>
        </div>
    )
}
