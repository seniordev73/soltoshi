import React from 'react';

const CommunitySection: React.FC = () => {
    return (
        <section className="text-center py-20 bg-secondary text-white">
            <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="mb-10">Become a part of the SOLTS community and connect with other enthusiasts.</p>
            <button className="bg-accent px-6 py-3 rounded text-black font-semibold">Join Now</button>
            <div className="mt-10 grid grid-cols-3 gap-4">
                {/* Circular elements here */}
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                        <p className="text-xs">Community Tag</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CommunitySection;
