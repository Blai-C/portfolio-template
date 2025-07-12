import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';

const UserCard = () => {
    return (
        <div className="border-2 border-secondary-200 rounded-lg flex p-4">
            <div className="flex-shrink-0 border-2 border-secondary-200 bg-secondary-600 rounded-full overflow-hidden w-16 h-16 lg:w-32 lg:h-32">
                <img
                    src="https://picsum.photos/500/500"
                    alt="Profile picture"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="ml-4 text-left flex-grow">
                <h1 className="text-primary-200 text-2xl md:text-4xl truncate">John Doe</h1>
                <p className="text-primary-300 hidden sm:block">Developer</p>
                <p className="text-primary-400">
                    My name is John Doe
                </p>

                <div className="flex space-x-4 mt-4 flex-wrap">
                    <a href="https://github.com/" className="text-primary-400 hover:text-primary-200">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/" className="text-primary-400 hover:text-primary-200">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="mailto:example@example.com" className="text-primary-400 hover:text-primary-200">
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
