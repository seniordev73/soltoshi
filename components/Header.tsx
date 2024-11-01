import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-6 bg-primary text-white">
            <div className="flex items-center space-x-3">
                <img src="logo.svg" alt="logo" className="w-8 h-8" />
                <span className="text-3xl font-inter text-[25px] leading-[16px] font-normal">SOLtoshi</span>
            </div>
            <nav className="space-x-6">
                <a href="#" className="hover:text-accent">Home</a>
                <a href="#" className="hover:text-accent">About</a>
                <a href="#" className="hover:text-accent">How It Works</a>
                <a href="#" className="hover:text-accent">Miners</a>
                <a href="#" className="hover:text-accent">Affiliate Program</a>
                <a href="#" className="hover:text-accent">Contact</a>
            </nav>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-900 font-inter text-[11px] leading-[16px] font-normal rounded-full shadow-lg hover:bg-gray-100">
                <span>Connect Wallet</span>
                <img src="svg/wallet.svg" alt="Wallet Icon" className="w-5 h-5" />
            </button>
        </header>
    );
};

export default Header;
