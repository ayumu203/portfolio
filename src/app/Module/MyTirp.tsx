import React from 'react';
import { Shippori_Mincho_B1 } from 'next/font/google';
import TripItem from '../Atom/Item/TripItem';


const shippori_Mincho = Shippori_Mincho_B1({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
});

export default function MyTrip() {
    const text = "旅行が一番の趣味だと思っており, 電車や船での旅行によく行っています." +
                "電車や船からの景色を眺めてぼーっとするのが好きで, 4, 5時間くらい電車に乗っていても割と苦ではないです.\n" +
                "高校や大学の友人と旅行に行くことが多いです." +
                "ただ一人旅も雑に動くことができるので好きです." +
                "昔一度一人で浜松から名古屋や松本, 甲府, 静岡を回って浜松に戻って来る旅行をしましたが, 非常に楽しかったです\n" + 
                "観光地で景観を楽しんだり, 食べ歩きをするのも楽しいですが," +
                "街や住宅地といった人々の生活が感じられる場所の町並みや店を眺めながら散歩をするのが好きです." +
                "旅先では美味しいものを食べたいと考えていて, その土地の名物や地元の定食屋によることが多いです." ;
    return (
        <div
            className={`
                    ${shippori_Mincho.className}
                    w-full max-w-2xl
                    text-gray-200
                    text-sm sm:text-base md:text-lg lg:text-xl
                    space-y-4
                    absolute 
                    top-10 
                    left-5
                `}
        >
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 sm:mb-8 md:mb-10">旅行</p>

            {/* 白線 */}
            <div className="
                    w-full
                    h-px 
                    bg-white 
                    mb-10
                 "></div>

                <div className='space-y-4 sm:space-y-5 md:space-y-6'>
                    {text.split('\n').map((sentence, index) => (
                        sentence.trim() && (
                            <TripItem key={index} text={sentence.trim() + '\n'} />
                        )
                    ))}
                </div>

        </div>
    );
}