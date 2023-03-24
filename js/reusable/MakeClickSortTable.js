/* MakeClickSortTable: 
 * Creates an HTML table from an object list.
 * 
 * The HTML table has one <tr> for each object with one column 
 * per property of the objects. The properties of the objects in
 * the object list are expected to already be <td> tags (aligned correctly 
 * according to type) that have a ".sortOrder" property. 
 * Example: this dom element <td>123</td> would have a sortOrder property 
 * of the number 123, not the character string "123" -- so that this
 * column is correctly sorted by numeric value, not alphabetically.  
 * 
 *   objList (req'd): list of objects explained above.
 *   initialSortCol (if provided): determines the initial sort of the HTML table (else sorts by 1st col).
 *   sortIcon: image placed before column headings (indicates user can click on column headings to sort)
 *   @returns div that can be placed in the content area of a page. 
 */


var defaultValues = [
    {title: "N/a", image: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"},
    {title:"N/a",image: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"}
];
var defaultValuesList = [];
for (var i = 0; i < defaultValues.length; i++) {
    defaultValuesList[i] = {}; // i-th element of array is empty object.
    defaultValuesList[i].Title = SortableTableUtils.makeText(defaultValues[i].title);
    defaultValuesList[i]._Image = SortableTableUtils.makeImage(defaultValues[i].image, "width:10rem");
}


function MakeClickSortTable( { objList = defaultValuesList, initialSortCol = "", sortIcon = "icons/sortUpDown16.png" }) {

    // This function sorts the array of objects in "list" by object property "byProperty". 
    // Think of list as an I/O parameter (gets changed by the fn).

    function jsSort(objList, byProperty, sortOrder) {

        var obj = objList[0];
        if (!obj[byProperty]) {
            var message = "objList does not have property " + byProperty + " -- cannot sort by that property.";
            throw message;
            return;  // early return -- dont try to sort.
        }

        if (!obj[byProperty].sortOrder || obj[byProperty].sortOrder === null) {
            var message = "Cannot sort objList by property " + byProperty +
                    " because this property never had it's sortOrder set (by a method in SortableTableUtils.js).";
            throw message;
            return;  // early return -- dont try to sort.
        }

        // q and z are just elements in the array and the function you write below has to return 
        // negative or positive or zero - depending on the comparison of q and z.
        if (sortOrder === 1) {
            objList.sort(function (q, z) {  // in line (and anonymous) def'n of fn to compare list elements. 

                // q and z are objects to be compared. Their 'byProperty' property is the <td> by which we want to 
                // sort. Each <td> has a sortOrder property that was set (according to data type) by a method 
                // from SortableTableUtils. The sortOrder is a number or date or string (depends on type of column). 

                var qVal = q[byProperty].sortOrder;
                var zVal = z[byProperty].sortOrder;

                var c = 0;
                if (qVal > zVal) {
                    c = 1;
                } else if (qVal < zVal) {
                    c = -1;
                }
                //console.log("comparing " + qVal + " to " + zVal + " is " + c);
                return c;
            });
        } 
        else { //-1
            objList.sort(function (q, z) {  // in line (and anonymous) def'n of fn to compare list elements. 

                // q and z are objects to be compared. Their 'byProperty' property is the <td> by which we want to 
                // sort. Each <td> has a sortOrder property that was set (according to data type) by a method 
                // from SortableTableUtils. The sortOrder is a number or date or string (depends on type of column). 

                var qVal = q[byProperty].sortOrder;
                var zVal = z[byProperty].sortOrder;

                var c = 0;
                if (qVal > zVal) {
                    c = -1;
                } else if (qVal < zVal) {
                    c = 1;
                }
                //console.log("comparing " + qVal + " to " + zVal + " is " + c);
                return c;
            });

        }

    } // jsSort

    // Create and return an HTML <tr> tag for the given obj (which comes from the object list). 
    function makeTableRow(obj) {

        var tableRow = document.createElement("tr");

        // append each table data <td> tag that is already stored in obj
        for (var prop in obj) {

            // obj[prop] should already be a "td" tag
            tableRow.appendChild(obj[prop]);
        }
        return tableRow;
    } // makeTableRow


    // remove the tbody from 'table' (if there is one). 
    // sort 'list' by 'sortOrderPropName'. 
    // add a new tbody to table, inserting rows from the sorted list.
    function addTableBody(table, list, sortOrderPropName, sortOrder) {

        // remove old tbody element if there is one (else you'll get the new sorted rows 
        // added to end of what's there).
        var oldBody = table.getElementsByTagName("tbody");
        if (oldBody[0]) {
            console.log("ready to remove oldBody");
            table.removeChild(oldBody[0]);
        }

        jsSort(list, sortOrderPropName, sortOrder);

        // Add one row (to HTML table) per element in the array.
        // Each array element has a list of properties that will become 
        // td elements (Table Data, a cell) in the HTML table. 
        var tableBody = document.createElement("tbody");
        table.appendChild(tableBody);

        // To the tbody, add one row (to HTML table) per object of the object list.
        for (var obj of objList) {
            tableBody.appendChild(makeTableRow(obj));
        }

    } // addTableBody
    
    function isToShow(obj, searchKey) {

        // show the object if searchKey is empty
        if (!searchKey || searchKey.length === 0) {
            return true;
        }

        // convert search key to upper case (will convert values also to upper case before comparing).
        var searchKeyUpper = searchKey.toUpperCase();

        for (var prop in obj) {

            // Do not try to find a match for Table cells that hold images. 
            if (prop[0] !== "_") {

                // pull out the innerHTML because all properties of obj are actually <td> tags, not just text.
                var propVal = obj[prop].innerHTML; // associative array, using property name as if index. 
                var propValUpper = propVal.toUpperCase(); // convert to upper case to match searchKey.

                console.log("checking if " + searchKeyUpper + " is in " + propValUpper);

                if (propValUpper.includes(searchKeyUpper)) {
                    console.log("Yes it is inside");
                    return true;
                }
            } // excluding image tds
        }
        console.log("no it is not inside");
        return false;
    } // isToShow 
    
    function addTableBodyFromSearch(table, objList, sortOrderPropName) {

        // remove old tbody element if there is one (else you'll get the new sorted rows 
        // added to end of what's there).
        var oldBody = table.getElementsByTagName("tbody");
        if (oldBody[0]) {
            console.log("ready to remove oldBody");
            table.removeChild(oldBody[0]);
        }

        // Add one row (to HTML table) per element in the array.
        // Each array element has a list of properties that will become 
        // td elements (Table Data, a cell) in the HTML table. 
        var tableBody = document.createElement("tbody");
        table.appendChild(tableBody);
        
        for (var i in objList) {
            if (isToShow(objList[i], sortOrderPropName)) {
                var tableRow = document.createElement("tr");
                tableBody.appendChild(tableRow);

                // create one table data <td> content matching the property name
                var obj = objList[i];
                for (var prop in obj) {

                    // obj[prop] should already hold a "td" tag
                    tableRow.appendChild(obj[prop]);
                }
            }
        }

    } // addTableBodyFromSearch

    function getFirstProp(obj) {
        for (var prop in obj) {
            return prop;
        }
    }
    
    function makeHeader(propName, firstObjTd, sortOrder) {
        
        var headingCell = document.createElement("th");
        

        // underscores in the property name will be replaced by space in the column headings.
        headingText = propName.replace("_", " ");

        // if the <td> for this property has a null sortOrder property, then do not add sort icon, 
        // do not add onclick to sort the table by this column.  
        if (firstObjTd.sortOrder !== null) {
            headingText = `<img src='${sortIcon}'/> ${headingText}`; //templating
            headingCell.onclick = function () {
                if (sortOrder === 1){
                    sortOrder = -1;
                }
                else{
                    sortOrder = 1;
                }
                //sortOrder = sortOrder === 1 ? -1:1; // toggle between 1 and -1
                console.log("WILL SORT ON " + propName + ", by order: " + sortOrder);
                addTableBody(newTable, objList, propName, sortOrder);
            };
        }
        headingCell.innerHTML = headingText;
        return headingCell;
    }


    // **********************************************************************
    // **** ENTRY POINT *****************************************************
    // **********************************************************************

    // reminder about input parameter properties: 
    //   function MakeClickSortTable( { objList, initialSortCol, sortIcon } ) {

    // Create a container to hold the title (heading) and the HTML table
    var container = document.createElement("div");
    container.classList.add("clickSort");

    if ((objList === undefined) || (objList[0] === undefined)) {
        var msg = "Error: MakeClickSortTable requires parameter property 'objList', an array with >=1 object.";
        throw msg;
        return container; // The throw above will halt execution, but just in case that gets removed... 
    }

    var sortOrderPropName = initialSortCol || getFirstProp(objList[0]);
    
    var searchDiv = document.createElement("div");
    container.appendChild(searchDiv);
    searchDiv.innerHTML = "Filter by: ";

    // Create a filter text box for user input and append it.
    var searchInput = document.createElement("input");
    searchDiv.appendChild(searchInput);
    

    // Create a new HTML table tag (DOM object) and add that to the container.
    var newTable = document.createElement("table");
    container.appendChild(newTable);
    

    // To the HTML table, add a tr element to hold the headings of our table.
    var headerRow = document.createElement("tr");
    newTable.appendChild(headerRow);

    // ADD one column heading per property in the object list.
    var obj = objList[0];
    for (var propName in obj) {
        // propName will become the column heading. 
        // obj[propName] is a <td> created by a SortableTableUtils method. 
        // If that <td> has a sortOrder property = null, don't add sortability to this column. 
        headerRow.appendChild(makeHeader(propName, obj[propName], 1)); 
    }
     
    // After sorting objList by sortOrderPropName, create or replace the tbody 
    // populated with data from the sorted objList.
    addTableBody(newTable, objList, sortOrderPropName, 1);
    
    searchInput.onkeyup = function () {
        console.log("search filter changed to " + searchInput.value);
        addTableBodyFromSearch(newTable, objList, searchInput.value);
    };

    return container;

}  // MakeClickSortTable