import ProjectCard from "@/components/ProjectCard";
import type { IProject } from "@/types/type";
import { useTranslation } from "react-i18next";

const ProjectPage = () => {
    const {t} = useTranslation();
    const projects = t('projects', {returnObjects:true}) as IProject[]
    return (
        <div className="flex flex-col py-10 px-20">
            <div className="text-center font-bold text-2xl text-black dark:text-white">
                <h3>My Recent <span className="dark:text-pink-400">Works</span></h3>
            </div>
            <div className="text-center my-3 text-black dark:text-white">
                <p>Here are a few projects I've worked on recently.</p>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 p-3">
                {projects.map((project, index)=> 
                {
                    return(
                        <div className="m-5" key={index}>
                            <ProjectCard image={project.image} title={project.title} description={project.description}
                                demoLink={project.demoLink} githubLink={project.githubLink}/>
                        </div>
                    )
                }
                    )}

            </div>
        </div>
    )
}

export default ProjectPage;