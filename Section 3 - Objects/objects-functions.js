let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 384
};

let otherBook = {
    title: 'Pokemon',
    author: 'Masuda',
    pageCount: 322
};

let getSummary = function(book){
    return {
        summary: `${book.title}, was written by ${book.author}`,
        pageCountSummary: `Your book is called ${book.title}, and has ${book.pageCount} pages.`
    };
};

console.log(getSummary(myBook).summary);
console.log(getSummary(otherBook).pageCountSummary);

//

let convertTemp = function(faren){
    return {
        farenheit: faren,
        celcius: (faren - 32)/1.8,
        kelvin: (faren - 32)/1.8 + 273.15
    };
};

console.log(convertTemp(212));
console.log(convertTemp(212).farenheit);
console.log(convertTemp(212).celcius);
console.log(convertTemp(212).kelvin);