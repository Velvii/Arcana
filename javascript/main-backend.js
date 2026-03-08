

function popup(contents, closePrompt){
    popupBackground = document.body.appendChild(document.createElement("div"))
    popupBackground.className = "popupBackground"
    
    popupBorder = popupBackground.appendChild(document.createElement("div"))
    popupBorder.className = "popupBorder"

    popupEl = popupBorder.appendChild(document.createElement("div"))
    popupEl.className = "popup"

    popupText = popupEl.appendChild(document.createElement("p"))
    popupText.textContent = contents

    popupClose = popupEl.appendChild(document.createElement("button"))
    popupClose.className = "popupClose"
    popupClose.textContent = closePrompt
    document.querySelector(".popupClose").onclick = async function() {
        const bg = document.getElementsByClassName("popupBackground")[0];
        bg.style.animation = "popupBackgroundOutro .5s cubic-bezier(0.33, 1, 0.68, 1) forwards";
        bg.querySelector(".popupBorder").style.animation = "none";
        bg.querySelector(".popup").style.animation = "none";
        await delay(500);
        bg.remove();
    }
}
document.querySelectorAll(".disabled").forEach(btn => {
    btn.onclick = function(){
        popup("This is currently not available","Accept")
    }
});

if (document.getElementById("mascot")) {
    document.getElementById("mascot").onclick = function(){
        popup("bro dont touch him","Damn sorry")
    }
}

if (document.getElementById("clock")) {
    document.getElementById("clock").onclick = function(){
        popup("sorry lol I havent done this yet","???")
    }
}