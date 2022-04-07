const surprise = document.getElementById('surprise');

surprise.addEventListener('click', moozic)

const caption = document.getElementById('caption2');
const image = document.getElementById('image');
const sheesh = new Audio('scripts/sheesh.mp3');
const left = document.getElementById('left');
const main = document.getElementById('main');
const heading = document.getElementById('h2');


// functions
// random hex generator
function randomHexGen() {
  codes = [ "a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  let i, randomHex="#";
  for (i = 0; i < 6; i++) {
    randomHex = randomHex + codes[(Math.floor(Math.random() * 15))];
  }
  return randomHex;
}


//console.log(randomHexGen());

// sheesh button
function moozic() {
  sheesh.currentTime = 0;
  sheesh.play();
  image.src = "images/sheeshing.png";
    heading.innerText="Epilepsy warning";

    randomColorInterval = setInterval(()=>{
        caption.style.color=randomHexGen();
        surprise.style.color=randomHexGen();
        surprise.style.backgroundColor=randomHexGen();
        main.style.backgroundColor=randomHexGen();
        left.style.backgroundColor=randomHexGen();
        heading.style.color=randomHexGen();
        document.getElementsByClassName('navButton')[0].style.backgroundColor=randomHexGen();
        document.getElementsByClassName('navButton')[1].style.backgroundColor=randomHexGen(); 
        document.getElementsByClassName('navButton')[0].style.color=randomHexGen();
        document.getElementsByClassName('navButton')[1].style.color=randomHexGen();
        console.log(randomHexGen());
    }, 200);


  sheesh.addEventListener('ended', () => {
    console.log('ended');
      clearInterval(randomColorInterval);

    caption.innerText = 'i use arch btw';
    image.src = 'images/IMG_5018.png'
  });
}
