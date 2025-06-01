const result = document.getElementById("terminal");

let lastAnimalIndex = -1;
let lastAsciiIndex = -1;
let lastOracleIndex = -1;

// ASCII arrays (Button 1)
const figurines1 = [
  "(¬‿¬)", 
  "(づ｡◕‿‿◕｡)づ", 
  "(╯°□°）╯︵ ┻━┻", 
  "ʕ•ᴥ•ʔ", 
  "¯\\_(ツ)_/¯",
  "（＾・ω・＾❁）", 
  "≧◉◡◉≦", 
  "⊂(◉‿◉)つ", 
  "ʕ •́؈•̀ ₎", 
  "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  "(ノಠ益ಠ)ノ彡┻━┻", 
  "ಥ_ಥ", 
  "（╯°□°）╯︵( .o.)", 
  "(✿◠‿◠)", 
  "(ง •̀_•́)ง"
];

//Button 2 array
const figurines2 = [
  {
    ascii: "(╯°□°）╯︵🐋", // Blue whale
    fact: "The blue whale is the largest animal to have ever existed on Earth."
  },
  {
    ascii: "( ´•̥̥̥ω•̥̥̥` )🦫", // Capybara
    fact: "Capybaras are the largest rodents in the world and are incredibly social."
  },
  {
    ascii: "(๑˃̵ᴗ˂̵)و 🐠", // Seahorse
    fact: "Male seahorses carry and birth their young — a rare trait in the animal kingdom."
  },
  {
    ascii: "ฅ^•ﻌ•^ฅ 🐈", // Lynx
    fact: "Lynx have excellent night vision and can hunt in complete darkness."
  },
  {
    ascii: "(ง •̀_•́)ง 🐙", // Octopus 
    fact: "Octopuses have three hearts and can regenerate lost limbs."
  }
];

//Button 3 array
const oracleMessages = [
  "It is already unfolding.",
  "Ask again beneath the waning moon.",
  "You know the answer. Trust the echo.",
  "A path closes so another may open.",
  "Not yet — prepare in silence.",
  "Only the shadow knows what comes next.",
  "It will cost you more than you expect.",
  "Yes, but not in the way you think.",
  "Turn inward before you move outward.",
  "You must unlearn first.",
  "When the veil thins, it will be clear.",
  "Let it go. If it returns, it is real.",
  "The signs are not always gentle.",
  "Listen to the pattern, not the noise."
];



// Button handlers
document.querySelector(".button1").addEventListener("click", () => {
  let index;

  do {
    index = Math.floor(Math.random() * figurines1.length);
  } while (index === lastAsciiIndex);

  lastAsciiIndex = index;

  result.innerText = figurines1[index];
});


document.querySelector(".button2").addEventListener("click", () => {
  let index;

  do {
    index = Math.floor(Math.random() * figurines2.length);
  } while (index === lastAnimalIndex); 

  lastAnimalIndex = index; 

  const chosen = figurines2[index];
  result.innerText = `${chosen.ascii}\n${chosen.fact}`;
});



document.querySelector(".button3").addEventListener("click", () => {
  let index;
  do {
    index = Math.floor(Math.random() * oracleMessages.length);
  } while (index === lastOracleIndex);
  lastOracleIndex = index;

  result.innerText = oracleMessages[index];
});

//clear button
document.querySelector(".clear-button").addEventListener("click", () => {
  // Temporarily hide the terminal, then show again to force redraw
  result.style.display = "none";
  result.offsetHeight; // trigger reflow
  result.style.display = "flex";
  result.textContent = ""; // more reliable than innerText
});




