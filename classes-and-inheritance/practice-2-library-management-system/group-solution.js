/* Tasks

1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).

2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.

3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.

4. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class. */

class LibraryItem {
    constructor (title, id, isAvailable) {
        this.title = title;
        this.id = id;
        this.isAvailable;
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

class Book extends LibraryItem {
    constructor(title, id, isAvailable, author, genre) {
        super(title, id, isAvailable);
        this.author = author;
        this.genre = genre;
    }

    describeBook() {
        let status; 
        if (this.isAvailable) {
             status = "available";
        } else {
            status = "unavailable";
        }
        return `${this.title} by ${this.author} is ${status} and is in the ${this.genre} section.`;
    }

}

class DVD extends LibraryItem {
    constructor(title, id, isAvailable, director, duration) {
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
    }

      describeDVD() {
        let status; 
        if (this.isAvailable) {
             status = "available";
        } else {
            status = "unavailable";
        }
        return `${this.title} is directed by ${this.director}, is ${this.duration} minutes long and is ${status}.`;
    }
}

class Magazine extends LibraryItem {
    constructor ( title, id, isAvailable, issueNumber, publisher) {
        super (title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }

      describeMagazine() {
        let status; 
        if (this.isAvailable) {
             status = "available";
        } else {
            status = "unavailable";
        }
        return `${this.title} is published by ${this.publisher}, the issue number is ${this.issueNumber} and is ${status}. The id number is ${this.id}.`;
    }
}

let book = new Book("The Great Gatsby", 1, false, "F. Scott Fitzgerald", "Fiction" );
let dvd = new DVD("Inception", 2, true, "Christopher Nolan", 148);
let magazine = new Magazine("National Geographic", 3, true, 25, "NatGeo Society");

console.log(book);

book.checkOut();

console.log(book);

book.returnItem();

console.log(book);

console.log(magazine.describeMagazine());
console.log(dvd.describeDVD());

dvd.checkOut();
console.log(dvd.describeDVD());