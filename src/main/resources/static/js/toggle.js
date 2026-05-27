console.log("Hello,from JS");


// var users = [
//     {"name" : "John", "gender" : "Male", "img" : "img/john.png"},
//     {"name" : "Jane", "gender" : "Female", "img" : "img/jane.png"}
// ];

// var currentUserIndex = 0;

// function toggleCard(){
//     currentUserIndex =(currentUserIndex + 1) % 2;
//     var user = users[currentUserIndex];

//     // DOM Manipulation
//     document.getElementById("userImage").src = user.img;
//     document.getElementById("userGender").innerHTML = user.gender;
//     document.getElementById("userName").innerHTML = user.name;
// }

//json

//object
//var user={"name" : "John Doe", "gender":"Male"};
//console.log{user.name};
//console.log{user.gender};

//Array
//var userArray=][{"name" : "John Doe","gender":"Male"},{"name":"gender":"Female"}];
//console.log{userArray.length};
//console.log{janeUser.name};

var currentUserIndex=0;

var userArray=[
    {"name" : "John", "gender" : "Male", "img" : "image/john.png"},
    {"name" : "Jane", "gender" : "Female", "img" : "image/jane.png"}
];

function toggleUser(){
    currentUserIndex=1-currentUserIndex;
    var nextUser=userArray[currentUserIndex];
    displayUser(nextUser);
}
//DOM Manipulation
//HTML --> DOM {Document Object Model}
function displayUser(user){

     document.getElementById("userImage").src = user.img;
    document.getElementById("userGender").textContent = user.gender;
    document.getElementById("userName").textContent = user.name;


}