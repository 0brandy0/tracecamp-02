import niki from "../images/niki.jpg"
import myart from "../images/myart.jpg"
import travel from "../images/travel.jpg"

function Interests() {
    return(
        <section id="interests" class="bg-gray-100 pt-10">
            <h1 class="text-center text-2xl font-medium text-gray-900">Interests</h1>
            <ul class="grid p-10 gap-10 md:grid-cols-3">
                <li class="bg-white shadow rounded-lg overflow-hidden">
                    <img src={niki} class="w-full" alt="niki the queen"/>
                    <div class="p-4">
                        <h3 class="font-bold">Music</h3>
                        <p>I like to listen to R&B, pop and EDM. My top artists include NIKI, Kehlani, and Illenium</p>
                    </div>
                </li>
                <li class="bg-white shadow rounded-lg overflow-hidden">
                    <img src={myart} class="w-full" alt="dpa artwork"/>
                    <div class="p-4">
                        <h3 class="font-bold">Art</h3>
                        <p>In my free time, I like to paint or sketch. I've recently taken up drawing on my iPad</p>
                    </div>
                </li>
                <li class="bg-white shadow rounded-lg overflow-hidden">
                    <img src={travel} class="w-full" alt="hiking me"/>
                    <div class="p-4">
                        <h3 class="font-bold">Traveling</h3>
                        <p>From San Francisco to Shanghai, I love traveling to new places</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Interests;