// ADD NEW ITEM TO END OF LIST
//I figured I was grabbing a list of ul
//instead of the actual ul with the console
//thats why for list I an grabbing the first and only element
var list = document.getElementsByTagName("ul")[0];
var item = document.createElement("li");
item.appendChild(document.createTextNode("cream"));
item.setAttribute("id", "five");
list.appendChild(item);
console.log(list);


// ADD NEW ITEM START OF LIST
var item = document.createElement("li");
item.appendChild(document.createTextNode("kale"));
item.setAttribute("id", "zero");
list.before(item);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var groceries = document.getElementsByTagName("li");
var len = groceries.length
for(var i=0; i<len; i++){
    groceries[i].setAttribute("class","cool")
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
document.getElementsByTagName("h2")[0].textContent = "Buy groceries (" + len + ")";
