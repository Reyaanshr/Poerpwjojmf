Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("webacm");

Webcam.attach( '#camera' );

function takeSnapshot(){
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">'
    });
}

console.log('ml5 version: ', ml5.version);

ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ttw5iy7c_/model.json',modelLoaded);

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

