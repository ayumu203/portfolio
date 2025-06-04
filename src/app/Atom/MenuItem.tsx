// 'use client'

// import React from 'react';

// type Props = {
//   text: string;
//   onClick?: () => void;
//   fontClass?: string;
// };

// export default function MenuItem({ text, onClick, fontClass = '' }: Props) {
//   return (
//     <p
//       onClick={onClick}
//       className={`
//         ${fontClass}
//         text-xl md:text-2xl lg:text-4xl 
//         mb-4 md:mb-8 
//         transition-all duration-200 
//         hover:text-blue-500 
//         cursor-pointer
//       `}
//     >
//       {text}
//     </p>
//   );
// }

'use client' // "use client" はファイルの先頭にある想定です

import React from 'react';

type Props = {
  text: string;
  onClick?: () => void;
  fontClass?: string;
};

export default function MenuItem({ text, onClick, fontClass = '' }: Props) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center        {/* ← 追加: Flexboxを有効にし、アイテムを垂直方向中央揃え */}
        ${fontClass}
        text-xl md:text-2xl lg:text-3xl 
        mb-6 md:mb-10 
        transition-all duration-200 
        hover:text-blue-500 
        cursor-pointer
      `}
    >
      <span className="mr-2 md:mr-3">▼</span> {/* ← 追加: アイコンと右側のマージン */}
      
      <span>{text}</span>
    </div>
  );
}