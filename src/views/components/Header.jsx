import SignIn from "./SignIn";
import SignOut from "./SignOut";

function Header() {
    const name = localStorage.getItem("name");

    let greeting;
    if (name === null)
        greeting = <h1 class="text-5xl">Welcome to Our <span class="text-red-600 font-medium">Christmas</span> Store</h1>;
    else
        greeting = <h1 class="text-5xl">Welcome, <span class="text-red-600 font-medium">{name}</span></h1>

    return <header className="text-center">
        <img src="header.webp" alt="Santa Claus" class="w-full h-12" />
        {greeting}
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
        {name === null ? <SignIn /> : <SignOut />}
    </header>
}

export default Header;
