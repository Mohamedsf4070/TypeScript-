"use strict";
exports.__esModule = true;
var Image = /** @class */ (function () {
    function Image(image, caption) {
        this.Url = image;
        this.caption = caption;
    }
    return Image;
}());
var list = [];
var image1 = new Image("Mosque1.jpg", "Mosque1");
list[1] = image1;
var image2 = new Image("Mosque2.jpg", "Mosque2");
list[2] = image2;
var image3 = new Image("Mosque3.jpg", "Mosque3");
list[3] = image3;
var image4 = new Image("Mosque4.jpg", "Mosque4");
list[4] = image4;
var image5 = new Image("Mosque5.jpg", "Mosque5");
list[5] = image5;
var image6 = new Image("Mosque6.jpg", "Mosque6");
list[6] = image6;
var image7 = new Image("Mosque7.jpg", "Mosque7");
list[7] = image7;
var image8 = new Image("Mosque8.jpg", "Mosque8");
list[8] = image8;
var image9 = new Image("Mosque9.jpg", "Mosque9");
list[9] = image9;
var image10 = new Image("Mosque10.jpg", "Mosque10");
list[10] = image10;
var index = 1;
function ChangeImageToPrevious() {
    var img = document.getElementById('imgdisp');
    if (index == 1) {
        index = 11;
    }
    index--;
    img.src = list[index].Url;
    var cap = document.getElementById('captiondisp');
    cap.innerHTML = "<p>".concat(list[index].caption, "</p>");
}
function ChangeImageToNext() {
    var img = document.getElementById('imgdisp');
    if (index == 10) {
        index = 0;
    }
    index++;
    img.src = list[index].Url;
    var cap = document.getElementById('captiondisp');
    cap.innerHTML = list[index].caption;
}
