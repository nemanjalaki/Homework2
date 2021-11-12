// GET ELEMENTS ///////////////////////////
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
var items = itemList.getElementsByTagName('li');

// console.log(form);

// ALL EVENTS ////////////////////////
// form event
form.addEventListener("submit",addItem);
itemList.addEventListener("click",removeItem);
filter.addEventListener("keyup",filterItems);
itemList.addEventListener("click",searchShow);
// document.addEventListener("keydown", focusFunction);
// document.addEventListener("keydown", keyUpDown);
document.addEventListener("keydown", iterateItemsUpDown);


// itemList.addEventListener("click",focusElement);

// FUNCTIONS ////////////////////////////////
// ADD ITEM FUNCTION

function addItem(e){
    e.preventDefault();
    // var items = Array.from(items);//items array
    // localStorage.setItem("item", JSON.stringify(items));//store items

    // get input value
    var newItem = document.getElementById("item").value;  
    // console.log(newItem);
    // create list element
    var li = document.createElement("li");
    // add class to li element
    //add tabindex
    li.tabIndex="0";
    li.className= "list-group-item";
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //append li to list
    itemList.appendChild(li);
    // add delete button
    var deleteBtn = document.createElement("button");
    // add class to delete button
    deleteBtn.className= "btn btn-danger btn-sm float-right delete";
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append deleteBtn to li
    li.appendChild(deleteBtn);

}
// REMOVE ITEM 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if (confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// FILTER ITEM

function filterItems(e){
    //convert input text to lowercase
    var text = e.target.value.toLowerCase();
    //get items
    var items = itemList.getElementsByTagName('li');
    // convert html to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }
        else{
            item.style.display= "none";
        }
    })
}

/////// searchShow

function searchShow(e){
    // event.preventDefault;
    //get item text
    var itemText = e.target.childNodes[0].nodeValue;
    // console.log(itemText);
    // add itemText to search
    var inputSearch = document.getElementById('filter').value=itemText;
    // console.log(itemText);

    //convert input text to lowercase
    var text = itemText.toLowerCase();
    //get items
    var items = itemList.getElementsByTagName('li');
;    // convert html to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        // console.log(item);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }
        else{
            item.style.display = "";
        }
    })
     
}

// tasterKeys
i = -1;
items = Array.from(items);
n = items.length; 

function iterateItemsUpDown(e){
   
    var k = e.key;
    if(k=='ArrowUp'||k=='ArrowDown'){
    
          i = (k=='ArrowDown'? ++i : --i) < 0? n-1 : i%n;
            // console.log(items[i]);
            items[i].style.display= "";
            items[i].focus();
            
            var inputSearch = document.getElementById('filter').value=items[i].childNodes[0].nodeValue;

        } 
      }














