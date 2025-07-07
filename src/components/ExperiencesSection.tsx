import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ExperienceCard from './ExperianceCard';
import { useTranslation } from 'react-i18next';
import type { IExperience } from '@/types/type';

const ExperiencesSection = () => {
    const { t } = useTranslation();
    const experiences = t('experiences', { returnObjects: true }) as IExperience[];

    return (
        <section className="flex flex-col border-t border-slate-800 px-40 mx-30">

            <p className='text-center my-10 text-2xl font-bold text-black dark:text-white'>{t('experiencesSection')}</p>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className='md:w-100 md:h-100 w-60 h-60 '>
                   <DotLottieReact
                            src="https://lottie.host/a1b2a90b-4dca-478d-99fd-87f445e77d2d/UJSxsj3qV5.lottie"
                            loop
                            autoplay
                            width={256}
                            height={256}
                            speed={1}
                        />
                </div>

                <div >
                    {experiences.map((ex, index)=> <ExperienceCard key={index} experience={ex}/>)}
                </div>
            </div>
        </section>
    )
}

export default ExperiencesSection