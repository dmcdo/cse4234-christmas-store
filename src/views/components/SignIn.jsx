import React, {useState, useEffect} from 'react';
import {auth, provider} from '../../models/firebase'
import {signInWithPopup} from "firebase/auth";

function SignIn() {
    const [value, setValue] = useState("");

    const handleClick = function() {
        signInWithPopup(auth, provider).then((data) => {
            console.log(data);

            setValue(data.user.email);
            localStorage.setItem("name", data.user.displayName);
            window.location.reload();
        });
    }

    useEffect(() => {
        setValue(localStorage.getItem("name"));
    }, []);

    return <button onClick={handleClick} class="absolute top-0 right-0 bg-sky-300 px-2 mx-3 my-2 rounded hover:scale-105 transition-all font-bold">Sign In With Google</button>
}

export default SignIn;
