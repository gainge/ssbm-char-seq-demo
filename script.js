STOCK_ICONS = [
  "res/DrMarioBlack.png",
  "res/MarioOriginal.png",
  "res/LuigiOriginal.png",
  "res/BowserOriginal.png",
  "res/PeachOriginal.png",
  "res/YoshiOriginal.png",
  "res/DonkeyKongOriginal.png",
  "res/CaptainFalconOriginal.png",
  "res/GanondorfOriginal.png",
  "res/FalcoOriginal.png",
  "res/FoxOriginal.png",
  "res/NessOriginal.png",
  "res/IceClimbersOriginal.png",
  "res/KirbyOriginal.png",
  "res/SamusOriginal.png",
  "res/ZeldaOriginal.png",
  "res/LinkGreen.png",
  "res/YoungLinkGreen.png",
  "res/PichuOriginal.png",
  "res/PikachuOriginal.png",
  "res/JigglyPuffOriginal.png",
  "res/MewtwoOriginal.png",
  "res/Game & Watch Original.png",
  "res/MarthOriginal.png",
  "res/RoyOriginal.png",
];

NUM_CHARACTERS = 10000;



const formatHex = (n) => {
  return n.toString(16).padStart(8, '0');
}

/* RNG Seed Functions */
const rngAdv = (seed) => {
  return ((seed * 214013) + 2531011) % 2**32;
}

const rngInt = (seed, max) => {
  let n = Math.floor(seed / 2**16);
  return Math.floor((max * n) / 2**16)
}


const charContainer = document.getElementById('characters');

let seed = 1;


for (let i = 0; i < NUM_CHARACTERS; i++) {
  const charIcon = document.createElement('img');
  charIcon.classList.add('stock-icon');
  charIcon.setAttribute('src', STOCK_ICONS[rngInt(seed, 25)]);
  charIcon.setAttribute('title', `0x${formatHex(seed)}`);
  charContainer.appendChild(charIcon);
  seed = rngAdv(seed);
}