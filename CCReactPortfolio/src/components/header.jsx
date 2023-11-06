import Nav from './navbar';

export default function header() {
    return (
        <div className="flex flex-row gap-4 py-5 text-center bg-cyan-900">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-center font-edutas">Charles</h1>
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-center font-edutas">Chavis</h1>
            <Nav />
        </div>
    )
}
