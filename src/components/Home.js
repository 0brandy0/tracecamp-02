function Home() {
    return (
        <section id="home" class="h-screen bg-purple-500 text-white text-center grid place-items-center">
            <div>
                <h3 class="text-lg font-bold italic uppercase tracking wider">Hi! It's</h3>
                <h1 class="font-bold text-8xl leading-none">Brandy Barfield</h1>
                <p class="font-mono text-lg" style-prop-object="line-height:4">CS Student at Clemson University | Class of 2022</p>
                <a
                    href="https://www.linkedin.com/in/brandy-barfield-649186170/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="mt-10 bg-white rounded-lg px-8 py-4 text-black inline-block"
                >Connect with Me!</a>
            </div>
        </section>
    );
}

export default Home;