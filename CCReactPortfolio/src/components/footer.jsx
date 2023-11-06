export default function footer() {
    return (
        <div className="py-5 text-center">
            <div className="flex flex-row gap-2 items-center justify-center">
                <img src="assets/GitHub-Mark.png" alt="github"
                className="w-12 h-12 md:h-16 object-scale-down cursor-pointer"/>
                <img src="assets/linkedin.png" alt="linkedin"
                className="w-12 h-12 md:h-16 object-scale-down cursor-pointer"/>
                <img src="assets/stackicon.png" alt="stackoverflow"
                className="w-12 h-12 md:h-16 object-scale-down cursor-pointer"/>
            </div>
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Charles Chavis.  All rights reserved.
            </p>
        </div>
    )
}