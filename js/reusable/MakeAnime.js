"use strict";

function MakeAnime ({theTitle="No Title", imgFile="pics/crunchyroll_logo_0.jpeg", theRating="0/100"}) {

    var animeObj = document.createElement("div");
    animeObj.classList.add("anime"); // adds styling to animeObj
    
    //public att.
    animeObj.title = theTitle;
    
    //private
    var rating = theRating;
    
    //public settor
    animeObj.setTitle = function (newName) {
        animeObj.title = newName;
        display(); // show updated 
    };
    
    //public func to change the rating by percentage to increase the rating
    animeObj.changeRating = function (changeRate) {
        var newRate = changeRate;
       
        rating = (parseInt(rating) * newRate + parseInt(rating));
        rating = (String(rating)+"/100");
        
        display(); // show updated 
    };
    
    animeObj.innerHTML =`
        <div class='objInfoClass'></div>
        
        <button class='titleButtonClass'>Change Title: </button>
        <input class='newTitleInputClass' placeholder="Enter New Title"/> <br/>
        <button class='ratingButtonClass'>Change Rating: </button>
        <input class='newRateInputClass' placeholder="Increase Rating %"/> <br/>
        <br/>
    `;
    var objInfo = animeObj.getElementsByClassName("objInfoClass")[0];
    
    var titleButton = animeObj.getElementsByClassName("titleButtonClass")[0];
    var newTitleInput = animeObj.getElementsByClassName("newTitleInputClass")[0];
    var rateButton = animeObj.getElementsByClassName("ratingButtonClass")[0];
    var newRateInput = animeObj.getElementsByClassName("newRateInputClass")[0];
    
    var display = function ( ) {
        objInfo.innerHTML = `
            <h2>${animeObj.title}</h2>
            <img src='${imgFile}'/>
            <p>${rating}</p>
        `;
    };
    display(); // do this or the empInfo area will be blank initially
    
    titleButton.onclick = function () {
        animeObj.setTitle(newTitleInput.value);
    };
    
    rateButton.onclick = function () {
        animeObj.changeRating(newRateInput.value);
    };

    return animeObj;
}