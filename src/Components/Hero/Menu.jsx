import React from 'react'
import { useState } from 'react';
import DecryptedText from '../3D_Component/DecryptedText';
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <div className={`${window.innerWidth < 450 ? 'block' : 'hidden'} relative`}>
            {/* Menu Button - visible when menu is closed */}
            {!isOpen && (
                <div className="px-3 py-5 text-3xl fixed top-0 left-0 z-50" >
                    <i className="ri-menu-line cursor-pointer" onClick={() => setIsOpen(!isOpen)}></i>
                </div>
            )}

            {/* Menu Overlay */}
            <div className={`h-screen w-full bg-black z-40 overflow-hidden fixed top-0 left-0 flex flex-col gap-20 items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                {/* Close Button */}
                <div className="absolute top-5 right-5 text-3xl text-white cursor-pointer z-50" onClick={() => setIsOpen(false)}>
                    <i className="ri-close-line"></i>
                </div>

                <DecryptedText text="Home" className="text-white/80 text-6xl font-extrabold cursor-pointer" speed={100}
                    maxIterations={20}
                    characters="ABCD1234!?"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                    animateOn="hover" />
                <DecryptedText text="About" className="text-white/80 text-6xl font-extrabold cursor-pointer" speed={100}
                    maxIterations={20}
                    characters="ABCD1234!?"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                    animateOn="hover" />
                <DecryptedText text="Projects" className="text-white/80 text-6xl font-extrabold cursor-pointer" speed={100}
                    maxIterations={20}
                    characters="ABCD1234!?"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                    animateOn="hover" />
                <DecryptedText text="Contact" className="text-white/80 text-6xl font-extrabold cursor-pointer" speed={100}
                    maxIterations={20}
                    characters="ABCD1234!?"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                    animateOn="hover" />
            </div>
        </div>
    )
}

export default Menu