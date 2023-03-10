const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createJoke = (req, res) => {
    const{ setup, punchline} = req.body;
    console.log(req.body)
    Joke.create({
        setup,
        punchline
    })
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message:'something went wrong', error: err }))
}

module.exports.findJokeById = (req, res) => {
    console.log(req.params._id)
    Joke.findById({_id: req.params._id })
        .then(joke => res.json({joke}))
        .catch(err => res.json({message: 'something went wrong', error: err}))
}

module.exports.updateJokeById = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
      })
        .then((updatedJoke) => res.json(updatedJoke))
        .catch((err) => console.log(err));
    };