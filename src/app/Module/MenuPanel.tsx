import React from 'react'
import { useRouter } from 'next/navigation';
import MenuItem from '../Atom/Item/MenuItem';

import { Edu_NSW_ACT_Foundation } from 'next/font/google';

const edu = Edu_NSW_ACT_Foundation({ subsets: ['latin'], weight: '400', display: 'swap' });

export default function MenuPanel() {
    const router = useRouter();

    return (
        <div className="w-full mt-0 pt-0">
            <div className="mt-0 pt-0">
                <p className={`
                    ${edu.className} 
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                    mb-0.5 sm:mb-1 md:mb-1
                    mt-3 sm:mt-5 md:mt-3 lg:mt-3
                `}>
                    Contents
                </p>

                {/* 白線 */}
                 <div className="
                    w-full
                    h-px 
                    bg-white 
                    mb-1 sm:mb-2 md:mb-2
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
