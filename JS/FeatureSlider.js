Images = ["Sliderimg1.jpg", "Sliderimg2.jpg"];

let index = 0;
document.getElementById("img").src = `/RespWeb1/JS/Img/${Images[index]}`;

const next = () => {
    index++;
    if (index == Images.length) {
        index = 0;
    }
    document.getElementById("img").src = `/RespWeb1/JS/Img/${Images[index]}`;
};
setInterval(next, 3000);


