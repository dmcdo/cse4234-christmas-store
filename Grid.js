import Card from "./Card.js";

class Grid {
  constructor(rows, cols, cards) {
    if (isNaN(cols) || isNaN(rows))
      throw new TypeError(`Invalid dimensions: ${rows}x${cols}`);
    if (!(cards instanceof Array && cards.every(c => c instanceof Card)))
      throw new TypeError(`Malformed cards array: ${cards}`);

    this.rows = Number(rows);
    this.cols = Number(cols);
    this.cards = cards;
  }

  toHTML() {
    let result = "<div>";

    for (let i = 0; i < this.rows * this.cols; i += this.cols) {
      result += "<div class=\"flex justify-center display-grid\">";
      result += this.cards.slice(i, i + this.cols).map(c => c.toHTML()).join();
      result += "</div>";
    }

    return result + "</div>";
  }
}

export default Grid;
