import type { IExperience } from "@/types/type";
import ExperienceCard from "./ExperianceCard";
import { FaGraduationCap } from "react-icons/fa6";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const EducationSection = () => {
    const educations: IExperience[] = [
        {
            timeline: "2020-2023",
            title: "Học sinh trung học phổ thông",
            description: "Trường THPT chuyên Hùng Vương, Pleiku, Gia Lai"

        },
        {
            timeline: "2023-2024",
            title: "Sinh viên năm 1",
            description: "Trường Đại học Công nghệ thông tin (UIT)"

        },
        {
            timeline: "2024-2025",
            title: "Sinh viên năm 2",
            description: "Trường Đại học Công nghệ thông tin (UIT)"

        }
    ]
    return (
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
    )
}

export default EducationSection;