'use client';

import Image from 'next/image';

const HeroSection = () => {
    const email = "ajaykumarmkaju@gmail.com";

    return (
        <div className="text-center h-[100vh] flex flex-col justify-between py-8 px-8 max-w-[1024px] m-auto">
            <div className="">
                <div className="mb-8 md:mb-4">
                <div className="">KERALA, INDIA 🇮🇳 </div>
                <div className="text-[var(--color-secondary)]"
                >{email}</div>
                </div>
                <h1 className="uppercase text-6xl md:text-8xl font-bold">Ajay Kumar</h1>
            </div>
            <div className="w-full flex justify-center items-center">
                <Image 
                    alt="Profile Image"
                    src="/profile.jpg"
                    width={160}
                    height={160}
                    className="rounded-full sm:w-[200px] sm:h-[200px] md:w-[180px] md:h-[180px] xl:w-[300px] xl:h-[300px]"
                />
            </div>
            <h3 className="uppercase text-4xl sm:text-6xl md:text-9xl font-bold text-[var(--color-secondary)] mb-[40px]">Software Engineer</h3>
        </div>
    )
}

export default HeroSection;