
let bandOfGypsys = {
    album : "Band Of Gypsys",
    year : "(1970)",
    artist : "Jimi Hendrix",
    description : "",
    genre : "Rock",
    color : "#6F3037",
    cover : "https://images-na.ssl-images-amazon.com/images/I/81pMnZ%2BV0ZL._SL1500_.jpg",
    className : "bandOfGypsys",
}

let abbeyRoad = {
    album : "Abbey Road",
    year : "(1969)",
    artist : "The Beatles",
    description : "",
    genre : "Rock",
    color : "#93a4b6",
    cover : "https://images-na.ssl-images-amazon.com/images/I/51QFGpP5mOL.jpg",
    className : "abbeyRoad",
}

let bitchesBrew = {
    album : "Bitches Brew",
    year : "(1970)",
    artist : "Miles Davis",
    description : "",
    genre : "Fusion",
    color : "#B28A70",
    cover : "https://images-na.ssl-images-amazon.com/images/I/81m3DGSbOIL._SL1500_.jpg",
    className : "bitchesBrew",
}

let blueTrain = {
    album : "Blue Train",
    year : "(1958)",
    artist : "John Coltrane",
    description : "Hardbop has never been the same since Coltrane played over this legendary 5 track genre defining album. This is truly the album that made Coltrane's abbility as a band leader clear to everyone.",
    genre : "Jazz",
    color : "#47838C",
    cover : "https://media.s-bol.com/rmGpBGP0w3Nk/550x550.jpg",
    className : "blueTrain ",
}

let ledZepplin2 = {
    album : "Led Zepplin II",
    year : "(1969)",
    artist : "Led Zepplin",
    description : "",
    genre : "Rock",
    color : "#694436",
    cover : "https://www.rockarchive.com/media/2451/morgan-howell-unframed-led-zeppelin-led-zep-ii.jpg?crop=0.064888037478084692,0.054137015153136778,0.076156299904429348,0.30462281691262111&cropmode=percentage&width=800&height=800&rnd=131503767740000000&overlay=watermark.png&overlay.size=230,20&overlay.position=0,780",
    className : "ledZepplin2",
}


let darkSide = {
    album : "The Dark Side of the Moon",
    year : "(1973)",
    artist : "Pink Floyd",
    description : "",
    genre : "rock",
    color : "#040404",
    cover : "https://images-na.ssl-images-amazon.com/images/I/51UtWpxbNYL._SL1500_.jpg",
    className : "darkSide",
}

let buenaVista = {
    album : "Buena Vista Social Club",
    year : "(1997)",
    artist : "Buena Vista Social Club",
    description : "",
    genre : "Afro Cuban",
    color : "#678695",
    cover : "https://www.musicmaniarecords.be/media/coverart-big/498-buena-vista-social-club.jpg",
    className : "buenaVista",
} 

let ahUm = {
    album : "Ah Um",
    year : "(1959)",
    artist : "Charles Mingus",
    description : "",
    genre : "Jazz",
    color : "#C47D84",
    cover : "https://media.s-bol.com/pE2Xl8voq86/550x550.jpg",
    className : "ahUm ",
}

let felaKuti = {
    album : "Fela with Ginger Baker live!",
    year : "(1971)",
    artist : "Fela Kuti",
    description : "",
    genre : "Afro-beat",
    color : "#331C1C",
    cover : "https://images-na.ssl-images-amazon.com/images/I/61Nhv8f1CFL.jpg",
    className : "felaKuti",
}

let albums = [bandOfGypsys, abbeyRoad, bitchesBrew, blueTrain, ledZepplin2, darkSide, buenaVista, ahUm, felaKuti]

function createCard(albumTitle) {
    let cards = document.createElement("div")
    cards.className = albumTitle.className
    document.querySelector(".container").appendChild(cards)
    
    let front = document.createElement("div")
    front.className = "front"
    cards.appendChild(front)
    
    let back = document.createElement("div")
    back.className = "back"
    cards.appendChild(back)
    
    let main = document.createElement("main")
    back.appendChild(main)
    
    let header = document.createElement("header")
    main.appendChild(header)
    
    let article = document.createElement("article")
    main.appendChild(article)
    
    let footer = document.createElement("footer")
    main.appendChild(footer)
    
    let title = document.createElement("div")
    title.className = "title"
    header.appendChild(title)
    
    let date = document.createElement("div")
    date.className = "date"
    header.appendChild(date)
    
    let albumName = document.createElement("h1")
    title.appendChild(albumName)
    albumName.innerText = albumTitle.album  
    
    let albumAuthor = document.createElement("p")
    title.appendChild(albumAuthor)
    albumAuthor.innerText = albumTitle.year

    let albumDate = document.createElement("p")
    date.appendChild(albumDate)
    albumDate.innerText = albumTitle.artist

    let albumdescription = document.createElement("p")
    article.appendChild(albumdescription)
    albumdescription.innerText = albumTitle.description

    let albumGenre = document.createElement("p")
    footer.appendChild(albumGenre)
    albumGenre.innerText = albumTitle.genre
    
    front.style.backgroundImage = "url('"+ albumTitle.cover +"')";

    back.style.backgroundColor = albumTitle.color;

}

for (let albumTitle of albums) {
    createCard(albumTitle)
}
