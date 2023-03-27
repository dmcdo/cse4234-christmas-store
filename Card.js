"use strict";

class Card {
  constructor(imageSource, title, originalPrice, discountPercent) {
    this.imageSource = imageSource;
    this.title = title;
    this.originalPrice = Number(originalPrice);
    this.discountPercent = Number(discountPercent);
  }

  discountPrice() {
    return this.originalPrice * this.discountPercent;
  }

  toHTML() {
    return `<div class="max-w-sm m-6 font-medium text-2xl bg-red-900 rounded-3xl text-red-100 hover:scale-105 transition-all Card">`
         + `<img src="${this.imageSource}" alt="${this.title}" class="rounded-t-3xl">`
         + `<div class="p-5">`
         + `<p>${this.title} <span class="rounded-full bg-yellow-500 text-black p-2 m-1 percent-off">${Math.trunc(this.discountPercent * 100)}% Off</span></p>`
         + `</div>`
         + `</div>`;
  }
}

export default Card;
