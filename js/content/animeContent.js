"use strict";
function animeContent() {

var content = `
        <style>
            p {
                margin-left: 1.5rem;
            }
            .flexContainer {
                display:flex; 
                flex-direction: row;
                background-color: rgb(243, 117, 31);
            }
            .flexContainer .obj {
                width: 33%; /* to fit three columns inside the flexContainer */
                box-sizing: border-box; /* makes padding and border counted in the width */
            }
        </style>
        <h3>My Anime List</h3>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content; // the HTML code specified just above...
        
        var objContainer = document.createElement("div");
        objContainer.classList.add('flexContainer'); // see styling in this file, above...
        ele.appendChild(objContainer);
        
        //{title="No input title", imgFile="pics/crunchyroll_logo_0.jpeg", text="No input decription"}
        
        objContainer.appendChild(MakeAnime({theTitle: "Kimetsu no Yaiba", imgFile: "https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/2ZfAUG5CTXdM34S1OhmMW1zF.jpg", theRating: "50/100"}));
        objContainer.appendChild(MakeAnime({theTitle: "One Piece", imgFile: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg", theRating: "80/100"}));
        objContainer.appendChild(MakeAnime({}));

        return ele;
}