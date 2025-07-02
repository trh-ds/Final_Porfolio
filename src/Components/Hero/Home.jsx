import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Menu from './Menu';
import About from '../3D_Component/About';

const Portfolio = () => {
    const navRef = useRef(null);
    const photoRef = useRef(null);
    const greetingRef = useRef(null);
    const frontendRef = useRef(null);
    const developerRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        // Split text function that preserves gradient styling
        const splitText = (element) => {
            const text = element.textContent;
            const originalClasses = element.className;
            element.innerHTML = '';
            element.className = originalClasses; // Preserve the original classes

            return text.split('').map((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.display = 'inline-block';
                span.style.backgroundImage = 'inherit';
                span.style.backgroundClip = 'text';
                span.style.webkitBackgroundClip = 'text';
                span.style.color = 'transparent';
                element.appendChild(span);
                return span;
            });
        };

        // Split the text elements
        const frontendLetters = splitText(frontendRef.current);
        const developerLetters = splitText(developerRef.current);

        // Create timeline
        const tl = gsap.timeline();

        // Set initial states
        gsap.set(navRef.current, { y: -100, opacity: 0 });
        gsap.set(photoRef.current, { y: 100, opacity: 0 });
        gsap.set(greetingRef.current, { opacity: 0, y: 20 });
        gsap.set([...frontendLetters, ...developerLetters], { opacity: 0, y: 50, rotationX: -90 });
        gsap.set(descriptionRef.current, { opacity: 0, y: 30 });
        gsap.set(buttonsRef.current, { opacity: 0, y: 30 });

        // Animate navbar and photo simultaneously
        tl.to(navRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        })
            .to(photoRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }, "<") // Start at the same time as navbar

            // Animate greeting
            .to(greetingRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3")

            // Animate FRONTEND letters
            .to(frontendLetters, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "back.out(1.7)"
            }, "-=0.2")

            // Animate DEVELOPER letters
            .to(developerLetters, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "back.out(1.7)"
            }, "-=0.4")

            // Animate description and buttons
            .to(descriptionRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3")
            .to(buttonsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3");

    }, []);
    return (

        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background decoration */}

            <About />
            <Menu />
            {/* Navbar */}
            <nav ref={navRef} className={`relative z-10 p-6 ${window.innerWidth < 450 ? 'hidden' : 'block'} backdrop-blur-lg border-b border-gray-700/50`}>
                <div className="max-w-6xl mx-auto">
                    <div className="backdrop-blur-lg bg-gray-900/30 border border-gray-700/50 rounded-2xl px-8 py-4 shadow-2xl">
                        <div className="flex items-center justify-between">
                            {/* Logo space */}
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center border border-gray-400/30">
                                <span className="text-sm font-bold text-white">Logo</span>
                            </div>

                            {/* Navigation links */}
                            <div className="flex space-x-8">
                                <button className="px-6 py-2 text-gray-100 hover:text-white hover:bg-gray-700/30 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-400/30">
                                    Home
                                </button>
                                <button className="px-6 py-2 text-gray-100 hover:text-white hover:bg-gray-700/30 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-400/30">
                                    Skills
                                </button>
                                <button className="px-6 py-2 text-gray-100 hover:text-white hover:bg-gray-700/30 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-400/30">
                                    About
                                </button>
                                <button className="px-6 py-2 text-gray-100 hover:text-white hover:bg-gray-700/30 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-400/30">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className={`${window.innerWidth < 450 ? "relative z-10 px-6 py-20" : "relative z-10 px-6 py-20"}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text content */}
                        <div className="space-y-6">
                            <p ref={greetingRef} className="text-gray-300 text-lg font-light tracking-wide">
                                hello there, welcome to my portfolio
                            </p>

                            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                                <span ref={frontendRef} className="bg-gradient-to-r from-gray-400 via-white to-gray-300 bg-clip-text text-transparent block font-bebas">
                                    FRONTEND
                                </span>
                                <span ref={developerRef} className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent block font-bebas">
                                    DEVELOPER
                                </span>
                            </h1>

                            <p ref={descriptionRef} className="text-gray-200 text-lg max-w-md leading-relaxed">
                                Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
                            </p>

                            <div ref={buttonsRef} className="flex gap-4 pt-6">
                                <button className="px-8 py-3 bg-gradient-to-bl from-pink-800 via-purple-800 to-red-800 hover:from-rose-700 hover:via-purple-700 hover:to-red-700 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-rose-500/25">
                                    View Work
                                </button>
                                <button className="px-8 py-3 border border-rose-400/30 hover:bg-gradient-to-r hover:from-rose-900/20 hover:via-purple-900/20 hover:to-red-900/20 rounded-lg font-semibold transition-all duration-300">
                                    Get In Touch
                                </button>
                            </div>
                        </div>

                        {/* Right side - Photo card */}

                    </div>
                </div>
            </main>

            {/* Fade out at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

            {/* Additional bottom spacing */}
            <div className="h-40"></div>
        </div>
    );
};

export default Portfolio;