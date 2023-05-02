function DealGrid({ deals, rows, cols }) {
    let result = [];

    for (let i = 0; i < rows * cols; i += cols) {
        result.push(<div class="flex justify-center display-grid">
            {deals.slice(i, i + cols)}
        </div>);
    }

    return <>
        {result}
    </>
}

export default DealGrid;
