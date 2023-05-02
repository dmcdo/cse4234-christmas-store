import Header from "./components/Header";
import Footer from "./components/Footer";

function Contact() {
    return <>
        <Header />

        <article class="text-center flex flex-col justify-center">
            <section>
            <h1 class="font-medium text-xl mb-2">Contact Us</h1>
            <form action="/" class="contact-form">
                <label for="fname">First Name:</label><br />
                <input type="text" name="fname" id="fname" /><br />
                <label for="lname">Last Name:</label><br />
                <input type="text" name="lname" id="lname" /><br />
                <label for="email">Enter your email:</label><br />
                <input type="email" name="email" id="email" /><br />
                <label for="phone">Phone Number:</label><br />
                <input type="tel" name="phone" id="phone" /><br />
                <label for="message">Your message:</label><br />
                <textarea name="message" id="message" cols="30" rows="10"></textarea><br />
                <input type="submit" value="Submit" onclick="alert('Success!')"
                    class="bg-green-500 p-4 m-2 rounded-2xl font-medium text-4xl hover:bg-green-600
                            hover:scale-125 transition-all hover:underline" /><br />
            </form>
            </section>
        </article>

        <Footer />
    </>
}

export default Contact;
