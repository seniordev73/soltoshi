// components/MainFeatureSection.tsx
import React from 'react';

const MainFeatureSection: React.FC = () => {
    return (
        <section className="flex justify-center items-center p-20 bg-gradient-to-b from-secondary to-primary text-white"
            style={{
                backgroundImage: "url('image/main-feature.png')",
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
                <div className="relative bg-[#1C2A3E] rounded-lg p-8 flex flex-col items-start text-left">
                    <h3 className="text-2xl font-outfit mb-2"
                        style={{
                            fontSize: '40px',
                            lineHeight: '40px',
                            width: '416px',
                            height: '80px',
                            fontWeight: 500,
                        }}
                    >
                        Get Your <br></br>Crypto Miner</h3>
                    <p className="text-sm mb-6">
                        $SOLTS is a fun way to mine cryptocurrency right from the comfort of your home.
                    </p>
                    <div className="absolute bottom-6 left-6 text-lg font-bold opacity-70">01</div>
                    <div className="absolute -bottom-8 right-6 h-40 w-40 rounded-full overflow-hidden">
                        <img src="/feature1.png" className="object-cover h-full w-full" />
                    </div>
                </div>
                <div className="relative bg-[#1C2A3E] rounded-lg p-8 flex flex-col items-start text-left">
                    <h3 className="text-2xl font-semibold mb-2">Mine Crypto Everywhere</h3>
                    <p className="text-sm mb-6">
                        $SOLTS is a fun way to mine cryptocurrency right from the comfort of your home.
                    </p>
                    <div className="absolute bottom-6 left-6 text-lg font-bold opacity-70">02</div>
                    <div className="absolute -bottom-8 right-6 h-40 w-40 rounded-full overflow-hidden">
                        <img src="/feature2.png" alt="Feature 2" className="object-cover h-full w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainFeatureSection;
