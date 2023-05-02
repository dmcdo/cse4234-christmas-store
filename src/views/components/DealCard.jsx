function DealCard({ item }) {
    return <div class="max-w-sm m-6 font-medium text-2xl bg-red-900 rounded-3xl text-red-100 hover:scale-105 transition-all\">
        <img src={item.image} alt={item.name} class="rounded-t-3xl" />
        <div class="p-5">
            <p>{item.name} <span class="rounded-full bg-yellow-500 text-black p-2 m-1 percent-off">{Math.trunc(item.discount * 100)}% Off</span></p>
        </div>
    </div>
}

export default DealCard;
