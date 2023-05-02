function DealTable({ data }) {
    return <>
        <h1 class="text-xl font-medium mt-2 flex justify-center">Best Holiday Deals</h1>
        <br />
        <table class="flex justify-center display-grid">
            <tbody>
            <tr class="even:bg-green-400 odd:bg-green-500">
                <th class="border-2 border-green-900 border-solid">Item Name</th>
                <th class="border-2 border-green-900 border-solid">Original Price</th>
                <th class="border-2 border-green-900 border-solid">Today&apos;s Deal</th>
            </tr>
            {
                data.map(x => <tr class="even:bg-green-400 odd:bg-green-500">
                    <td class="border-2 border-green-900 border-solid">{x.name}</td>
                    <td class="border-2 border-green-900 border-solid">${x.fullprice.toFixed(2)}</td>
                    <td class="border-2 border-green-900 border-solid">${(x.fullprice * (1 - x.discount)).toFixed(2)}</td>
                </tr>)
            }
            </tbody>
        </table>
    </>
}

export default DealTable;
