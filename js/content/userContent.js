function userContent() {

    var userComponent = document.createElement("div");
//
//    var clickSortComp = MakeClickSortTable({});
//    
//    userComponent.appendChild(clickSortComp);
//    
//    return userComponent;

    ajax("http://cis-linux2.temple.edu:8080/sp23_3308_tuk21567/webAPIs/listUsersAPI.jsp", processUserData, userComponent);
    //ajax("http://localhost:8080/WebApplication_JS_UI_Khumpan_Timothy/webAPIs/listUsersAPI.jsp", processUserData, userComponent);

    function processUserData(userList) { // callback function

        // now userList has been populated with data from the AJAX call to file users.json
        console.log("user list (in processUserData) on next line - open triangle to see data");
        console.log(userList);
        
        if (userList.dbError.length !== 0) {
            var errorDbContent = `
                <h4>Problem With Database</h4>
                <p>
                    Database Error: ${userList.dbError}
                </p>`;
            userComponent.innerHTML = errorDbContent;
        } else {
            // Create new object list where all properties are <td> elements
            var newUserList = [];
            for (var i = 0; i < userList.webUserList.length; i++) {
                newUserList[i] = {};
                newUserList[i].Type = SortableTableUtils.makeText(userList.webUserList[i].userRoleType);
                newUserList[i].Role = SortableTableUtils.makeNumber(userList.webUserList[i].userRoleId, false);
                newUserList[i].MembershipFee = SortableTableUtils.makeNumber(userList.webUserList[i].membershipFee, true);

                newUserList[i]._Image = SortableTableUtils.makeImage(userList.webUserList[i].image, "width: 5rem;   border-radius: 0.5rem;   box-shadow: 3px 3px 3px #444444; ");
                newUserList[i].Birthday = SortableTableUtils.makeDate(userList.webUserList[i].birthday);
                newUserList[i].User_Email = SortableTableUtils.makeText(userList.webUserList[i].userEmail);

            }
    

            // MakeTableBetter expects all properties to be <td> elements.
            var clickSortComp = MakeClickSortTable({
                objList: newUserList,
                initialSortCol: "Type",
                sortIcon: "icons/sortUpDown16.png"
            });
            
            userComponent.appendChild(clickSortComp);
        }

    }
    return userComponent;
}