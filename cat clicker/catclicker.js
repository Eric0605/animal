
var clicknumber = 0;
function catpic(thisImg) {
    var img1 = document.createElement("img");
    img1.src = "https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg";
    img1.style.height = '10%';
    img1.style.width = '33%';
    var img2 = document.createElement("img");
    img2.src = "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg";
    img2.style.height = '5%';
    img2.style.width = '33%';
    document.getElementById('cat').appendChild(img1);
    document.getElementById('cat').append('DogA');
    document.getElementById('cat').appendChild(img2);
    document.getElementById('cat').append('DogB');
    clicknumber ++;
    document.getElementById('cat').append(clicknumber);
}
