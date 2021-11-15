// listeners
var form = document.getElementById('oneCellForm');
var itemList = document.getElementById("cellContainer");
var li = itemList.getElementsByTagName("li");
var formInput = document.getElementById('firstForm');



// events
form.addEventListener("submit", addOneCell);
formInput.addEventListener("submit", createCells);
itemList.addEventListener("click", removeCell);
itemList.addEventListener("input", inputLetter);
// itemList.addEventListener("select", updateLetter);

//message 
const message = document.querySelector('.message');
const palindrome = "String is palindrome";
const notPalindrome = "String is not palindrome";

//create  number of cells from input
function createCells(e){
    e.preventDefault();
    var number = document.getElementById("inputFirst").value;
    inputNumber = parseInt(number);
    // console.log(inputNumber);
    for(i=0; i< inputNumber ; i++)
    addOneCell(e);
}
// funkcije
function addOneCell(e){
    e.preventDefault();
    var li = document.createElement("li");
    li.className="cell";
    li.id="cell";
    //create element input
    var newCell = document.createElement("input");
    //add type to input element
    newCell.type= "text";
    //add class to input element
    newCell.className= "input";
    //add id to input element
    // newCell.setAttribute("id","input");
    newCell.id = "input";
    //add maxsize
    newCell.maxLength="1";
     //add size
     newCell.size="1";
    // add delete button 
    var delBtn=document.createElement("button");
    // add class to button 
    delBtn.className="removeCell";
    // add child to button 
    delBtn.appendChild(document.createTextNode('X'));
    // append del button to input
    // newCell.appendChild(delBtn);
    // append input to div
    li.appendChild(newCell);
    li.appendChild(delBtn);
    itemList.appendChild(li);
}
// delete cell
function removeCell(e){
    e.preventDefault();
    var string = "";
    if(e.target.classList.contains('removeCell')){
        // if (confirm('Are you sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
        items = itemList.getElementsByTagName("li");
        Array.from(items).forEach(function(item){
            var itemLetter = item.firstChild.value;
            string += itemLetter;
            checkPalindrome(string);
        });
    }
}
// check letter 

function inputLetter(e){
    var checkLetter = /^[A-Za-z ]*$/;
    var string = "";
    // vrati mi poziciju ako je prazna upisuj
    if (e.target.value.match(checkLetter)){
        var letter = e.target.value;
        console.log(letter);
        items = itemList.getElementsByTagName("li");
        Array.from(items).forEach(function(item){
            var itemLetter = item.firstChild.value;
            string += itemLetter;
            console.log(string);
            checkPalindrome(string);
        })
        }else{
            alert("Input char must be A-Z or a-z and space");
            e.target.value = "";
}
}

// check palindrome 
function checkPalindrome(splitString){
    // remove space 
    splitString = splitString.replace(/\s+|\s+$/gm,'');
    // split to return array
    splitStringToArray = splitString.split("");
    // remove space
    // splitStringToArray = splitStringToArray.filter(function(str) {
    //     return /\S/.test(str);
    // });
    // console.log(splitStringToArray);
    // reverse() to reverse new created array
    var reverseArray = splitStringToArray.reverse();
    // join array
    var joinArray = reverseArray.join("");

    if(splitString === joinArray){
        // console.log(splitString);
        // console.log(joinArray);
        message.innerHTML = palindrome;
    }
    else{
        // console.log(splitString);
        // console.log(joinArray);
        message.innerHTML = notPalindrome;
    }
    
}

