class Book {
  constructor(name, author, published) {
    this.name = name;
    this.author = author;
    this.published = published;
  }
}
class Ebook extends Book {
  constructor(name, author, published, price, cover) {
    super(name, author, published);
    this.price = price;
    this.cover = cover;
  }
}

const RomeoandJuliete = new Book(
  "Romeo and Juliete",
  "William Shakespeare",
  1597
);
console.log(RomeoandJuliete);
const eRomeoandJuliete = new Ebook(
  "Romeo and Juliete",
  "William Shakespeare",
  1597,
  25,
  "https://musicart.xboxlive.com/7/05031100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
);
console.log(eRomeoandJuliete);
const eCrimeandPunishment = new Ebook(
  "Crime and Punishment",
  "Fyodor Dostoyevsky",
  1866,
  40,
  "https://cdn.penguin.co.uk/dam-assets/books/9780099981909/9780099981909-jacket-large.jpg"
);
const eDivineComedy = new Ebook(
  "Divine Comedy",
  "Dante Alighieri",
  1321,
  30,
  "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781607109914/the-divine-comedy-9781607109914_hr.jpg"
);
const eDonQuixote = new Ebook( "Don Quixote", "Miguel de Cervantes", 1605, 34, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uz0DNYz9a05dFiBvgvNYJ4GmV6cbjxUWUSWJrMcxqyAOlp5v")
const eHarryPotter1 = new Ebook("Harry Potter","J. K. Rowling", 1997, 15, "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlMPUYcyU4Qbv-ulofYB0K9GL_eHH0nFOwkXOeGR9flxTA8VRj")
const ePrideandPrejudice = new Ebook("Pride and Prejudice", "Jane Austen", 1813, 39, "https://cloud.firebrandtech.com/api/v2/image/111/9780785839866/CoverArtHigh/XL")
const eTheLittlePrince = new Ebook("The Little Prince", "Antoine de Saint-Exupéry", 1943, 23, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPFY9sV5vRpz0fo5AlOMnKhtBfbr444yxzL6OdhYBNCGsRYac")


const Ebooks = [eRomeoandJuliete, eCrimeandPunishment, eDivineComedy, eDonQuixote, eHarryPotter1, ePrideandPrejudice, eTheLittlePrince];
// console.log(Ebooks)

const searchInput = document.getElementById("searchinput");
const searchBtn = document.getElementById("searcbtn");

Ebooks.forEach((ebook) => {
const Display = document.getElementById("book");
  Display.innerHTML += `
 <div class="ebook">
 <img src="${ebook.cover}" width = "200px" height= "300px">
 <h3>${ebook.name}</h3>
 <h4>${ebook.author}</h4>
 <p>Published: ${ebook.published}</p>
 <p>$${ebook.price}</p>
 </div>
`;
});

function getBooks(SearchKeyWord) {
    if (SearchKeyWord == "") {
        const data = Ebooks;
        return data;
    } else {
        const data = Ebooks.filter((book) => {
            return book.name.includes(SearchKeyWord);
        });
        return data;
    }
}

function populateBooks(){
    const Display = document.getElementById("allbooks");
    Ebooks.forEach(ebook => {
        Display.innerHTML += `
        <div class="ebook">
        <img src="${ebook.cover}" width = "200px" height= "300px">
        <h3>${ebook.name}</h3>
        <h4>${ebook.author}</h4>
        <p>Published: ${ebook.published}</p>
        <p>$${ebook.price}</p>
        </div>
        `
    });
}
const filtered = document.getElementById("book")
searchBtn.addEventListener("click", () => {

  SearchKeyWord = searchInput.value;
  const filteredBooks = getBooks(SearchKeyWord)
  console.log(filteredBooks)
  if(filteredBooks.length >= 1){
    noResult.innerHTML = ""
    Display.innerHTML = ""
    filteredBooks.forEach(ebook => {
      filtered.innerHTML +=`
      <div class="ebook">
          <img src="${ebook.cover}" width = "200px" height= "300px">
          <h3>${ebook.name}</h3>
          <h4>${ebook.author}</h4>
          <p>Published: ${ebook.published}</p>
          <p>$${ebook.price}</p>
          </div>
      `
    })
  }
  else{
    filtered.innerHTML= ""
    noResult.innerHTML = `
    <h2>No Result</h2>
<p>Try another one</p>
<img src="https://icons.veryicon.com/png/o/commerce-shopping/jkd_wap/no-result.png" alt="">
    `
  }
  ;
});
const noResult = document.getElementById("noresult")
const Display = document.getElementById("book");






