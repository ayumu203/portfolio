// "use client";
// import { useRouter } from 'next/navigation';
// import React from 'react'

// export default function Homebutton() {
//     const router = useRouter();

//     return (
//         <div>
//             <button
//                 aria-label="ホームに戻る"
//                 className="text-white p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                 onClick={() => { router.push('/') }}
//             >
//                 <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
//                 </svg>
//             </button>
//         </div>
//     )
// }


"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  color?: string;
};

export default function Homebutton({ color = 'text-white' }: Props) {
    const router = useRouter();

    return (
        <div>
            <button
                aria-label="ホームに戻る"
                className={`
                    ${color} 
                    p-2 
                    rounded-md 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-white
                    hover:bg-white/10
                    active:scale-95
                    transition-all
                    duration-150
                    touch-manipulation
                `}
                onClick={() => { router.push('/') }}
            >
                <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                </svg>
            </button>
        </div>
    );
}