"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Noto_Serif_JP } from "next/font/google";

const notoSerif = Noto_Serif_JP({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

type MyProductProps = {
  title: string;
  description: string;
  imagePaths: string[];
  url: string; 
};

export default function MyProduct({ title, description, imagePaths, url }: MyProductProps) {
  const [current, setCurrent] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // 自動スライド
  useEffect(() => {
    if (!isAutoSliding) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imagePaths.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [imagePaths.length, isAutoSliding]);

  // 一時的に自動スライドを停止
  const pauseAutoSlide = () => {
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 8000);
  };

  // 前のスライドに移動
  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + imagePaths.length) % imagePaths.length);
    pauseAutoSlide();
  };

  // 次のスライドに移動
  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % imagePaths.length);
    pauseAutoSlide();
  };

  // タッチイベント処理
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        goToNext(); // 左スワイプで次へ
      } else {
        goToPrevious(); // 右スワイプで前へ
      }
    }
  };

  return (
    <div className="bg-stone-900 px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16">
      {/* レスポンシブレイアウト: モバイルはシングルカラム、デスクトップは2カラム */}
      <div className="flex flex-col lg:flex-row text-white space-y-6 lg:space-y-0 lg:space-x-8">
        
        {/* 左側: タイトルと説明文（モバイルでは上部） */}
        <div className="flex flex-col space-y-6 lg:w-1/2">
          {/* タイトル */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${notoSerif.className} 
              text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl
              text-green-300 
              leading-tight 
              hover:underline
              text-center lg:text-left
              transition-colors
              duration-200
              font-bold
            `}
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            {title}
          </a>

          {/* 説明文 */}
          <div className="lg:block">
            <p className="
              text-xs sm:text-sm md:text-base lg:text-lg
              text-neutral-200 
              leading-relaxed 
              whitespace-pre-line
              text-left
            " 
            style={{ textIndent: "1em" }}>
              {description}
            </p>
          </div>
        </div>

        {/* 右側: 画像スライダー（モバイルでは下部） */}
        <div className="lg:w-1/2 flex justify-end items-start lg:pt-20">
          <div className="relative w-full lg:w-4/5">
            <div 
              className="
                relative 
                w-full 
                aspect-video
                cursor-pointer
                select-none
                overflow-hidden
                rounded-xl
                shadow-lg
              "
              onClick={goToNext}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={imagePaths[current]}
                alt={`slide-${current}`}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority={current === 0}
              />
              
              {/* 操作ヒント */}
              <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-70">
                クリック/スワイプで切り替え
              </div>
            </div>

            {/* ナビゲーションボタン */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="
                absolute left-2 top-1/2 transform -translate-y-1/2
                bg-black/50 hover:bg-black/70
                text-white p-2 rounded-full
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-white/50
              "
              aria-label="前のスライド"
            >
              ‹
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="
                absolute right-2 top-1/2 transform -translate-y-1/2
                bg-black/50 hover:bg-black/70
                text-white p-2 rounded-full
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-white/50
              "
              aria-label="次のスライド"
            >
              ›
            </button>

            {/* インジケーター */}
            <div className="flex justify-center space-x-2 mt-4">
              {imagePaths.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    pauseAutoSlide();
                  }}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-200
                    ${index === current ? 'bg-green-300' : 'bg-white/50 hover:bg-white/70'}
                  `}
                  aria-label={`スライド${index + 1}に移動`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
