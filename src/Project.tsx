import React from 'react';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, technologies, link, image }) => {
    return (
        <div className="my-6 px-4 py-4 border-2 border-secondary-200 rounded-lg">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/6 flex-shrink-0 ">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 md:h-auto rounded-lg border-secondary-200 border-2 object-cover"
                    />
                </div>
                <div className="md:ml-4 w-full md:w-3/6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl my-2 md:my-0 md:mb-2 font-bold text-white">{title}</h3>
                        <div className="flex flex-wrap mb-2">
                            {technologies.map((t, index) => (
                                <span key={index} className="bg-secondary-300 text-primary-300 text-sm px-2 py-1 rounded mr-2 mb-2">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <p className="text-primary-400 mt-2 overflow-hidden text-ellipsis">{description}</p>
                    </div>
                    <div className="text-right md:text-left mt-2">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-highlight-200 flex items-center hover:text-primary-200">
                            View Project
                            <FaExternalLinkSquareAlt size={12} className="ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
