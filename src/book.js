import { default as BookStyleSheet } from '.BookStyleSheet.js';

export default class Book {
  // static 
  constructor() {
    this.style = new BookStyleSheet();
  }
}