export default function About() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold font-edutas">About Me</h1>
            <h2 className="text-2xl md:text-xl mb-3 font-medium text-decoration-line: underline">The Charles Chavis Story</h2>
            <p className="text-base md:text-xl mb-3 font-medium font-style: italic">Accountant by day, Full-Stack Web Developer by night.</p>
            <div class="justify-center items-center pb-6">
                <img src="assets/headshot110523.jpg" />  
            </div>
            
            <p className="text-sm max-w-xl mb-6 font-light"><i>"But going back means I'll have to face my past.  I've been running from it for so long."</i>  That's a quote from Simba, from The Lion King, but the sentiment fits.  I grew up with computers, starting my foray as a young boy with a Packard Bell 75Mhz (that's right, Megahertz) processor and Windows 95 (I had one of the green and black screened computers beforehand that accepted floppy-disk games, but I couldn't tell you the make and model of that classic).I started writing HTML back when sites like Angelfire and Geocities were the places you would frequent while on dial-up AOL service.  I went on to design the <i>very</i> amateur website for my high school shop class EV team.  My time with code ended there, as the XML book I checked out from my library was a little out of my league, for someone exploring as a hobby and had limited time with a job, girlfriend, and schoolwork.  And when college rolled around, after a brief foray into a CCNA program, I was roped into accounting instead.  Leave it to a retired auditor for Price-Waterhouse-Cooper to serenade his students with embellished warstories of travel and corporate hijinx.</p>
            <p className="text-sm max-w-xl mb-6 font-light">But that was then.  Now a family man with two sons, the work/life balance of Accounting leaves a lot to be desired.  As fate, or coincidence, or providence would have it, I had some family friends recently graduate a bootcamp that had just landed jobs in WebDev and Security.  Another family friend, who has been a WebDev for the better part of 20 years, asked me why I never went that route.  He knew I had the chops for it.  I didn't have a good answer.</p>
            <p className="text-sm max-w-xl mb-6 font-light">So here I am.  I'm green, I'm learning, and I'm almost ready to dive into my first Senior Dev's slack and blow them up with questions.  I learn best by doing, and I love the world I've finally returned to and what it's become of it since I left it.  If you have any advice (or job offers!), please contact me via the Contact page!</p>
        </div>
    )
}
