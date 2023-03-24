function animeDbContent() {

    var userComponent = document.createElement("div");
//
//    var clickSortComp = MakeClickSortTable({});
//    
//    userComponent.appendChild(clickSortComp);
//    
//    return userComponent;

    ajax("http://cis-linux2.temple.edu:8080/sp23_3308_tuk21567/webAPIs/listOtherAPI.jsp", processUserData, userComponent);
    //ajax("http://localhost:8080/WebApplication_JS_UI_Khumpan_Timothy/webAPIs/listOtherAPI.jsp", processUserData, userComponent);
    function processUserData(animeList) { // callback function

        // now userList has been populated with data from the AJAX call to file users.json
        console.log("user list (in processUserData) on next line - open triangle to see data");
        console.log(animeList);
        
        if (animeList.dbError.length !== 0) {
            var errorDbContent = `
                <h4>Problem With Database</h4>
                <p>
                    Database Error: ${animeList.dbError}
                </p>`;
            userComponent.innerHTML = errorDbContent;
        } else {
            // Create new object list where all properties are <td> elements
            var newUserList = [];
            for (var i = 0; i < animeList.animeList.length; i++) {
                newUserList[i] = {};
                newUserList[i].User_Email = SortableTableUtils.makeText(animeList.animeList[i].userEmail);
                newUserList[i].User_Id = SortableTableUtils.makeNumber(animeList.animeList[i].webUserId, false);
                newUserList[i].Anime_Rating = SortableTableUtils.makeNumber(animeList.animeList[i].animeRating, false);
                newUserList[i]._Image = SortableTableUtils.makeImage(animeList.animeList[i].animeImg, "width: 5rem;   border-radius: 0.5rem;   box-shadow: 3px 3px 3px #444444; ");
                newUserList[i].Anime_Name = SortableTableUtils.makeText(animeList.animeList[i].animeName);
                

            }
    

            // MakeTableBetter expects all properties to be <td> elements.
            var clickSortComp = MakeClickSortTable({
                objList: newUserList,
                initialSortCol: "User_Email",
                sortIcon: "icons/sortUpDown16.png"
            });
            
            userComponent.appendChild(clickSortComp);
        }

    }
    return userComponent;
}