import Nav from './navbar';

export default function header() {
    return (
        <div className="py-5 text-center bg-cyan-900">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-center">The Charles Chavis Experience</h1>
            <Nav />
        </div>
    )
}
