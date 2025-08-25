// Base class

class LibraryItem {

  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.isAvailable = true;
  }

  checkOut() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has been checked out.`);
    } else {
      console.log(`${this.title} is already checked out.`);
    }
  }

  returnItem() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`${this.title} has been returned.`);
    } else {
      console.log(`${this.title} was not checked out.`);
    }
  }
}


// Child class: Book

class Book extends LibraryItem {

  constructor(title, id, author, genre) {
    super(title, id);                           // Calls the parent class constructor to set title and id
    this.author = author;                       // Add two new properties specific to books
    this.genre = genre;
  }

  getDetails() {
    return `Book: ${this.title} by ${this.author}, Genre:${this.genre}`;
  }
}


// Child class: DVD

class DVD extends LibraryItem {

  constructor(title, id, director, duration) {
    super(title, id);
    this.director = director;
    this.duration = duration; // Duration in minutes
  }

  getDetails() {
    return `DVD: ${this.title}, Directed by ${this.director}, Duration: ${this.duration} minutes`;
  }
}


// Child class: Magazine

class Magazine extends LibraryItem {
  constructor(title, id, issueNumber, publisher) {
    super(title, id);
    this.issueNumber = issueNumber;
    this.publisher = publisher;
  }

  getDetails() {
    return `Magazine: ${this.title}, Issue: ${this.issueNumber}, Published by ${this.publisher}`;
  }
}


// Step 3: Instantiate and test

let book = new Book("The Great Gatsby", 1, "F. Scott Fitzgerald", "Fiction");
let dvd = new DVD("Inception", 2, "Christopher Nolan", 148);
let magazine = new Magazine("National Geographic", 3, 120, "NatGeo Society");

// Test shared methods

book.checkOut();
book.returnItem();

// Test unique methods

console.log(book.getDetails());
console.log(dvd.getDetails());
console.log(magazine.getDetails());