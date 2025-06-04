import React from 'react'

type Prop = {
    menuMode: boolean;
    setMenuMode: (menuMode: boolean) => void;
}

export default function Hamburger(prop: Prop) {
    const toggleMenu = () => {
        prop.setMenuMode(!prop.menuMode);
    };

    return (
        <button
            aria-label="メニューを開く"
            className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            onClick={toggleMenu}
        >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

    )
}
