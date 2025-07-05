import { ThemeColor } from "@/utils/ColorsConstant";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";

const AboutSection = () => {
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });
    const { t } = useTranslation();
    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / centerY) * 15;
        const rotateY = ((x - centerX) / centerX) * 15;

        const translateX = ((x - centerX) / centerX) * 20;
        const translateY = ((y - centerY) / centerY) * 20;

        setTransform({ rotateX, rotateY, translateX, translateY });
    };

    const handleMouseLeave = () => {
        setTransform({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });
    };

    return (
        <section className={`flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-40 gap-10`}>
            <div className="text-white max-w-xl text-center md:text-left">
                <p className="text-black dark:text-white">
                    <Trans i18nKey="aboutSection.title">
                    LET ME <span className="text-pink-500">INTRODUCE</span> MYSELF
                </Trans>
                </p>
                <p className="mt-4 text-black dark:text-white">{t('aboutSection.paragraphs.p1')}</p>
                <p className="mt-2 text-black dark:text-white">
                    <Trans i18nKey="aboutSection.paragraphs.p2">
                        I am fluent in classics like <em className="text-pink-500 font-semibold">Java and Javascript</em>.
                    </Trans>
                </p>
                <p className="mt-2 text-black dark:text-white">
                    <Trans i18nKey="aboutSection.paragraphs.p3">
                        My field of interest's are building new <em className="text-pink-500 font-semibold">Web Technologies and Products</em>
                    </Trans>
                </p>
                <p className="mt-2 text-black dark:text-white">
                    <Trans i18nKey="aboutSection.paragraphs.p4">
                        Whenever possible, I also apply my passion for developing products with <strong className="text-pink-500">Java Spring</strong> and <strong className="text-pink-500">Node.js</strong>
                    </Trans>
                </p>
            </div>

            <div className="flex flex-col items-center relative md:pr-20">
                <div
                    className="w-48 h-48 rounded-full overflow-hidden shadow-xl cursor-pointer transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-pink-500/20"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translateX(${transform.translateX}px) translateY(${transform.translateY}px)`
                    }}
                >
                    <img src="/avatar.svg" alt="avatar" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>

                <div className="absolute -right-14 top-1/2 transform -translate-y-1/2 rotate-90 bg-[#1e293b] text-white px-2 py-1 rounded-md shadow-md text-xl text-center tracking-wider md:w-40">
                    {t('aboutSection.label').toUpperCase()}
                </div>
            </div>
        </section>


    );
};

export default AboutSection;