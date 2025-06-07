import React from 'react'
import { useRouter } from 'next/navigation';
import MenuItem from '../Atom/Item/MenuItem';

import { Edu_NSW_ACT_Foundation } from 'next/font/google';

const edu = Edu_NSW_ACT_Foundation({ subsets: ['latin'], weight: '400', display: 'swap' });

export default function MenuPanel() {
    const router = useRouter();

    return (
        <div>
            <div className="">
                <p className={`
                    ${edu.className} 
                    text-6xl
                    mb-5
                `}>
                    Contents
                </p>

                {/* 白線 */}
                 <div className="
                    w-full
                    h-px 
                    bg-white 
                    mb-8
                 "></div>


                <div className="
                    ml-8
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
