const piano = document.querySelector("#piano");
const pianoКeys = document.querySelectorAll("div[data-letter]");
const url = "./assets/audio/c.mp3";
function playAudio(note) {
  //console.log(event.target);
  const audio = new Audio();
  audio.src = `assets/audio/${note}.mp3`;
  audio.currentTime = 0;
  audio.play();
}
function b_click() {
  console.log(event.target);
  const note = event.target.dataset.note;
  if (event.target.classList.contains("piano-key")) {
    playAudio(note);
  }
}
function d_click() {
  console.log(event.key);  
  //const letter=document.querySelector("div[data-letter=${event.key}]"
  key = event.key;
  console.log(Object.prototype.toString.call(key))
  //console.log("key="+key)
  let div_array = Array.prototype.slice.call(pianoКeys);
  let arr_letter=[]
  //console.log(pianoКeys.dataset.letter);
  for (let i = 0; i < div_array.length; i++) {
   arr_letter.push(String(div_array[i].dataset.letter));
   console.log(Object.prototype.toString.call(arr_letter[i]))
  }
  console.log(String(key))
  console.log(arr_letter.indexOf(String(key)))
  n_index=arr_letter.indexOf(String(key))
  //console.log(document.querySelectorAll("div[data-letter]"))
  if (div_array.includes(key)) {
    playAudio();
  }
  note=div_array[n_index].dataset.note
  console.log("note="+note)
  playAudio(note)
}
piano.addEventListener("click", b_click);
window.addEventListener("keydown", d_click);
