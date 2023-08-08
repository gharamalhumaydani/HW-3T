let books = [
    {
      title: "Start with why",
      author: "Simon Sinek",
      Pages: 330,
      available: true
    },
    {
      title: "But how do it know",
      author: "J. Clark Scott",
      Pages: 320,
      available: true
    },
    {
      title: "Clean Code",
      author: "Robert Cecil Martin",
      Pages: 150,
      available: false
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      Pages: 400,
      available: true
    },
    {
      title: "You don't know JS",
      author: "Kyle Simpson",
      Pages: 536,
      available: true
    }
  ];
  


  for(let i=0;i<books.length;i++){
    console.log(books[i].title ,"\n" ,books[i].author ,"\n",books[i].Pages);
}


function borrowBook(bookname,borrowername){
    for(i in books){
        if(books[i].title==bookname){
            if(books[i].available==true){
                books[i].available=false
                books[i].borrower = borrowerName;
            }else{
                console.log("book is not available to borrowing")
            }
            console.log(books[i])
       }
        
    }
    
}

borrowBook("html","ahmed") ;
borrowBook("css","mohammed") ;
borrowBook("htmlpyrhon","hind") ;
borrowBook("php","gharam") ;


function returnBook(bookname){
    for(i in books){
        if(books[i].title==bookname){
            if('borrower' in books[i]==true){
                delete books[i].borrower
                books[i].available=true
            }
            else{
                console.log("book was never selld")
            }
            console.log(books[i])
        }
    }
}
 

returnBook("art") ;
returnBook("engineering") ;
returnBook("code") ;
returnBook("toys") ;

for(let i=0;i<books.length;i++){
    console.log(books[i]);
}

function addBook(newBook) {
    books.push(newBook);
  }
  
  let newBook = {
    title: "don't says yes",
    author: "Simpson",
    Pages: 50,
    available: true,
  };
  addBook(newBook);
  console.log(books);

  function serchBook(serchItem){
    for(i in books){
        if(books[i].title==serchItem || books[i].author==serchItem || books[i].borrower==serchItem){
            console.log(books[i])
        }
    }
    
}
//test
serchBook("gharam")
serchBook("mohammed")
serchBook("php")
serchBook("Zero to One")