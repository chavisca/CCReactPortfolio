import PortfolioData from '../data/portfoliodata.js';
import Portfolioitem from './Portfolioitem';

export default function Portfolio() {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="text-center">
                <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold font-edutas">My Portfolio</h1>
            </div>
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