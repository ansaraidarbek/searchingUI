const myPage = "home"
let state = [myPage];
let page = 0;

const form  = document.querySelector("form");
const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const iframe = document.querySelector("iframe");
const img = document.querySelector("img");

function isUrlValid(str) {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?'+ // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
      'i'
    );
    return pattern.test(str);
}

const listing = (text, i) => {
    img.classList.remove("revert");
    if (isUrlValid(text[i]) || i === 0){
        iframe.src = text[i];
    } else {
        img.classList.add("revert");
    }
    console.log(state, text, i)
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    page++;
    state.push(input.value);
    listing(state, page);
    input.value = ''
});

buttons[0].addEventListener("click", (e) => {
    e.preventDefault();
    if (page > 0) {
       page --;
    }
    listing(state, page);
})

buttons[1].addEventListener("click", (e) => {
    e.preventDefault();
    listing(state, page);
})

buttons[2].addEventListener("click", (e) => {
    e.preventDefault();
    if (page < state.length - 1){
        page++;
    }
    listing(state, page);
})