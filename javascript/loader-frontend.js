const delay = ms => new Promise(res => setTimeout(res, ms));
let loader = 1
async function loader1(playState) {
    if (playState == "intro"){
        loaderDiv = document.body.appendChild(document.createElement("div"))
        loaderDiv.id = "loader1Intro"
        await delay(500)
        loaderDiv.remove()
    }
    if (playState == "outro"){
        loaderDiv = document.body.appendChild(document.createElement("div"))
        loaderDiv.id = "loader1Outro"
        await delay(500)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (loader == 1){
        loader1("intro")
    }
}, false);


const header = document.getElementById("header")
if (header) {
    Array.from(header.children).forEach(child => {
        child.onclick = async function() {
            if (loader == 1){
                await loader1("outro")
            }
            if (child.id == "home"){
                await delay(500)
                window.location.href="/index.html"
            }
            if (child.id == "options"){
                await delay(500)
                window.location.href="/html/options.html"
            }
        }
    })
}

const returnBtn = document.getElementById("return")
if (returnBtn) {
    returnBtn.onclick = async function() {
        if (loader == 1){
            await loader1("outro")
        }
        await delay(500)
        window.location.href="/index.html"
    }
}