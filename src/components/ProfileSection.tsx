import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ProfileSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 my-10 px-6 md:px-40 ">
            <article className="md:w-1/2 text-left space-y-4">
                <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
                    Know Who I Am
                </h2>

                <p className="text-base leading-relaxed dark:text-white">
                    Hi everyone, I’m <span className="font-semibold dark:text-pink-400">Trịnh Hòa</span> from Gia Lai, Vietnam.
                </p>

                <p className="text-base leading-relaxed dark:text-white">
                    I’m currently working as a <span className="font-semibold dark:text-pink-400">freelance developer</span> in a start-up environment.
                </p>

                <p className="text-base leading-relaxed dark:text-white">
                    I'm also a student at <span className="font-semibold dark:text-pink-400">UIT University</span>.
                </p>

                <p className="text-base leading-relaxed dark:text-white">
                    Apart from coding, here are some activities I enjoy:
                </p>

                <ul className="list-disc list-inside space-y-1 pl-2 text-base text-gray-700 dark:text-gray-300">
                    <li>🎮 Playing games</li>
                    <li>✍️ Writing tech blogs</li>
                    <li>✈️ Travelling</li>
                    <li>🎧 Listening to music</li>
                </ul>

                <blockquote className="italic text-gray-600 dark:text-gray-400 border-l-4 border-pink-400 pl-4 mt-4">
                    "Pursuing your dreams is how you become homeless ~.~"
                    <br />
                    <span className="text-sm font-medium">— Jimmy O. Yang</span>
                </blockquote>
            </article>

            <div className="md:w-1/3 flex justify-center items-center">
                <DotLottieReact
                    src="https://lottie.host/127d24a3-d2a4-472f-877e-c99131626d3a/QQXS37qC40.lottie"
                    loop
                    autoplay
                    width={300}
                    height={300}
                    speed={1}
                />
            </div>
        </section>
    );
};

export default ProfileSection;
