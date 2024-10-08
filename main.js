

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("you must input something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let sapn = document.createElement("span");
        sapn.innerHTML = "\u00d7";
        li.appendChild(sapn);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();