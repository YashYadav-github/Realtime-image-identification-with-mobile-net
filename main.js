function preload() {

}

function setup() {
  canvas = createCanvas(275, 275);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function draw() {
  image(video, 0, 0, 275, 275)
  classifier.classify(video, gotResults);
}

function modelLoaded(){
  console.log("Model Loded");
}

function gotResults(error, results) {
  if (error){
    console.error(error);
  }
  else{
    // console.log(results);
    document.getElementById('result_object_name').innerHTML = results[0].label;
    document.getElementById('result_object_accuracy').innerHTML = results[0].confidence;
  }
}


