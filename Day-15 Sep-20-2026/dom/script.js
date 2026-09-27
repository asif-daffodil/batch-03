console.log("Hello World!");
console.log(document);

const test = document.getElementById("test")

test.innerHTML = "<b>Hello Wordld!</b>"

document.getElementsByTagName("p")[0].innerText = "Ghor ghor"

document.getElementsByClassName("container")[0].textContent = "Meao Meao"
console.log(document.querySelector("p"));
console.log(document.querySelectorAll("p"));

test.classList.add("textBlue")
test.classList.remove("kuddus")
test.classList = "kamal jamal tomal"
test.setAttribute("width", "200")
console.log(test.getAttribute("data-info"))
test.style.backgroundColor = "aqua"
test.style.width = "200px"
test.style.cssText = `
    font-style: italic;
    font-weight: bold;
    background-color: aqua;
    width: 200px;
    padding: 10px
`

const myInfo = document.getElementById("myInfo")
const h1 = document.createElement("h1")
h1.textContent = "This is a heading"
const p = document.createElement("p")
p.textContent = "This is a paragraph."
const button = document.createElement("button")
button.setAttribute("id", "utsha")
button.textContent = "Read more"
myInfo.appendChild(h1)
myInfo.appendChild(p)
myInfo.appendChild(button)

const utsha = document.getElementById("utsha")

utsha.addEventListener("click", () => {
    alert("Utsha fakibaz")
})


localStorage.setItem("istiak", "Istiak taka deyna!")
localStorage.setItem("utsha", "Utsha fakibaz!")
console.log(localStorage.getItem("istiak"));

document.cookie = `robin=goriber bondhu; 30*24*60*60*1000; path=/`

