// JS here
Parse.initialize("2GvM7qFl4qZFD8hcKWdSe3w8QOlhhMVLHVqvnXJf","KQEScvD9g9rqJrmqAvbla7c6blwTdK3CGBhgO7p9"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';

// (function(){
//     // 'use strict'

const newBtn = document.getElementById("newbtn");
const editBtns = document.querySelectorAll(".fa-edit");
const addFriendForm = document.getElementById("add-friend");
const editFriendForm = document.getElementById("edit-friend");
const friendList = document.querySelector("main ol");
const inputs = document.querySelectorAll("#add-friend input:not([type=submit])");
let thisRecord;

newBtn.addEventListener("click", function(event){
    event.preventDefault();
    addFriendForm.className = "add-friend-onscreen";
})

addFriendForm.addEventListener("submit", function(event){
    event.preventDefault();
    // addFriendForm.className = "add-friend-offscreen";
    addFriend();
})

async function addFriend(){
    const newFriend = {};

    for(let i=0; i<inputs.length; i++){
        let key = inputs[i].getAttribute('name');
        let value = inputs[i].value;
        newFriend[key] = value;
    }

    if (newFriend.fname !="" && newFriend.lname !="" && newFriend.email !="") {
        const newFriendData = new Parse.Object('Friends');
        newFriendData.set('fname', newFriend.fname);
        newFriendData.set('lname', newFriend.lname);
        newFriendData.set('email', newFriend.email);
        newFriendData.set('facebook', newFriend.facebook);
        newFriendData.set('twitter', newFriend.twitter);
        newFriendData.set('instagram', newFriend.instagram);
        newFriendData.set('linkedin', newFriend.linkedin);
    } else {
        addFriendForm.className = "add-friend-offscreen";
    }

    try {
        const result = await newFriendData.save();
        // console.log('Friends created', result);
        resetFormFields();
        addFriendForm.className = "add-friend-offscreen";
        friendList.innerHTML = '';
        displayFriends();
    } catch (error) {
        console.error('Error while creating Friend: ', error);
    }
}

function resetFormFields(){
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('facebook').value = 'https://facebook.com';
    document.getElementById('twitter').value = 'https://twitter.com';
    document.getElementById('instagram').value = 'https://instagram.com';
    document.getElementById('linkedin').value = 'https://linkedin.com';
}

// for(let i=0; i<editBtns.length; i++){
//     editBtns[i].addEventListener("click", function(event){
//         event.preventDefault();
//         addFriendForm.className = "add-friend-onscreen";
//     })
// }

document.addEventListener('click',function(event){
    if (event.target.matches('.fa-edit')) {
        // addFriendForm.className = "add-friend-onscreen";
        thisRecord = event.target.getAttribute('id').slice(2);
        // console.log(thisRecord);
        setForm(thisRecord);
    }
}, false)

async function setForm(recordID){
    const friends = Parse.Object.extend('Friends');
    const query = new Parse.Query(friends);
    query.equalTo('objectID', recordID);

    try {
        const results = await query.find();
        results.forEach(function(thisFriend){
            const lname = thisFriend.get('lname');
            const fname = thisFriend.get('fname');
            const email = thisFriend.get('email');
            const facebook = thisFriend.get('facebook');
            const twitter = thisFriend.get('twitter');
            const instagram = thisFriend.get('instagram');
            const linkedin = thisFriend.get('linkedin');
    
            document.getElementById('fname-edit').value = fname;
            document.getElementById('lname-edit').value = lname;
            document.getElementById('email-edit').value = email;
            document.getElementById('facebook-edit').value = facebook;
            document.getElementById('twitter-edit').value = twitter;
            document.getElementById('instagram-edit').value = instagram;
            document.getElementById('linkedin-edit').value = linkedin;
        })
        editFriendForm.className = "add-friend-offscreen";
    } catch (error) {
        console.error('Error while fetching friends', error);
    }
}

async function updateRecord(recordID){
    const theFields = document.querySelectorAll("#edit-friend input:not([type=submit])")
    const editedRecord = {};
    let key;
    let value;

    for (let i = 0; i < theFields.length; i++) {
        key = theFields[i].getAttribute('name');
        value = theFields[i].value;
        editedRecord[key] = value;
    }

    const friends = Parse.Object.extend('Friends');
    const query = new Parse.Query(friends);

    try {
        const object = await query.get(recordID);
        object.set('fname', editedRecord.fname);
        object.set('lname', editedRecord.lname);
        object.set('email', editedRecord.email);
        object.set('facebook', editedRecord.facebook);
        object.set('twitter', editedRecord.twitter);
        object.set('instagram', editedRecord.instagram);
        object.set('linkedin', editedRecord.linkedin);
        
        try {
            await object.save();
            editFriendForm.className = "add-friend-offscreen";
            friendList.innerHTML = '';
            displayFriends();
        } catch (error) {
            console.error('Error while updating friends', error);
        }
    } catch (error) {
        console.error('Error while retrieving object friends', error);
    }
}

editFriendForm.addEventListener("submit", function(event){
    event.preventDefault();
    // editFriendForm.className = "add-friend-offscreen";
    updateRecord(thisRecord);
})

async function displayFriends() {
    const friends = Parse.Object.extend('Friends');
    const query = new Parse.Query(friends);
    
    // try{
        const results = await query.ascending('lname').find();
        // console.log(results);

        results.forEach(function(eachFriend){
            const id = eachFriend.id;
            const lname = eachFriend.get('lname');
            const fname = eachFriend.get('fname');
            const email = eachFriend.get('email');
            const facebook = eachFriend.get('facebook');
            const twitter = eachFriend.get('twitter');
            const instagram = eachFriend.get('instagram');
            const linkedin = eachFriend.get('linkedin');

            const theListItem = document.createElement("li");
            theListItem.setAttribute("id", `r-${id}`);
            theListItem.innerHTML = `
                <div class="name">${fname} ${lname}</div>
                <div class="email">
                    <i class="fas fa-envelope-square"></i> ${email}
                </div>
                <div class="social">
                    <a href="${facebook}"><i class="fab fa-facebook-square"></i></a>
                    <a href="${twitter}"><i class="fab fa-twitter-square"></i></a>
                    <a href="${instagram}"><i class="fab fa-instagram"></i></a>
                    <a href="${linkedin}"><i class="fab fa-linkedin"></i></a>
                </div>
                <i class="fas fa-edit" id="e-${id}"></i>
                <i class="fas fa-times-circle" id="d-${id}"></i>`;
                friendList.append(theListItem);
        });
}

displayFriends();

// })