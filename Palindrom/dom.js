// listeners
var form = document.getElementById('oneCellForm');
var itemList = document.getElementById("cellContainer");
var formInput = document.getElementById('firstForm');



// events
form.addEventListener("submit", addOneCell);
formInput.addEventListener("submit", createCells);
itemList.addEventListener("click", removeCell);
itemList.addEventListener("keyup", inputLetter);
// itemList.addEventListener("onchange", updateLetter);

//message 
const message = document.querySelector('.message');
const palindrome = "String is palindrome";
const notPalindrome = "String is not palindrome";

//create  number of cells from input
function createCells(e){
    e.preventDefault();
    var number = document.getElementById("inputFirst").value;
    inputNumber = parseInt(number);
    console.log(inputNumber);
    for(i=0; i< inputNumber ; i++)
    addOneCell(e);
}
// funkcije
function addOneCell(e){
    e.preventDefault();
    var li = document.createElement("li");
    li.className="cell";
    //create element input
    var newCell = document.createElement("input");
    //add class to input element
    newCell.className= "input";
    //add maxsize
    newCell.maxLength="1";
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
    if(e.target.classList.contains('removeCell')){
        if (confirm('Are you sure?')){
          var li = e.target.parentElement;
          itemList.removeChild(li);
     
          checkPalindrome();
        }
    }
}
// check letter 
var string = "";
function inputLetter(e){
    
    var checkLetter = /^[A-Za-z ]*$/;
    var letter = e.target.value;
    if(letter.match(checkLetter)){
          string += letter;
        // console.log(string);
        checkPalindrome(string);
    }else{
        alert("Input char must be A-Z or a-z and space");
        e.target.value = '';
    }
    return string;
    // console.log(string);
}

// console.log(string);
//updateLetter
// function updateLetter(e){
//     var old = document.getElementById('input').value;
//     old = e.target.value;
//     // var element = e.target.value;
//     // inputLetter();
//     console.log(old);
// }

// check palindrome 
function checkPalindrome(splitString){
    // remove space 
    splitString = splitString.replace(/\s+|\s+$/gm,'');
    // split to return array
    splitStringToArray = splitString.split("");
    // reverse() to reverse new created array
    var reverseArray = splitStringToArray.reverse();
    // join array
    var joinArray = reverseArray.join("");

    if(splitString == joinArray){
        message.innerHTML = palindrome;
    }
    else{
        message.innerHTML = notPalindrome;
    }

}
