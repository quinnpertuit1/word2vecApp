# Word2Vec application with TED talk transcripts

The word2Vec app delivers similar words by training a machine learning model ([word2vec by gensim](https://radimrehurek.com/gensim/models/word2vec.html)) with TED talk transcripts. I am using the npm package [word2vec](https://www.npmjs.com/package/word2vec) with the model via Node.js. 

## Installation

First download or pull this master branch, then initialize the server application (install [Node.js](https://nodejs.org/en/) first, if you don't have it)

```bash
#Install all packages
npm install 
#Start the server
node serve.js
```

You can find the application on localhost:3000. 

## Usage

Just type in a word and after submission you will see the words that have been used the most in combination with this word. 

![Usage](https://i.imgur.com/06O72HA.png)

## Background
This summer I was doing a class on applied machine learning and was supposed to look for a project idea. After some research in this field (which in fact is a whole new bag of burritos, I was really astonished and overwhelmed) one specific algorithm caught my eye: [Word2Vec](https://en.wikipedia.org/wiki/Word2vec) models. 

### What is a Word2Vec model?
As an input the algorithm receives a large amount of text data (speeches, book content, dictionaries, crawled text from websites and so on) and assigns each word to a corresponding vector in space (the dimension of the vector is typically around 50–1000, depending on the data set). These “word vectors” are positioned close to other words, that are used in a similar context such as within the same sentence. E.g. the word „sing“ could be positioned close to „song“. Here's a point cloud of words that show the result of a trained model and how the words are mapped according to the dataset.

![Alt](https://i.imgur.com/5yZ9WYr.png)


I described the whole process in this [medium article](https://medium.com/@mekong.lam_95819/using-ted-talks-for-machine-learning-1cbbf22b4d72
).

Feel free to clone or fork! ♥️
