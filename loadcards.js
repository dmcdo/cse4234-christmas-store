"use strict";

import Grid from "./Grid.js";
import Card from "./Card.js";

const cards = [
  new Card("tree.webp", "Christmas Tree", 200, 0.25),
  new Card("lights.webp", "Christmas Lights", 10, 0.50),
  new Card("hat.jpg", "Santa Hat", 8, 1 / 8),
  new Card("beard.jpg", "Santa Beard", 30, 1 / 3)
];

document.addEventListener("DOMContentLoaded", () => {
  let cardArea = document.getElementById("card-area");
  let grid = new Grid(2, 2, cards);
  cardArea.innerHTML += grid.toHTML();

  loadTable();
  animation(document.getElementsByClassName("Card"));
});

function loadTable() {
  let area = document.getElementById("deals-table-section");
  if (area !== null) {
    let trs = cards.map((c) => {
      return `<tr class="even:bg-green-400 odd:bg-green-500">`
           + `<td class="border-2 border-green-900 border-solid">${c.title}</td>`
           + `<td class="border-2 border-green-900 border-solid">$${c.originalPrice.toFixed(2)}</td>`
           + `<td class="border-2 border-green-900 border-solid">$${c.discountPrice().toFixed(2)}</td>`
           + `</tr>`;
    });

    area.innerHTML = `<table class="flex justify-center display-grid">`
                     + `<tr class="even:bg-green-400 odd:bg-green-500">`
                     + `<th class="border-2 border-green-900 border-solid">Item Name</th>`
                     + `<th class="border-2 border-green-900 border-solid">Original Price</th>`
                     + `<th class="border-2 border-green-900 border-solid">Today&apos;s Deals</th>`
                     + `</tr>`
                     + trs.join()
                     + `</table>`;
  }
}

function animation(cardElements) {
  console.log(cardElements);
  for (let c of cardElements) {
    c.addEventListener("mouseover", () => {
      let [r1, r2, r3] = [Math.random(), Math.random(), Math.random()].map(x => x * 100);
      let [r4, r5, r6] = [Math.random(), Math.random(), Math.random()].map(x => x * 100);

      c.style.backgroundColor = `rgb(${r1 + 50}, ${r2 + 50}, ${r3 + 50})`;
      c.getElementsByClassName("percent-off")[0].style.backgroundColor = `rgb(${r4 + 150}, ${r5 + 150}, ${r6 + 150})`;
    });
  }
}
