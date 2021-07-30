import myphoto from "../images/myphoto.jpg"

function About () {
    return (
        <div className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={myphoto} alt="this is me"/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">About Me</h1>
                        <p className="leading-relaxed">I'm from Lexington, SC.</p>
                        <p className="leading-relaxed">I am currently studying computer science at Clemson University and I have a minor in Digital Production Arts</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;