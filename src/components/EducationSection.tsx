import type { IExperience } from "@/types/type";
import ExperienceCard from "./ExperianceCard";
import { FaGraduationCap } from "react-icons/fa6";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const EducationSection = () => {
    const {t} = useTranslation()
    const educations: IExperience[] = t('education', {returnObjects: true}) as IExperience[]
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <section className="flex flex-col md:flex-row items-center justify-between gap-10 my-10 px-6 md:px-40 ">
                <div className="md:w-1/3 flex justify-center items-center">
                    <DotLottieReact
                        src="https://lottie.host/fe80f8b4-688e-4a14-be35-9c02180e5e65/ibpDRXkzr6.lottie"
                        loop
                        autoplay
                        width={300}
                        height={300}
                        speed={1}
                    />
                </div>
                <div className="text-center">
                    <h2 className="font-bold text-2xl text-black dark:text-pink-500 py-5">Education</h2>
                    {educations.map((ed, index) => <ExperienceCard key={index} experience={ed}
                        icon={<FaGraduationCap
                            className={`text-purple-600 transition-all duration-300 `}
                        />} />)}
                </div>
            </section>
        </motion.div>

    )
}

export default EducationSection;