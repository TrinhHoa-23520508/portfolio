import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ExperienceCard from './ExperianceCard';
import { useTranslation } from 'react-i18next';
import type { IExperience } from '@/types/type';
import { User } from 'lucide-react';
import { motion } from "framer-motion";
const ExperiencesSection = () => {
    const { t } = useTranslation();
    const experiences = t('experiences', { returnObjects: true }) as IExperience[];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <section className="flex flex-col border-t border-slate-800 md:px-30">

                <p className='text-center my-10 text-2xl font-bold text-black dark:text-white'>{t('experiencesSection')}</p>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className='md:w-1/2 flex justify-center items-center '>
                        <DotLottieReact
                            src="https://lottie.host/a1b2a90b-4dca-478d-99fd-87f445e77d2d/UJSxsj3qV5.lottie"
                            loop
                            autoplay
                            width={300}
                            height={300}
                            speed={1}
                        />
                    </div>

                    <div >
                        {experiences.map((ex, index) => <ExperienceCard key={index} experience={ex}
                            icon={<User
                                className={`text-purple-600 transition-all duration-300 `}
                            />} />)}
                    </div>
                </div>
            </section>
        </motion.div>

    )
}

export default ExperiencesSection