import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "./InfiniteScroll";
import { motion } from "framer-motion";
import {
    FaReact, FaNodeJs, FaDocker, FaBootstrap, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaTrello
} from 'react-icons/fa';
import {
    SiNextdotjs, SiRedux, SiReactquery, SiNestjs, SiExpress, SiSpringboot,
    SiPostgresql, SiMysql, SiMongodb, SiFirebase, SiJavascript, SiTypescript,
    SiCplusplus
} from 'react-icons/si';
import type { IItemCarousel } from "@/types/type";

const SkillSection = () => {
    const { theme } = useTheme();
    const { language } = useLanguage();
    const { t } = useTranslation();
    const skills: IItemCarousel[] = [
        // Frontend
        { name: 'React', icon: <FaReact />, description: 'JavaScript Library' },
        { name: 'Next.js', icon: <SiNextdotjs />, description: 'React Framework' },
        { name: 'Redux', icon: <SiRedux />, description: 'State Management' },
        { name: 'React Query', icon: <SiReactquery />, description: 'Data Fetching & Caching' },
        { name: 'Bootstrap', icon: <FaBootstrap />, description: 'CSS Framework' },
        { name: 'HTML5', icon: <FaHtml5 />, description: 'Markup Language' },
        { name: 'CSS3', icon: <FaCss3Alt />, description: 'Style Sheet Language' },

        // Backend
        { name: 'Spring Boot', icon: <SiSpringboot />, description: 'Java Backend Framework' },
        { name: 'Spring Security', icon: <SiSpringboot />, description: 'Authentication & Authorization' },
        { name: 'Hibernate (JPA)', icon: <SiSpringboot />, description: 'ORM for Java' },
        { name: 'NestJS', icon: <SiNestjs />, description: 'Node.js Framework' },
        { name: 'Express.js', icon: <SiExpress />, description: 'Minimalist Node.js Framework' },
        { name: 'Node.js', icon: <FaNodeJs />, description: 'JavaScript Runtime' },

        // Mobile
        { name: 'React Native', icon: <FaReact />, description: 'Cross-platform Mobile Framework' },

        // Database
        { name: 'MySQL', icon: <SiMysql />, description: 'Relational Database' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, description: 'Advanced SQL Database' },
        { name: 'MongoDB', icon: <SiMongodb />, description: 'NoSQL Database' },
        { name: 'Firebase', icon: <SiFirebase />, description: 'Backend-as-a-Service' },

        // Tools
        { name: 'Docker', icon: <FaDocker />, description: 'Container Platform' },
        { name: 'GitHub', icon: <FaGithub />, description: 'Version Control' },
        { name: 'Trello', icon: <FaTrello />, description: 'Project Management' },

        // Languages
        { name: 'Java', icon: <FaJava />, description: 'Programming Language' },
        { name: 'JavaScript', icon: <SiJavascript />, description: 'Programming Language' },
        { name: 'TypeScript', icon: <SiTypescript />, description: 'Typed JavaScript' },
        { name: 'C++', icon: <SiCplusplus />, description: 'Compiled Programming Language' },

    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        > <section id="skills" className='flex flex-col items-center border-t border-slate-800 md:mx-30 mx-5 py-5'>
                <div className="w-full text-center mb-10 font-bold text-black dark:text-white text-2xl">
                    <p>{t('skills')}</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <img
                        src={`https://github-readme-stats.vercel.app/api?username=trinhhoa-23520508&show_icons=true&theme=${theme === "dark" ? "radical" : "default"}&hide_border=true&count_private=true&locale=${language === 'zh' ? "cn" : language}`}
                        alt="GitHub Stats"
                        className="w-full max-w-md mx-3 border-gray-400 border"
                    />
                    <img
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=trinhhoa-23520508&layout=compact&theme=${theme === "dark" ? "radical" : "default"}&hide_border=true&langs_count=8&locale=${language === 'zh' ? "cn" : language}`}
                        alt="Top Languages"
                        className="w-full max-w-md mx-3 border-gray-400 border"
                    />

                </div>
                <div className="w-full text-center mt-20 font-bold text-black dark:text-white text-2xl">
                    <p>{t('techStack')}</p>
                </div>
                <div>
                    <InfiniteScroll items={skills} />
                </div>

            </section></motion.div>

    )
}

export default SkillSection;