import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white p-8 text-center">
            <p>&copy; 2024 SOLtoshi. All rights reserved.</p>
            <div className="mt-4">
                <a href="#" className="hover:text-accent mx-2">Twitter</a>
                <a href="#" className="hover:text-accent mx-2">Discord</a>
                <a href="#" className="hover:text-accent mx-2">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
