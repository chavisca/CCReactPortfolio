export default function Resume() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold font-edutas">My Resume</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Web Developer in Training</p>
            <p className="text-sm max-w-xl mb-6 font-light">Full-Stack Web Developer for YourCompany (November 2023 - Present)</p>
            <ul className="text-sm max-w-xl mb-6 font-light">
                <li>Writing code for your Web Dev team, contributing as a new developer with fresh ideas and exposure to newer libraries and tools.</li>
                <li>Learning from your Senior Dev’s and becoming an asset in real time for your company.</li>
                <li>Resolving tickets and collaborating in a productive group environment.</li>
            </ul>
            <p className="text-sm max-w-xl mb-6 font-light">Highlights:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>React</li>
                    <li>TailwindCSS</li>
                    <li>Webpack</li>
                    <li>IndexedDB</li>
                    <li>Sequelize</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>DayJS</li>
                    <li>Handlebars</li>
                    <li>Apollo</li>
                    <li>JQuery</li>
                </ul>
                <button className="text-center inline-block px-8 py-3 mt-6 w-max text-base font-medium rounded-md text-white bg-gray drop-shadow-md hover:stroke-white">
                    <a className="button" href="/ResumeOfficial.pdf" download = "ResumeOfficial.pdf">Download Resume</a>
                </button>
        </div>
    )
}
