import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center text-center p-20 text-white bg-cover bg-center bg-no-repeat h-full w-full">
            <div className="absolute inset-0 h-full w-full -z-10">
                <img
                    src="image/herosection.png"
                    alt="Background"
                    className="object-cover h-full w-full"
                />
            </div>
            <div className="bg-opacity-10 text-sm px-4 py-1 rounded-lg text-white mb-4 border-white border">
                SOLtoshi Powered by Solana Network
            </div>
            <h1
                className="font-outfit font-medium text-center text-white animate-fadeIn mt-5"
                style={{
                    fontSize: '96px',
                    lineHeight: '96px',
                    letterSpacing: '-0.02em',
                    width: '686px',
                    height: '192px',
                }}
            >
                Welcome To SOLtoshi
            </h1>
            <p className="text-lg mt-10 max-w-xl font-inter"
                style={{
                    fontSize: '18px',
                    lineHeight: '25.2px',
                    width: '452px',
                    height: '76px',
                }}
            >
                A mining game influenced by the great Satoshi Nakamoto aka the creator of Bitcoin.
            </p>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-900 font-inter text-[16px] leading-[20px] font-normal rounded-full shadow-lg hover:bg-gray-100 mt-40">
                <span>Start Mining</span>
                <img src="svg/diamond.svg" alt="Wallet Icon" className="w-5 h-5" />
            </button>
            <p className="text-lg mt-8 mb-16 font-outfit"
                style={{
                    fontSize: '40px',
                    lineHeight: '40px',
                    fontWeight: 500,
                    width: '1000px',
                    height: '36px',
                }}
            ></p>
            <footer className='text-lg'
                style={{
                    fontSize: '40px',
                    lineHeight: '40px',
                    fontWeight: 500,
                    width: '1000px',
                    height: '36px',
                }}
            >
                “$SOLTS is like Bonk, but better.” - Satoshi Nakamoto ;)
            </footer>
        </section>
    );
};

export default HeroSection;
