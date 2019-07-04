const express = require('express')
const bodyParser = require('body-parser');
const w2v = require('word2vec');
const app = express()

function getMostSimilarWords(value) {
  return new Promise(function (resolve, reject) {
    let similarWords = [];
    w2v.loadModel('word2vec-50size.txt', function (error, model) {
      console.log("Get most similar words:");
      words = model.mostSimilar(value, 10);
      if (words){
        resolve(words);
      } else {
        reject(Error("It broke"));
      }
    });

  });
}

app.get('/', function (req, res) {
  res.render('index');
})


app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/', function (req, res) {
  getMostSimilarWords(req.body.word).then(function (result) {
    console.log("result: " + typeof(result)); // "Stuff worked!"
    res.render('index', {
      similarWords: result,
      error: null
    });
  }, function (err) {
    console.log(err); // Error: "It broke"
  });

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.set('view engine', 'ejs')

app.use(express.static('public'));