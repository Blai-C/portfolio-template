import Project from './Project';
import projectData from './data/projects.json';
const Projects = () => {
    return (
        <>
            <div className="mt-8 p-4 pb-2 border-b-2 text-lg border-secondary-200">
                <h2 className="text-primary-200">Projects</h2>
            </div>
            <div className="mt-8">
                {projectData.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                        image={project.image}
                    />
                ))}
            </div>
        </>
    );
};

export default Projects;
