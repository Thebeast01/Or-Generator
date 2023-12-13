let inputText = document.getElementById('input-box');
let imageBox = document.getElementById('image-box')
let image= document.getElementById('img');

function generateQR () {
  if(inputText.value.length > 0){
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value

    imageBox.classList.add('show-img')
  }
  else{
    inputText.classList.add('error');

    setTimeout(()=> {
        inputText.classList.remove('error')
    },1000)
  }
}