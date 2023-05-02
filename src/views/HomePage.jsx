import Header from "./components/Header";
import Footer from "./components/Footer";

function HomePage() {
    return <>
        <Header />

        <div className="text-center">
            <section>
                <span class="font-medium">Welcome to my site. Please stay a while.</span>
                <ol start="24">
                    <li><span class="text-red-600 font-medium">Christmas</span> Eve</li>
                    <li><span class="text-red-600 font-medium">Christmas</span> Day</li>
                </ol>
            </section>
            <br />
            <section class="flex justify-center mb-2">
                <audio src="hollyjollychristmas.mp3" controls></audio>
            </section>
            <section class="flex justify-center">
                <iframe class="rounded-3xl" width="560" height="315" src="https://www.youtube.com/embed/L_LUpnjgPso" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
            <br />
            <section>
                    I started this web site because <span class="text-red-600 font-medium">Christmas</span>
                    {" "} has always been my favorite holiday. Last year, I started selling some of
                    my favorite <span class="text-red-600 font-medium">Christmas</span> products and
                    they've become quite a hit.
            </section>
            <br />

            <br />
            <section>
                If you click on the <a href="https://example.com">personal link</a>,
                you can browse my favorite <span class="text-red-600 font-medium">Christmas</span> pictures, stories and films.
                If you join my email list, I will keep you you up-to-date on all things <span class="text-red-600 font-medium">Christmas</span>.
            </section>
            <br />
            <section>
            <h2>Product Categories</h2>
            <ul>
                <li>Decorations</li>
                <li>Recipes</li>
                <li>Toys</li>
                <li>Unique Gift Ideas</li>
                <li>Wrapping Paper</li>
            </ul>
            </section>
            <br />
            <section>
            <h3>My Guarantee</h3>
            <p>
                If you aren&apos;t completely satisfied with everything you buy from my site,
                you can return it for a full refund. <strong><em>No questions asked!</em></strong>
            </p>
            </section>
            <br />
            <section>
            <p>
                <a href="https://goo.gl/maps/hVctE3YYRdnFue919">3306 Engineering St, Melbourne, FL 32901</a>
            </p>
            <p class="flex justify-center">
                <iframe class="rounded-3xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.9699212294388!2d-80.62279078179773!3d28.058765330576815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de13086c058d75%3A0xdedd689f381e0177!2sHartley%20Hall!5e0!3m2!1sen!2sus!4v1673565484244!5m2!1sen!2sus"
                width="600" height="450" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </p>
            </section>
        </div>

        <Footer />
    </>
}

export default HomePage;
