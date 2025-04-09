let name = "lucas";
let age = 19;
let isStudent = true;
let ageMultiply = age*7

let friends = ["marco", "tomas", "india"];

let friend = {
    name: "marco",
    age: 22,
    isStudent: true
}

let friendsArray = [
    {
        name: "marco",
        age: 22,
        isStudent: true
    },
    {
        name: "tomas",
        age: 19,
        isStudent: true
    },
    {
        name: "india",
        age: 17,
        isStudent: true
    }
]

let dark = false;



console.log("Hello my name is" , name , ", i'm" , age , "years old" , isStudent ? "and I study" : "and I don't study"  )
console.log("Hello my friend name is" , friend.name , ", he's" , friend.age , "years old" , friend.isStudent ? "and he study" : "and he don't study"  )

for (let i = 0; i < friendsArray.length; i++) {
    console.log("Hello my friend name is" , friendsArray[i].name , ", he's" , friendsArray[i].age , "years old" , friendsArray[i].isStudent ? "and he study" : "and he don't study"  )
}






document.getElementById("turnOn").addEventListener("click", function() {
    if (!dark) {
        document.body.style.transition = "background 2s";
        document.body.style.backgroundColor = "black";
        document.getElementById("lamp").style.transition = "2s"
        document.getElementById('lamp').src='bulb-off.png';
       

        dark = true;
    } else {
        document.body.style.transition = "background 2s";
        document.body.style.backgroundColor = "white";
        document.getElementById("lamp").style.transition = "2s";
        document.getElementById('lamp').src='bulb-on.png';
        dark = false;
    }
        
});



