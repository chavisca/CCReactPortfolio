import Nav from './navbar';

export default function header() {
    return (
        <div>
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">The Charles Chavis Experience</h1>
            <Nav />
        </div>
    )
}
