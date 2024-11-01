import React from 'react';

const FeatureSection: React.FC = () => {
    return (
        <section className="text-center py-20 text-white bg-primary">
            <h2 className="text-3xl font-bold mb-10">Bitcoin Fundamentals, New Feature Set</h2>
            <div className="grid md:grid-cols-3 gap-8 px-8">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Feature List Name</h3>
                        <p className="text-sm">Description about this feature with an emphasis on benefits and user impact.</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSection;
