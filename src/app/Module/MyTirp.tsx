import React from 'react';
import Homebutton from '../Atom/Button/Homebutton';
import { Shippori_Mincho_B1 } from 'next/font/google';

const shippori_Mincho = Shippori_Mincho_B1({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
});

export default function MyTrip() {

    return (
        <div>
            <div className="absolute top-4 right-4 md:top-24 md:right-6">
                <Homebutton />
            </div>

            <div 
                className={`
                    ${shippori_Mincho.className}
                    absolute
                    top-45
                    text-white
                    text-xl 
                    leading-relaxed
                    space-y-4
                    md:space-y-5
                    text-gray-800 
                `}
            >
                <p >私の一番の趣味は旅行だと思う。</p>
                <p>主に鉄道や船といった公共交通機関を使って旅行している。</p>
                <p>高校や大学の友人あるいは,一人でのんびり電車に乗ることもある。</p>
                <p>有名な観光地も好きではあるが,都市や住宅地といった人の生活が感じられる場所が好きだ。</p>
                <p>また食事もその土地の名物や地元の定食屋によることも趣がある。</p>
                <p>計画を立てる旅行も好きだが,無鉄砲な旅行でその場その場で自分のしたいことを優先することも旅行の醍醐味だと考える。</p>
            </div>
        </div>
    );
}