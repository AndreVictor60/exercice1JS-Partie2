var image = document.getElementById('image1'),
    result = document.getElementById('result');

image.addEventListener('mouseover', function(e) {
    result.innerHTML = "L'élément déclencheur de l'événement \"mouseover\" possède l'ID : " + e.target.id;
});
