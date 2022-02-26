let addbtn = document.querySelector('#addbtn');
let title = document.querySelector('#title');
let message = document.querySelector('#msg');


addbtn.addEventListener('click', (e) => {
    if(title.value == "" || message.value == "") {
        return alert("Pls write both title and message");
    }   http://localhost/competition/
});

let profile = {
    name: "Jubaer Ahmad",
    age: 24,
    Occupation: "Business"
};

let json = JSON.stringify(profile);

localStorage.setItem("user", json);

let myObj = JSON.parse(json);

localStorage.setItem("user", myObj);


console.log(myObj);

