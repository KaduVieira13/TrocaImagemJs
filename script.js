var imagem = 1;
var ImgSrcArray = [
    "img/time1.jpg",
    "img/time2.jpg",
    "img/time3.jpg",
    "img/time4.jpg"
];

function trocar() {

    if (imagem == ImgSrcArray.length) {
        imagem = 0;
    }
    document.getElementById("timesSp").src = ImgSrcArray[imagem];
    imagem++;

}



