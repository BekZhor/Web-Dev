const input = document.getElementById("input");

const output = document.getElementById("button");

const list = document.getElementById("list");

output.onclick = myClick;



function myClick() {
    const value = input.value.trim();
    if (!value) {
        alert("You must write something!");
    } else {
        const li = document.createElement("li");
        li.innerHTML = `<input id="checked" type="checkbox"> <span>${value}</span> <span class="close">A</span>`;
        list.appendChild(li);
    }
    input.value = "";
}






list.addEventListener("click", function(e){
    if(e.target.tagName == "INPUT") {
        if(e.target.checked) {
            e.target.nextElementSibling.style.textDecorationLine = "line-through";
        }else{
            e.target.nextElementSibling.style.textDecorationLine = "none";
        }

    }else if(e.target.classList.contains("close")) {
        e.target.parentElement.remove();
    }
});