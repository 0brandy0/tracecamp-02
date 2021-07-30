function Header() {
    return (
        <header class="fixed w-full bg-purple-600 text-white md:flex md:justify-between">
            <a class="font-bold block px-8 py-4" href="#top">Brandy Barfield</a>
            <nav>
                <ul class="md:flex">
                    <li>
                        <a class="block px-8 py-4 hover:bg-purple-700" href="#home">Home</a>
                    </li>
                    <li>
                        <a class="block px-8 py-4 hover:bg-purple-700" href="#about">About</a>
                    </li>
                    <li>
                        <a class="block px-8 py-4 hover:bg-purple-700" href="interests">Interests</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;