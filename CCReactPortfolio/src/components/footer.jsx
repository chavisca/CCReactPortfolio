export default function footer() {
    return (
        <div className="py-5 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <img src="../../public/assets/GitHub-Mark.png" alt="github"
                className="w-full h-24 md:h-36 object-cover cursor-pointer"/>
                <img src="../../public/assets/linkedin.png" alt="linkedin"
                className="w-full h-24 md:h-36 object-cover cursor-pointer"/>
                <img src="../../public/assets/stackicon.png" alt="stackoverflow"
                className="w-full h-24 md:h-36 object-cover cursor-pointer"/>
            </div>
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Charles Chavis.  All rights reserved.
            </p>
        </div>
    )
}