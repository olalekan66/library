const addnew = document.querySelector('.add');
const dialog = document.querySelector('dialog');
const container = document.querySelector('.container');
const submit = document.querySelector('#submit');



addnew.addEventListener("click", () => {
    dialog.showModal();
});

dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
            ) {
            dialog.close()
        }
        });


const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
};

Book.prototype.info = function(){
    return `${this.title} written by ${this.author}, ${this.pages} pages long, ${this.read}.`
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

function Displaybooks(book){
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    let read = book.read;


    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h4 class="title"> ${title}.</h4>
    <p class="author"> written by <span>${author},</span></p>
    <p class="pages"> ${pages} pages long. </P>`;

    const toggle = document.createElement('p');
    const check = document.createElement('button');
    const remove = document.createElement('button');
    const checkwrapper = document.createElement('div');
    checkwrapper.className = 'checkwrapper';

    check.innerHTML = '<img src="./icons/eye-svgrepo-com.svg">'

    const updatetoggle = () => {
        toggle.textContent = read ? 'Read ✔' : 'Not read :/';
    };

    updatetoggle();

    check.addEventListener('click', ()=> { 

        read = !read;
        updatetoggle();
     });

    remove.innerHTML = '<img src="./icons/rubbish-bin-svgrepo-com.svg">'
    remove.setAttribute('type', 'submit');
    remove.addEventListener('click', () => {
        container.removeChild(card);
    })

    card.appendChild(toggle);
    checkwrapper.appendChild(check);
    checkwrapper.appendChild(remove);
    card.appendChild(checkwrapper)

    container.appendChild(card);
    addBookToLibrary(book);
};

submit.addEventListener('click', e => {
    e.preventDefault();
    const Title = document.querySelector('#title').value;
    const Author = document.querySelector('#author').value;
    const Pages = document.querySelector('#pages').value;
    const Read = document.querySelector('#read').checked;

    const newBook = new Book(Title, Author, Pages, Read)
    Displaybooks(newBook)
   
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = false;

    dialog.close();
    
});


const book1 = new Book('Harry Potter', 'J. K. Rowlings', 350, true);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 180, false);
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 120, true);
const book4 = new Book('Things Fall Apart', 'Chinua Achebe', 389, false);
Displaybooks(book1);
Displaybooks(book2);
Displaybooks(book3);
Displaybooks(book4);