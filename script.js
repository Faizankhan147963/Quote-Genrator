let my_api = "https://api.quotable.io/random"
let text = document.querySelector(".text")
let author = document.querySelector(".author")
let new_button = document.querySelector(".new_button")
let twit_new = document.querySelector(".twit_new")
async function getApi(url) {
               let response = await fetch(url)
               var data = await response.json();
               console.log(data);
               const div_text = document.createElement("div")
               text.innerHTML=""
               text.innerHTML =`
                                             ${data.content}`;
               author.innerHTML =`
                                             Author :${data.author}`
               
}
getApi(my_api)

new_button.addEventListener("click",()=>{
               getApi(my_api)
})

twit_new.addEventListener("click",()=>{
               twit();
})

function twit(){
               window.open("https://twitter.com/intent/tweet?text="+  text.innerHTML ,"Tweet Window","width=600, height=600" )
}