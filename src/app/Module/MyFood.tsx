import React from 'react';
import { Shippori_Mincho_B1 } from 'next/font/google';
import TripItem from '../Atom/Item/TripItem';


const shippori_Mincho = Shippori_Mincho_B1({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
});

export default function MyFood() {

    return (
        <div
            className={`
                    ${shippori_Mincho.className}
                    w-full max-w-2xl
                    text-stone-700
                    text-xl
                    space-y-4
                    absolute 
                    top-10 
                    left-5
                `}
        >
            <p className="text-6xl font-semibold mb-10">食事</p>

            {/* 白線 */}
            <div className="
                    w-full
                    h-px 
                    mb-10
                 "></div>


                 <TripItem text="私の生きる理由の５０％くらいは食事だと思います." />
                 <TripItem text="家での食事はもちろん外食や旅行先での食事は大きな楽しみです." />
                 <TripItem text="好きなものは脂っこいもの・炭水化物です." />
                 <TripItem text="浜松の美味しいラーメンの2割くらいは知ってる自身があります！！！" />
                 <TripItem text="個人的に人生の中でもトップレベルで美味しかったと思うのは北海道のスープカレー・焼き肉・回転寿司です." />
                 <TripItem text="北海道は食事のレベルが異常に高いと感じました." />
                 <TripItem text="浜松のラーメンだと一凛, ライオン, いっとく, 麺's natural, +N, ラーメン以外だと, からやま・香龍(近所の町中華) あたりが美味しいと思いました." />
                 <TripItem text="(こいつラーメンばっか紹介してんな....)" />

        </div>
    );
}