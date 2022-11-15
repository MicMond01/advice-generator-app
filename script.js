const url = "	https://api.adviceslip.com/advice"

let idEl = document.querySelector(".advice-id")
let quoteEl = document.querySelector(".advice")
let diceEl = document.querySelector(".btn");

const loadQuote = () => {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            idEl.innerHTML = `ADVICE #${response.slip.id}`
            quoteEl.innerHTML = `${response.slip.advice}`
        })
}

loadQuote()


diceEl.addEventListener('click', loadQuote)



// const fetchQuote = async () => {
//     response = await fetch(url)
//     const json = await response.json()


//     json.map((item, index) => {
//         mainEl.innerHTML += `<div class="wrapper">
//         <div class="container">
//           <div class="top">
//             <p class="advice-id">ADVICE #${item.slip.id}</p>
//             <h3 class="advice">
//               ${item.slip.advice}
//             </h3>
//           </div>
//           <div class="bottom">
//             <img src="images/pattern-divider-desktop.svg" alt="pattern">
//             <div class="btn">
//               <img src="images/icon-dice.svg" alt="dice">
//             </div>
//           </div>
//         </div>
//       </div>`
//     })
// }

// fetchQuote()