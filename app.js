var firstInput = document.getElementById("firstField");

var form = document.getElementById("firstForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
});


function addTodo() {

    if (firstInput.value == "") {
        alert("Enter valid task")
        return
    }

    var callingOrderList = document.getElementById("orderList")

    //creating li Element 
    var creatingListElement = document.createElement("li");
    creatingListElement.className = "listedItems"

    //Delete button
    var DeleteBtn = document.createElement("button");
    var DeleteBtnText = document.createTextNode("Delete");
    DeleteBtn.type = "button"
    DeleteBtn.className = "deleteRowBtn"
    DeleteBtn.setAttribute("onclick", "DeleteRow()")
    DeleteBtn.appendChild(DeleteBtnText);

    //Edit button
    var EditBtn = document.createElement("button");
    var EditBtnText = document.createTextNode("Edit");
    EditBtn.type = "button"
    EditBtn.className = "editRowBtn"
    EditBtn.setAttribute("onclick", "EditTodo()");
    EditBtn.appendChild(EditBtnText);

    //done status bar
    var doneStatus = document.createElement("Button");
    var doneStatusText = document.createTextNode("Done");
    doneStatus.type = "button"
    doneStatus.className = "DoneBtn"
    doneStatus.setAttribute("onclick", "doneTodo()")
    doneStatus.appendChild(doneStatusText);

    //appending into Li
    creatingListElement.textContent = firstInput.value.trim();
    creatingListElement.appendChild(DeleteBtn);
    creatingListElement.appendChild(EditBtn);
    creatingListElement.appendChild(doneStatus);

    //append li into ol
    callingOrderList.appendChild(creatingListElement);

    //field empty after entering value
    firstInput.value = "";

}

function DeleteRow() {
    event.target.parentNode.remove();
}

function EditTodo() {
    var targetingLi = event.target.parentNode;
    var targettingLiText = targetingLi.firstChild.textContent;
    
    // ✅ Purane buttons save karo
    var deleteBtn = targetingLi.querySelector(".deleteRowBtn");
    var editBtn = targetingLi.querySelector(".editRowBtn");
    var doneBtn = targetingLi.querySelector(".DoneBtn");
    
    // ✅ Li ko empty karo
    targetingLi.innerHTML = "";
    
    // ✅ Input field banao
    var editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = targettingLiText;
    editInput.className = "editInput";
    
    // ✅ Update Changes button banao
    var updateBtn = document.createElement("button");
    updateBtn.textContent = "Update Changes";
    updateBtn.type = "button";
    updateBtn.className = "updateBtn";
    
    // ✅ Update button click handler
    updateBtn.onclick = function() {
        if (editInput.value.trim() !== "") {
            // Li ko phir se normal state mein set karo
            targetingLi.innerHTML = "";
            targetingLi.textContent = editInput.value.trim();
            
            // Purane buttons wapis add karo
            targetingLi.appendChild(deleteBtn);
            targetingLi.appendChild(editBtn);
            targetingLi.appendChild(doneBtn);
        } else {
            alert("Task cannot be empty!");
            editInput.focus();
        }
    };
    
    // ✅ Input aur Update button add karo
    targetingLi.appendChild(editInput);
    targetingLi.appendChild(updateBtn);
    
    // ✅ Input ko focus karo
    editInput.focus();
}

function doneTodo() {
    var targettingLiElement = event.target.parentNode;
    var task = targettingLiElement.firstChild.textContent;
    targettingLiElement.style.textDecoration = "line-through";
    targettingLiElement.style.opacity = "0.6";
}

function DeleteAll() {
    var deleteAll = document.getElementById("orderList");
    deleteAll.innerHTML = ""
}
