/**
* @link https://code.google.com/archive/p/crypto-js/downloads
* @link https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/aes-min.js
* @link https://qastack.ru/programming/18279141/javascript-string-encryption-and-decryption
* @link https://coderoad.ru/18279141/JavaScript-%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D0%B4%D0%B5%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D1%80%D0%BE%D0%BA
* @link https://www.delftstack.com/ru/howto/javascript/javascript-encryption/ 
*/

const encform = document.forms.meencrypter
const decform = document.forms.medecrypter
const decryptres = document.getElementById('decryptres')
const clipButton = document.getElementById('clipButton')
const el_down = document.getElementById("geeks");
const outputColors = {i: 'green', w: 'orange', a: 'red', t: '#333'}

clipButton.addEventListener('click', () => putClipboard())

encform.addEventListener('submit', (e)=> {
  e.preventDefault()
  let entext = encform.entext.value
  let enpass = encform.enpass.value
  if ( entext && enpass.length > 4) {
    fillOutput(CryptoJS.AES.encrypt(entext, enpass), 'i')
  } else {
    fillOutput('just write something...', 'w')
  }
})

decform.addEventListener('submit', (e)=> {
  e.preventDefault()
  let detext = decform.detext.value
  let depass = decform.depass.value
  if ( detext && depass.length > 4) {
    fillOutput(CryptoJS.AES.decrypt(detext, depass).toString(CryptoJS.enc.Utf8), 'i')
  } else {
    fillOutput('Something went wrong', 'a')
  }
})

function fillOutput(text, type = 't') {
  decryptres.innerHTML = `${text}`
  type == 'i' ? clipButton.disabled = false : clipButton.disabled = true
  decryptres.style.color = outputColors[type] || 'black'
}

function putClipboard() {
  navigator.clipboard.writeText(decryptres.innerHTML)
}

function generateP() {
  var pass = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
  for (i = 1; i <= 24; i++) {
    var char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char)
  }

  return pass;
}

function gfg_Run() {
  el_down.innerHTML = generateP();
}