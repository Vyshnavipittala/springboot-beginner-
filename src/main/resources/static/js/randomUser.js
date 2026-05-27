//DOM Manipulation
//HTML --> DOM {Document Object Model}
function displayUser(user){

     document.getElementById("userImage").src = user.img;
    document.getElementById("userGender").textContent = user.gender;
    document.getElementById("userName").textContent = user.name;


}
function getANDisplayNextRandomUser(){
    fetch("https://randomuser.me/api")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
          var userData=data.results[0];
          var myUserObject={};
          myUserObject.name= userData.name.title+" "+userData.name.first+" "+userData.name.last;
          myUserObject.gender= userData.gender;
          myUserObject.img= userData.picture.large;
          displayUser(myUserObject);
    })
    .catch(function(err){
            console.log("ERROR",err);
    });

}