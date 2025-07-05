import { ThemeColor } from "@/utils/ColorsConstant";
import { useState } from "react";

const AboutSection = () => {
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });

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
        <section className={`flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-40 ${ThemeColor.background} gap-10`}>
            <div className="text-white max-w-xl text-center md:text-left">
                <h2 className="text-3xl font-bold text-pink-500">
                    GIỚI THIỆU <span className="text-white">BẢN THÂN</span>
                </h2>
                <p className="mt-4">Yêu đơn phương lập trình và tôi tin rằng mình đã học hỏi được ít nhiều điều gì đó. 🧑‍💻</p>
                <p className="mt-2">Tôi nắm vững các ngôn ngữ như <em className="text-pink-400 font-semibold">Java</em> và <em className="text-pink-400 font-semibold">Javascript</em>.</p>
                <p className="mt-2">Quan tâm đến <span className="text-pink-400 font-semibold">công nghệ web mới và các sản phẩm liên quan</span>.</p>
                <p className="mt-2">Tôi phát triển sản phẩm bằng <strong className="text-pink-400">Java Spring</strong> và <strong className="text-pink-400">Node.js</strong>.</p>
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
                    GIỚI THIỆU
                </div>
            </div>
        </section>


    );
};

export default AboutSection;