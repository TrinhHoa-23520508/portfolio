import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import DeveloperTerminal from "./DeveloperTermianl";
import type { DeveloperProfile } from "@/types/type";
import { ThemeColor } from "@/utils/ColorsConstant";
import { useTranslation } from "react-i18next";
import { MdDownload } from "react-icons/md";

const HeroSection = () => {
    const [wave, setWave] = useState(false);
    const { t } = useTranslation()
    const developer: DeveloperProfile = {
        name: 'Trịnh Hòa',
        skills: ['React', 'Redux', 'ReactNative', 'Java Spring', 'NestJS', 'NoSQL', 'SQL', 'Docker'],
        hardWorker: true,
        quickLearner: true,
        problemSolver: true,
        hireable: function () {
            return (
                this.hardWorker &&
                this.problemSolver &&
                this.skills.length >= 5
            );
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setWave(true);
            setTimeout(() => setWave(false), 1500);
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    const handleDownloadResumePdf = () => {
        const link = document.createElement("a");
        link.href = "/Resume.pdf";
        link.download = "Resume.pdf";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <section className={`flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-40 py-16 text-white`}>
            {/* Left Content */}
            <div className="space-y-4 max-w-xl">
                <div className="flex items-center text-2xl font-bold">
                    <span className="text-black dark:text-white">Hi There!</span>
                    <motion.span
                        className="ml-2 inline-block origin-bottom"
                        animate={wave ? { rotate: [0, 30, -10, 20, 0] } : {}}
                        transition={{ duration: 1.5 }}
                    >
                        👋
                    </motion.span>
                </div>

                <h1 className="text-4xl text-black font-bold dark:text-white">
                    I'M{" "}
                    <span className="text-sky-400 dark:text-pink-500">
                        {t('name')}
                    </span>
                </h1>


                <TypeAnimation
                    sequence={[
                        "Open source contributor", 1000,
                        "Software Developer", 1000,
                        "FreeLancer", 1000,
                        "MERN Stack Developer", 1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-black dark:text-green-400 font-semibold text-2xl inline-block"
                    repeat={Infinity}
                />



                {/* Social icons */}
                <div className="flex gap-4 mt-4 text-sky-500 dark:text-pink-400 text-2xl">
                    <a href="https://www.facebook.com/trinh.hoa.900085" className="cursor-pointer hover:text-sky-300 dark:hover:text-pink-300 ">
                        <FaFacebook />
                    </a>
                    <a href="https://github.com/TrinhHoa-23520508" className="cursor-pointer hover:text-sky-300 dark:hover:text-pink-300 ">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/h%C3%B2a-tr%E1%BB%8Bnh-521049301/" className="cursor-pointer hover:text-sky-300 dark:hover:text-pink-300 ">
                        <FaLinkedin />
                    </a>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <button className="px-6 py-3 border rounded-full border-blue-500 dark:border-pink-400 hover:bg-blue-500 dark:hover:bg-pink-300 transition
                        text-black dark:text-white">
                        {t('mySkill')} 🔥
                    </button>
                    <button className="flex justify-center items-center px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 text-black transition"
                        onClick={handleDownloadResumePdf}>
                        {t('getResume')}
                        <MdDownload className="mx-2" />
                    </button>
                </div>
            </div>

            {/* Right content: code block */}
            <DeveloperTerminal developer={developer} />
        </section>
    );
}

export default HeroSection;