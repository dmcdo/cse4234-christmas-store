function SignOut() {
    const logout = function() {
        localStorage.clear();
        window.location.reload();
    }

    return <button onClick={logout} class="absolute top-0 right-0 bg-sky-300 px-2 mx-3 my-2 rounded hover:scale-105 transition-all font-bold">Sign Out</button>
}

export default SignOut;
