import PortfolioData from '../data/portfoliodata.js';
import Portfolioitem from './Portfolioitem';

export default function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PortfolioData.map(project => (
                    <Portfolioitem 
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                    github={project.github}
                    />
                ))}
            </div>
        </div>
    )
}