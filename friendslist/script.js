// JS here

const newBtn = document.getElementById("newbtn");
const editBtns = document.querySelectorAll(".fa-edit");
const addFriendForm = document.getElementById("add-friend");
const editFriendForm = document.getElementById("edit-friend");


newBtn.addEventListener("click", function(event){
    event.preventDefault();
    addFriendForm.className = "add-friend-onscreen";
})

addFriendForm.addEventListener("submit", function(event){
    event.preventDefault();
    addFriendForm.className = "add-friend-offscreen";
})


for(let i=0; i<editBtns.length; i++){
    editBtns[i].addEventListener("click", function(event){
        event.preventDefault();
        editFriendForm.className = "edit-friend-onscreen";
    })
}

editFriendForm.addEventListener("submit", function(event){
    event.preventDefault();
    editFriendForm.className = "edit-friend-offscreen";
})