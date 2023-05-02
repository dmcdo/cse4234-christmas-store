function Header() {
    return <header className="text-center">
        <img src="header.webp" alt="Santa Claus" class="w-full h-12" />
        <h1 class="text-5xl">Welcome to Our <span class="text-red-600 font-medium">Christmas</span> Store</h1>
        <p class="text-2xl">This page should be tried in safari, chrome or Mozila.</p>

        <nav class="flex w-screen font-medium text-xl">
            <ul class="flex flex-1 justify-center">
                <li class="p-5 m-4 bg-sky-400 hover:bg-sky-500 rounded-3xl hover:scale-125 transition-all">
                    <a href="/" class="hover:underline">Index</a>
                </li>
                <li class="p-5 m-4 bg-sky-400 hover:bg-sky-500 rounded-3xl hover:scale-125 transition-all">
                    <a href="/contact" class="hover:underline">Contact</a>
                </li>
                <li class="p-5 m-4 bg-sky-400 hover:bg-sky-500 rounded-3xl hover:scale-125 transition-all">
                    <a href="/deal" class="hover:underline">Today&apos;s Deal</a>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header;
